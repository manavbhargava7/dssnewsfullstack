import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";

const DSScards = [
    {
      imageSrc: "https://opendatascience.com/wp-content/uploads/2023/08/Untitled-design-7-1-600x300.png",
      title: "\"Orion\" AI Model",
      description: "OpenAI Prepares for the Next Frontier with “Orion” AI Model Release by December",
      rating: "5",
      url: 'https://opendatascience.com/openai-prepares-for-the-next-frontier-with-orion-ai-model-release-by-december/',
      topicText: 'Artificial Intelligence',
      authorText: 'ODSC Team',
      views: 115,
    },
    {
      imageSrc: "https://opendatascience.com/wp-content/uploads/2024/10/Quora-Banners-640x300.jpg",
      title: "Predictive Analytics and Businesses",
      description: "How Predictive Analytics Can Help Businesses Make Better Decisions.",
      rating: "4",
      url: 'https://opendatascience.com/how-predictive-analytics-can-help-businesses-make-better-decisions/',
      topicText: 'Data Analytics',
      authorText: 'ODSC Community',
      views: 75,
    },
    {
      imageSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1SmNYd1MtrW5TtRno5ruQg.jpeg",
      title: "Building a Sentiment Analysis report using NLTK and Altair",
      description: "Using the UCI News dataset we’ll calculate positivity of news headlines, visualize the results and package them into an interactive report",
      rating: "3",
      url: 'https://towardsdatascience.com/building-a-sentiment-analysis-interactive-report-using-nltk-and-altair-83cb9fcb36fe',
      topicText: 'Sentiment Analysis',
      authorText: 'John Micah Reid',
      views: 60,
    },
    {
      imageSrc: "https://assets.bbhub.io/image/v1/resize?type=auto&url=https%3A%2F%2Fassets.bbhub.io%2Fmedia%2Fsites%2F2%2F2024%2F08%2Fmona_lisa.jpg&width=751",
      title: "Artificial Intelligence Will Enhance Human Creativity, Not Replace It",
      description: "Artificial Intelligence Will Enhance Human Creativity, Not Replace It",
      rating: "4",
      url: 'https://www.bloombergmedia.com/blog/artificial-intelligence-will-enhance-human-creativity-not-replace-it/',
      topicText: 'Artificial Intelligence',
      authorText: 'Jon Krohn',
      views: 55,
    },
  ]
  const personalCards = [
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/10/bf20-forcefield.jpg?resize=2048,1139",
      title: "Deepfake Detection",
      description: "ForceField helps detect deepfakes and digital deception by verifying source data",
      rating: "4",
      url: 'https://techcrunch.com/2024/10/29/forcefield-helps-detect-deepfakes-and-digital-deception-by-verifying-source-data/',
      topicText: 'Artificial Intelligence',
      authorText: 'Paul Sawers'
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/10/bf20-mdc.jpg",
      title: "Surgical Robot",
      description: "MDC is building a surgical robot that operates inside an MRI",
      rating: "3",
      url: 'https://techcrunch.com/2024/10/29/mdc-is-building-a-surgical-robot-that-operates-inside-an-mri/',
      topicText: 'Robots',
      authorText: 'Brian Heater'
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/09/Screenshot-2024-09-25-at-08.59.42.png?resize=2048,1015",
      title: "Automatic Translation",
      description: "Reddit is bringing AI-powered, automatic translation to dozens of new countries",
      rating: "5",
      url: 'https://techcrunch.com/2024/09/25/reddit-is-bringing-ai-powered-automatic-translation-to-dozens-of-new-countries/',
      topicText: 'Machine Learning',
      authorText: 'Paul Sawers'
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2151466539.jpg?resize=2048,1363",
      title: "Gen AI @ Google",
      description: "Google says its next-gen AI agents won’t launch until 2025 at the earliest",
      rating: "7",
      url: 'https://techcrunch.com/2024/10/29/google-says-its-next-gen-ai-agents-wont-launch-until-2025-at-the-earliest/',
      topicText: 'Artificial Intelligence',
      authorText: 'Kyle Wiggers'
    },
  ]
  const uniqueTitlesDSS = [...new Set(DSScards.map(card => card.topicText))].join(", ");
  const uniqueTitlesPersonal = [...new Set(personalCards.map(card => card.topicText))].join(", ");
export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCard cards={DSScards} title={<>
      DSS Loves... <span style={{ fontSize: '20px' }}>{uniqueTitlesDSS}</span>
    </>}/>
    <SliderCard cards={personalCards} title={<>
      Recently Viewed: <span style={{ fontSize: '20px' }}>{uniqueTitlesPersonal}</span>
    </>}/>
    <SubscribeNewsLetterForm />
    <Footer />
   </AnimationRevealPage>
);
