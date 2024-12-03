const mongoose = require('./db'); // Import mongoose from your db.js file

// Define the schema for research articles
const researchArticlesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageSrc: { type: String },
  topicText: { type: String },
  authorText: { type: String },
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
  savedBy: { type: [String], default: [] }, // Array of user IDs who saved the article
});

// Create the model for the collection
const ResearchArticle = mongoose.model('ResearchArticle', researchArticlesSchema,'research_articles');

module.exports = ResearchArticle;
