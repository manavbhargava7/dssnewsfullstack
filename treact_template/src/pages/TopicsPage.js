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
    // const [artsCards, setArtsCards] = useState([]);
    // const [technologyCards, setTechnologyCards] = useState([]);
    // const [researchCards, setResearchCards] = useState([]);

    // Global loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setError(error.message);
            }
        };

        // Fetch articles for all categories in parallel
        const fetchAllArticles = async () => {
            setLoading(true);
            try {
                await Promise.all([
                    fetchArticles(
                        `https://newsdata.io/api/1/latest?country=us&category=business&language=en&qInMeta=AI%20AND%20finance&apikey=${TANISH_API_KEY}`,
                        setFinanceCards
                    )
                ]);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllArticles();
    }, []);

    return (
        <AnimationRevealPage>
            {/* Render Loading/Error Messages or the Cards */}
            {error ? (
                <p>Error fetching articles: {error}</p>
            ) : loading ? (
                <p>Loading articles...</p>
            ) : (
                <>
                    <SliderCard cards={financeCards} title={"Finance"} />
                </>
            )}

            {/* Render Footer */}
        </AnimationRevealPage>
    );
}

export default TopicsPage;
