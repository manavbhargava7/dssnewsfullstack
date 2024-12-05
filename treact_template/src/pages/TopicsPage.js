import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import { v4 as uuidv4 } from "uuid";

const API_BASE_URL = "http://localhost:5001/api"; // Backend API Base URL
const FINANCE_API_URL = `https://newsdata.io/api/1/latest?country=us&category=business&language=en&qInMeta=AI%20AND%20finance&apikey=pub_59183049ef9fe354bb9a4115cacbe4f5e7c73`;

export default () => {
  const [financeCards, setFinanceCards] = useState([]);

  const saveArticles = async (articles, category) => {
    try {
      const response = await fetch("http://localhost:5001/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articles.map((article) => ({ ...article, topicText: category }))),
      });

      if (!response.ok) throw new Error("Failed to save articles");

      const savedArticles = await response.json();
      console.log(`Saved ${category} articles:`, savedArticles);

      return savedArticles;
    } catch (error) {
      console.error(`Error saving ${category} articles:`, error);
      return [];
    }
  };

  const fetchData = async (url, category, setState) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "success" && data.results) {
        const transformedCards = data.results.map((article) => ({
          uuid: uuidv4(),
          imageSrc: article.image_url || "https://via.placeholder.com/150",
          title: article.title || "Untitled",
          description: article.description || "No description available",
          topicText: category,
          authorText: article.source_name || "Unknown",
          url: article.link || "#",
          likes: 0,
        }));

        const savedArticles = await saveArticles(transformedCards, category);
        setState((prevState) => {
          const allArticles = [...prevState, ...savedArticles];
          return allArticles.slice(0, 10);
        });
      }
    } catch (error) {
      console.error(`Error fetching ${category} articles:`, error);
    }
  };

  useEffect(() => {
    fetchData(FINANCE_API_URL, "Finance", setFinanceCards);
  }, []);

  useEffect(() => {
    console.log("financeCards:", financeCards);
  }, [financeCards]);


  return (
    <AnimationRevealPage>
      <SliderCard cards={financeCards} title={"Finance"} />
    </AnimationRevealPage>
  );
}