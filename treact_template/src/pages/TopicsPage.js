import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { NavLink } from "react-router-dom";
import Header, { NavLinks, PrimaryLink } from "components/headers/light.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Footer from "components/footers/MiniCenteredFooter.js";
const TANISH_API_KEY = process.env.REACT_APP_TANISH_API_KEY; 


function TopicsPage() {
    // State for each category
    const [financeCards, setFinanceCards] = useState([]);


    useEffect(() => {
        // Function to fetch articles from the API
        const fetchArticles = async (url, setCardsCallback) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                console.log("API Response:", data); // Debugging
                const articles = data.results || [];

                // Transform the API data to match the card structure
                const formattedCards = articles.map(article => ({
                    imageSrc: article.image_url || "https://via.placeholder.com/300", // Default placeholder
                    title: article.title || "Untitled",
                    description: article.description || "No description available.",
                    topicText: "Category", // This can be static or dynamic if required
                    authorText: article.source_id || "Unknown Author",
                    rating: Math.floor(Math.random() * 1000), // Random rating for now
                    url: article.link || "#"
                }));

                setCardsCallback(formattedCards);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchArticles(`https://newsdata.io/api/1/latest?country=us&category=business&language=en&qInMeta=AI%20AND%20finance&apikey=pub_59183049ef9fe354bb9a4115cacbe4f5e7c73`, setFinanceCards);
    }, []);


    return (
        <AnimationRevealPage>
          <SliderCard cards={financeCards} title={"Finance"} />
        </AnimationRevealPage>
      );
}

export default TopicsPage;
