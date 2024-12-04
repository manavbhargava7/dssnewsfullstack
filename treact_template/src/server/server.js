const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Article = require("./models/Article");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// API Endpoints
const { v4: uuidv4 } = require("uuid");


app.post("/api/articles", async (req, res) => {
    try {
        console.log("Incoming articles for saving:", req.body);

        const operations = req.body.map((article) => ({
            updateOne: {
                filter: { url: article.url },
                update: {
                    $setOnInsert: {
                        uuid: article.uuid || uuidv4(),
                        imageSrc: article.imageSrc,
                        title: article.title,
                        description: article.description,
                        topicText: article.topicText,
                        authorText: article.authorText,
                        url: article.url,
                        likes: article.likes || 0,
                    },
                },
                upsert: true,
            },
        }));

        const result = await Article.bulkWrite(operations, { ordered: false });
        console.log("Bulk write result:", result);

        const category = req.body[0]?.topicText || "General";
        const articles = await Article.find({ topicText: category }).sort({ _id: -1 });

        res.status(201).json(articles);
    } catch (error) {
        console.error("Error saving articles:", error.message);
        res.status(500).json({ error: "Failed to save articles. Check logs for details." });
    }
});


app.patch("/api/articles/:uuid/like", async (req, res) => {
    const { uuid } = req.params;

    try {
        console.log("Updating likes for article with UUID:", uuid);

        const article = await Article.findOneAndUpdate(
            { uuid },
            { $inc: { likes: 1 } },
            { new: true }
        );

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        res.status(200).json(article);
    } catch (error) {
        console.error("Error updating likes:", error);
        res.status(500).json({ error: "Failed to update likes" });
    }
});


app.get("/api/articles", async (req, res) => {
    const { category } = req.query;

    try {
        const query = category ? { topicText: category } : {};
        const articles = await Article.find(query).sort({ _id: -1 });
        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ error: "Failed to fetch articles" });
    }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
