import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import { v4 as uuidv4 } from "uuid";

const API_BASE_URL = "http://localhost:5001/api"; // Backend API Base URL
const FINANCE_API_URL = `https://newsdata.io/api/1/latest?country=us&category=business&language=en&qInMeta=AI%20AND%20finance&apikey=pub_61263e2c5dea8c3248021ead3a9b7297168dd`;
const RESEARCH_API_URL = `https://newsdata.io/api/1/latest?apikey=pub_591003bbce2388f3a97224f1a4c43f10b4170&language=en&category=technology&q=artificial intelligence research&image=1`;
const TECH_API_URL = 'https://newsdata.io/api/1/news?apikey=pub_59092654eaf4ed6458db6958a612b4ea21fd9&language=en&category=technology &image=1&qinMeta=new, announces&prioritydomain=top'; 


export default () => {
  const [financeCards, setFinanceCards] = useState([]);
  const [researchCards, setResearchCards] = useState([]);
  const [techCards, setTechCards] = useState([]);


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

  const truncateDescription = (description, maxWords = 100) => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : description;
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
          description: truncateDescription(article.description) || "No description available",
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
    fetchData(RESEARCH_API_URL, "Research", setResearchCards);
    fetchData(TECH_API_URL, "Technology", setTechCards);
  }, []);

  useEffect(() => {
    console.log("financeCards:", financeCards);
  }, [financeCards]);


  return (
    <AnimationRevealPage>
      <SliderCard cards={financeCards} title={"Finance"} />
      <SliderCard cards={researchCards} title={"Research"} />
      <SliderCard cards={techCards} title={"Technology"} />
    </AnimationRevealPage>
  );
}