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

const recCards = [
  {
    imageSrc: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2178013764.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
    title: "Intel is a security risk for China",
    description: "Intel products sold in China should be subject to a security review, the Cybersecurity Association of China (CSAC) said on Wednesday, alleging the US chipmaker has “constantly harmed” the country’s national security and interests.",
    topicText: "Big Tech",
    authorText: "Reuters",
    rating: "4.8",
    url: "https://www.cnn.com/2024/10/16/tech/china-intel-security-review-intl-hnk/index.html"
  },
  {
    imageSrc: "https://media.cnn.com/api/v1/images/stellar/prod/2024-05-07t012426z-1755337355-rc2cl7a6o2f4-rtrmadp-3-milken-conference-copy.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
    title: "SpaceX sues California regulator",
    description: "Elon Musk’s SpaceX has accused a California regulator of political discrimination after it voted to block the rocket company from conducting more launches on the state’s central coast.",
    topicText: "Big Tech",
    authorText: "Clare Duffy",
    rating: 4.9,
    url: "https://www.cnn.com/2024/10/16/tech/elon-musk-spacex-lawsuit-conspiracy-theories/index.html"
  },
  {
    imageSrc: "https://media.cnn.com/api/v1/images/stellar/prod/230427100146-snapchat-my-ai-chatbot.jpg?q=w_1110,c_fill/f_webp",
    title: "Snapchat’s new AI chatbot is already raising alarms among teens and parents",
    description: "Less than a few hours after Snapchat rolled out its My AI chatbot to all users last week, Lyndsi Lee, a mother from East Prairie, Missouri, told her 13-year-old daughter to stay away from the feature.",
    topicText: "AI",
    authorText: "Samantha Murphy Kelly",
    rating: "5.0",
    url: "https://www.cnn.com/2023/04/27/tech/snapchat-my-ai-concerns-wellness/index.html"
  },
  {
    imageSrc: "https://www.rcfp.org/wp-content/uploads/2019/03/Flag_of_the_Federal_Bureau_of_Investigation.png",
    title: "FBI warns consumers not to use public phone charging stations",
    description: "The FBI is warning consumers against using public phone charging stations in order to avoid exposing their devices to malicious software.",
    topicText: "Security",
    authorText: "Jennifer Korn",
    rating: 4.5,
    url: "https://www.cnn.com/2023/04/12/tech/fbi-public-charging-port-warning/index.html"
  },
]

const trendingCards = [
  {
    imageSrc: "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt04eeba92b0e5bb7a/671ad1e1d46cff7e25ac0803/GettyImages-2149059417.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
    title: "IBM Unveils Granite 3.0",
    description: "IBM is diving deeper into the large language model race with Granite 3.0.",
    topicText: "Artificial Intelligence",
    authorText: "Christopher Hutton",
    rating: "4.8",
    url: "https://aibusiness.com/nlp/ibm-unveils-granite-3-0-as-workhorse-ai-model"
  },
  {
    imageSrc: "https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt981df99721245dc6/671aa04c0aa6043d1d9a10ef/GettyImages-693893643.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
    title: "Nvidia, Microsoft Join Forces",
    description: "Nvidia, Microsoft Join Forces to Accelerate AI Health Care Startups. Microsoft provides $350,000 worth of software tools to each company.",
    topicText: "AI Healthcare",
    authorText: "Heidi Vella",
    rating: 4.9,
    url: "https://aibusiness.com/nlp/nvidia-microsoft-join-forces-to-accelerate-ai-health-care-startups"
  },
  {
    imageSrc: "https://www.datasciencecentral.com/wp-content/uploads/2024/10/why-ai-bias-is-a-cybersecurity-risk-feature-scaled.jpg",
    title: "Why AI bias is a cybersecurity risk",
    description: "Artificial intelligence (AI) has made its way into nearly every facet of running a small or mid-sized business in the modern age. When programmed appropriately, AI can improve response time and catch security threats before they become a problem. Unfortunately, AI inherently comes with the potential for biases and can skew algorithms in strange ways.",
    topicText: "AI Security",
    authorText: "Zachary Amos",
    rating: "5.0",
    url: "https://www.datasciencecentral.com/why-ai-bias-is-a-cybersecurity-risk-and-how-to-address-it/"
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg",
    title: "4 Years of Data Science in 8 Minutes",
    description: "What I have learned in my 4+ year journey of studying data science.",
    topicText: "Data Science",
    authorText: "Egor Howell",
    rating: 4.5,
    url: "https://towardsdatascience.com/4-years-of-data-science-in-8-minutes-6ea5b10f0192"
  },
]

export default () => (
  <AnimationRevealPage>
    <Hero />
    {/* <Features /> */}
    <SliderCard cards={recCards} title={"Recommended"} />
    <SliderCard cards={trendingCards} title={"Trending"} />
    {/* <TrendingCard /> */}
    {/* <MainFeature /> */}
    {/* <Blog /> */}
    {/* <Testimonial textOnLeft={true} /> */}
    <FAQ />
    <SubscribeNewsLetterForm />
    <Footer />
  </AnimationRevealPage>
);
