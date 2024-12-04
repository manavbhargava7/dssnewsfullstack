const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    uuid: { type: String, unique: true, required: true },
    imageSrc: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    topicText: { type: String, default: "General" },
    authorText: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    likes: { type: Number, default: 0 },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
