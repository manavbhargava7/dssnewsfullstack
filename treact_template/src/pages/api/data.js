import connectDB from "../lib/connectDB"; // Correct relative path
import Article from "../../Model/User"; // Correct relative path

export default async function handler(req, res) {
    console.log("API route hit:", req.method);

    await connectDB();

    if (req.method === "POST") {
        try {
            const { articles } = req.body;

            if (!articles || !Array.isArray(articles)) {
                return res.status(400).json({ success: false, message: "Invalid articles data" });
            }

            const savedArticles = await Article.insertMany(articles);
            res.status(200).json({ success: true, data: savedArticles });
        } catch (error) {
            console.error("Error saving articles:", error);
            res.status(500).json({ success: false, message: "Error saving articles" });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}
