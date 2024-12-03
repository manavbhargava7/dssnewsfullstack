const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const ResearchArticle = require('./research_articles');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// POST route to save articles
app.post('/api/saveArticles', async (req, res) => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/latest', {
      params: {
        apikey: 'pub_591003bbce2388f3a97224f1a4c43f10b4170',
        language: 'en',
        category: 'technology',
        q: 'artificial intelligence',
        image: 1,
      },
    });

    const articles = response.data.results.map((article) => ({
      title: article.title,
      description: article.description || 'No description available.',
      imageSrc: article.image_url || 'https://example.com/default-image.jpg',
      topicText: article.category?.[0] || 'Unknown',
      authorText: article.source_id || 'Unknown',
      url: article.link,
      likes: 0,
      savedBy: [],
    }));

    console.log(articles); // Log articles before saving
    await ResearchArticle.insertMany(articles);
    res.status(201).send('Articles fetched and saved successfully!');
  } catch (error) {
    console.error('Error saving articles:', error);
    res.status(500).send('Error saving articles');
  }
});

// GET route to fetch articles
app.get('/api/getArticles', async (req, res) => {
  try {
    const articles = await ResearchArticle.find();
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).send('Error fetching articles');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
