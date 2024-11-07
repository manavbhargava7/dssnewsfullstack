import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";

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

const researchCards = [
    {
        imageSrc: "https://www.bcrf.org/wp-content/uploads/2024/08/ai-breast-cancer-drug-development.png",
        title: "AI and Breast Cancer Drug Development",
        description: "Exploring how AI is transforming breast cancer drug development and improving patient outcomes.",
        topicText: "Breast Cancer Research",
        authorText: "BCRF",
        rating: "1233",
        url: "https://www.bcrf.org/blog/ai-breast-cancer-drug-development/"
    },
    {
        imageSrc: "https://news.gsu.edu/files/2019/05/image-for-legal-analytics-lab.jpg",
        title: "Using AI to Make Law Accessible to All",
        description: "Georgia State University faculty employ AI to democratize access to legal information.",
        topicText: "Legal Research",
        authorText: "Georgia State University",
        rating: "5008",
        url: "https://news.gsu.edu/2024/10/30/georgia-state-university-faculty-use-ai-to-make-law-accessible-to-all/"
    },
    {
        imageSrc: "https://www.eli.org/sites/default/files/images/leaf%20and%20ndee%202_0.jpeg",
        title: "AI for Environmental Science",
        description: "Insights into how AI is utilized in environmental science to tackle pressing global issues.",
        topicText: "Environmental Science",
        authorText: "Frontiers in Environmental Science",
        rating: "4217",
        url: "https://www.frontiersin.org/journals/environmental-science/articles/10.3389/fenvs.2021.619092/full"
    },
    {
        imageSrc: "https://cdn.cancerletter.com/media/2024/07/12144555/50-28-wide-scaled.jpg",
        title: "AI in Cancer Research",
        description: "How AI advancements are shaping the future of cancer research and treatment.",
        topicText: "Cancer Research",
        authorText: "The Cancer Letter",
        rating: "9848",
        url: "https://cancerletter.com/conversation-with-the-cancer-letter/20240712_1/"
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

const customLinks = [
    <NavLinks key={1}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/saved">Saved</NavLink>
        <NavLink href="/account">Account</NavLink>
        <PrimaryLink href="/signup">Sign Up</PrimaryLink>
    </NavLinks>
];

function TopicsPage() {
    return (
        <AnimationRevealPage>
            {/* <Header links={customLinks} /> Custom header with specified links */}
            <SliderCard cards={financeCards} title={"Finance"} />
            <SliderCard cards={researchCards} title={"Research"} />
            <SliderCard cards={artsCards} title={"Arts"} />
            <SliderCard cards={technologyCards} title={"Technology"} />
            <SubscribeNewsLetterForm />
            <Footer />
        </AnimationRevealPage>
    );
}

export default TopicsPage;
