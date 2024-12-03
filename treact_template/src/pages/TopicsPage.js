import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";

const financeCards = [
    {
        imageSrc: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc8DJjzkeQnqBXfZzS32SZLpUP0fndJADOxRFQKBoC084GzYrGEwzanwvPadaBC_4rEu2I6Z8U9ZrlWWU_yj3ghE61ELIu_cnspCrW4AuqrxZSjq2Rjqn52ZVLS0nva7zD6tg6PBt11IfCrDxonjDkMMiwO?key=0BXl_l8_1khcvM_kP0YrAQ",
        title: "How Big Data Helps Investors Make Better Decisions",
        description: "An exploration of how big data analytics is empowering investors to make more informed decisions.",
        topicText: "Finance & Data Science",
        authorText: "Finextra",
        rating: "478",
        url: "https://www.finextra.com/blogposting/26557/how-big-data-helps-investors-make-better-decisions"
    },
    {
        imageSrc: "https://imgproxy.divecdn.com/lLzg6oLbxYgDP7QUVmMBKi7KNQ_qZdfLJBViQSMExXU/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL0dldHR5SW1hZ2VzLTE5NzkyODkxNDdfMS5qcGc=.webp",
        title: "How CFOs Can Introduce AI Into Financial Operations",
        description: "A guide on how CFOs can effectively integrate AI to enhance financial operations and strategy.",
        topicText: "Finance & AI",
        authorText: "CFO",
        rating: "102",
        url: "https://www.cfo.com/news/how-cfos-can-introduce-ai-into-financial-operations-roi-strategy/725243/"
    },
    {
        imageSrc: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2023636932-copy.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        title: "AI Fraud Concerns in Treasury Operations",
        description: "Discussing the risks of AI-driven fraud in the treasury and financial sectors.",
        topicText: "Finance & Security",
        authorText: "CNN Business",
        rating: "989",
        url: "https://www.cnn.com/2024/10/17/business/ai-fraud-treasury/index.html"
    },
    {
        imageSrc: "https://imageio.forbes.com/specials-images/imageserve/66f77e69da8133260b01f5fa/It-s-a-changing-world--why-data-security--FP-A-and-AI-are-top-CFO-priorities/960x0.jpg?format=jpg&width=1440",
        title: "Why Data Security, FPA, and AI are Top CFO Priorities",
        description: "Examining why data security and AI are becoming top priorities for CFOs in a changing world.",
        topicText: "Finance & Data Security",
        authorText: "Forbes",
        rating: "556",
        url: "https://www.forbes.com/sites/jimdeloach/2024/09/30/its-a-changing-world-why-data-security-fpa-and-ai-are-top-cfo-priorities/"
    },
];

const artsCards = [
    {
        imageSrc: "https://entrepreneurship.babson.edu/wp-content/uploads/2024/09/AIArt1200x630.jpg",
        title: "Data Science and AI in Art",
        description: "Exploring how data science and AI are influencing modern art.",
        topicText: "AI & Art",
        authorText: "Babson College",
        rating: "2255",
        url: "https://entrepreneurship.babson.edu/data-science-ai-art/"
    },
    {
        imageSrc: "https://uniathenaprods3.uniathena.com/s3fs-public/2024-06/Art%26MusicHowDataScienceisChangingEverything.jpg",
        title: "Art and Music: How Data Science is Changing Everything",
        description: "An exploration of the ways data science is impacting art and music.",
        topicText: "Data Science & Music",
        authorText: "UniAthena",
        rating: "7789",
        url: "https://uniathena.com/art-music-how-data-science-is-changing-everything"
    },
    {
        imageSrc: "https://res.cloudinary.com/digicomm/image/upload/t_full-banner-xxlarge/news-magazine/2024/_assets/art-collage-2.jpg",
        title: "Art Inspired by Science",
        description: "Student researchers use creative talents to share their passion for nature.",
        topicText: "Art & Science",
        authorText: "Florida International University",
        rating: "5555",
        url: "https://news.fiu.edu/2024/art-inspired-by-science-student-researchers-are-using-their-creative-talents-to-share-their-love-of-nature"
    },
    {
        imageSrc: "https://news.virginia.edu/sites/default/files/Header_NA_DataScienceArt_JD.jpg",
        title: "Data Art Competition Draws 130+ Submissions",
        description: "A competition that encourages artists to use data science as inspiration.",
        topicText: "Data Art",
        authorText: "University of Virginia",
        rating: "1478",
        url: "https://news.virginia.edu/content/data-art-competition-draws-more-130-submissions"
    },
];

const technologyCards = [
    {
        imageSrc: "https://www.kdnuggets.com/wp-content/uploads/kdn-data-science-social-good.png",
        title: "Data Science for Social Good: Real World Projects Making a Difference",
        description: "An exploration of impactful data science projects for social good.",
        topicText: "Social Good & Data Science",
        authorText: "KDnuggets",
        rating: "258",
        url: "https://www.kdnuggets.com/data-science-for-social-good-real-world-projects-making-a-difference"
    },
    {
        imageSrc: "https://static.innovativemedicine.jnj.com/dims4/default/de509ea/2147483647/strip/true/crop/2000x1125+0+57/resize/1920x1080!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-im.s3.us-east-1.amazonaws.com%2Fbrightspot%2F57%2F28%2F79d0ffd34d41985d607bf80553f4%2Fjjim-photo-retinalmicroscopy-01-3016.jpg",
        title: "R&D, Data Science, and Digital Health",
        description: "How data science and digital health shape research and development.",
        topicText: "R&D & Digital Health",
        authorText: "Johnson & Johnson",
        rating: "488",
        url: "https://innovativemedicine.jnj.com/our-innovation/research-development/r-d-data-science-digital-health"
    },
    {
        imageSrc: "https://cdn.mos.cms.futurecdn.net/CtHGHcyJM2BmTxFzgJWmBZ-650-80.jpg.webp",
        title: "Machine Learning vs Data Science: What's the Difference?",
        description: "Understanding the distinctions between machine learning and data science.",
        topicText: "Data Science & Machine Learning",
        authorText: "ITPro",
        rating: "3695",
        url: "https://www.itpro.com/business-strategy/data-insights/369981/machine-learning-vs-data-science-whats-the-difference"
    },
    {
        imageSrc: "https://imageio.forbes.com/specials-images/imageserve/668411a33ed239df388d71c7/What-is-the-future-of-data-science-in-the-generative-AI-age-/960x0.jpg?format=jpg&width=1440",
        title: "Are Data Scientists Still Key to AI?",
        description: "An analysis of data science's role in the era of generative AI.",
        topicText: "Data Science & AI",
        authorText: "Forbes",
        rating: "8954",
        url: "https://www.forbes.com/sites/ronschmelzer/2024/07/05/are-data-scientists-still-key-to-ai/"
    },
];

function TopicsPageAPI() {
    const [researchCards, setResearchCards] = useState([]);

    useEffect(() => {
        const fetchResearchArticles = async () => {
            try {
                const response = await fetch(
                    "https://newsdata.io/api/1/latest?apikey=pub_591003bbce2388f3a97224f1a4c43f10b4170&language=en&category=technology&q=artificial intelligence research&image=1"
                );
                const data = await response.json();
                if (data.results) {
                    const formattedArticles = data.results.map((article) => ({
                        imageSrc: article.image_url || "default-image-url.jpg",
                        title: article.title,
                        description: truncateText(article.description, 100), // Limit to 100 words
                        topicText: article.category || "Research",
                        authorText: article.source_id || "Unknown Source",
                        likes: 0,
                        savedBy: [],
                        url: article.link,
                    }));

                    // Save formatted articles to MongoDB
                    saveArticlesToDatabase(formattedArticles);

                    // Update state
                    setResearchCards(formattedArticles);
                }
            } catch (error) {
                console.error("Error fetching research articles:", error);
            }
        };

        fetchResearchArticles();
    }, []);

    // Function to save articles to MongoDB
    const saveArticlesToDatabase = async (articles) => {
        try {
            await fetch("http://localhost:5000/api/saveArticles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ articles }),
            });
            console.log("Articles saved to MongoDB!");
        } catch (error) {
            console.error("Error saving articles to MongoDB:", error);
        }
    };

    // Helper function to truncate text
    const truncateText = (text, wordLimit) => {
        if (!text) return ""; // Handle empty text
        const words = text.split(" "); // Split into words
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..." // Truncate and add ellipsis
            : text; // Return original if within limit
    };

    return (
        <AnimationRevealPage>
            {/* Render articles */}
            {researchCards.map((card, index) => (
                <div key={index}>
                    <img src={card.imageSrc} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        </AnimationRevealPage>
    );
}

export default TopicsPageAPI;
