import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/thumbs-up.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && css`
    background-color: #8dd6d0;
    color: black;
  `}
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-center`}
  svg {
    ${tw`w-4 h-4 text-orange-400 mr-1`}
  }
`;

const StarIconWrapper = styled.div`
  ${tw`flex items-center cursor-pointer`}
  svg {
    ${tw`w-6 h-6 transition-colors duration-300`}
    ${({ liked }) => (liked ? tw`text-green-500` : tw`text-gray-300`)}; /* Blue when liked */
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = styled(PrimaryButtonBase)`
  ${tw`text-sm`}
  background-color: #8dd6d0;
  color: black;
  &:hover {
    background-color: #79c7bd;
  }
`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-[#8dd6d0]`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const CardViews = tw.div`font-medium text-sm font-bold text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Saved Articles",
  tabs = {
    Today: getRandomCards(),
    "Last Week": getRandomCards(),
    "Last Month": getRandomCards(),
    "All Time": getRandomCards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIconWrapper>
                        <StarIcon />
                        </StarIconWrapper>
                        
                        {card.reviews}
                      </CardRating>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Read More</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardViews>{card.views}</CardViews>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2021-12/machine-learning-examples-applications.png",  
      title: "Introduction to Machine Learning",
      content: "Understanding the basics of ML algorithms",
      views: "Views: 12,234",
      rating: "4.9",
      reviews: "6,750",
      url: "#"
    },
    {
      imageSrc:
        "https://media.licdn.com/dms/image/D4D12AQHcmIZvSRXKQQ/article-cover_image-shrink_600_2000/0/1689342819629?e=2147483647&v=beta&t=64gDD8KG4vE_piu13nCWtD_muqTgqn-MT_E4brSPM6c",  
      title: "Data Visualization Techniques",
      content: "Best practices for visualizing data effectively",
      views: "Views: 5,168",
      rating: "4.9",
      reviews: "1,070",
      url: "#"
    },
    {
      imageSrc:
        "https://autogpt.net/wp-content/uploads/2024/11/Screenshot-2024-11-06-at-11.55.02-AM.jpg",  
      title: "SearchGPT vs Perplexity vs Google",
      content: "Given the rise in various AI search engines, which is the best for your search needs?",
      views: "Views: 5,391",
      rating: "4.2",
      reviews: "892",
      url: "https://autogpt.net/searchgpt-vs-perplexity-vs-google-which-is-the-best-for-your-search-needs/"
    },
    {
      imageSrc:
        "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202410/MIT_NEWS-PortaChrome4.png?itok=986ovvnB",  
      title: "A portable light system that can digitize everyday objects",
      content: "A new design tool uses UV and RGB lights to change the color and textures of everyday objects.",
      views: "Views: 48,920",
      rating: "4.4",
      reviews: "9,285",
      url: "https://news.mit.edu/2024/portable-light-system-can-digitize-everyday-objects-1106"
    },
    {
      imageSrc:
        "https://www.zdnet.com/a/img/resize/dee5bfd7ca9305641ae9e7bbdcd7c58afe2694db/2024/10/30/03b2dbbe-6086-4f63-9883-b13dd1b210f0/aidata5gettyimages-1979289147.jpg?auto=webp&width=1280",  
      title: "Why data is the Achilles Heel of AI (and every other business plan)",
      content: "Companies need to put their data houses in order before moving ahead with generative AI initiatives, warn two new surveys.",
      views: "Views: 234",
      rating: "2.2",
      reviews: "41",
      url: "https://www.zdnet.com/article/why-data-is-the-achilles-heel-of-ai-and-every-other-business-plan/"
    },
    {
      imageSrc:
        "https://www.zdnet.com/a/img/resize/aa7bddb2d6ac13f0f970c9f43baf81ee58b75204/2024/10/28/676dd4ab-e5fc-4abb-98c5-67248eda929a/gettyimages-1437459304.jpg?auto=webp&precrop=2121,1192,x0,y84&width=1280",  
      title: "Could AI make data science obsolete?",
      content: "According to these experts, AI democratizes software development, but could eventually replace it altogether -- and change data science as we know it.",
      views: "Views: 397",
      rating: "4.2",
      reviews: "28",
      url: "https://www.zdnet.com/article/could-ai-make-data-science-obsolete/"
    },
    {
      imageSrc:
        "https://images.axios.com/o6PX2Ynn_VfHpcv35CthByCGqMU=/0x0:1920x1080/1920x1080/2024/11/06/1730893470581.jpg?w=3840",
      title: "Young AI just got a ticket to run wild",
      content: "Trump victory gives young AI a ticket to run wild",
      views: "Views: 21,970",
      rating: "4.6",
      reviews: "8,147",
      url: "https://www.axios.com/2024/11/06/trump-harris-election-outcome-ai-future"
    },
    {
      imageSrc:
        "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202409/idss-icsr-systemic-racism-data-hub.jpg?itok=tbnwcAVO",
      title: "Empowering systemic racism research at MIT and beyond",
      content: "Researchers in the MIT Initiative on Combatting Systemic Racism are building an open data repository to advance research on racial inequity in domains like policing, housing, and health care.",
      views: "Views: 3,911",
      rating: "3.3",
      reviews: "861",
      url: "https://news.mit.edu/2024/empowering-systemic-racism-research-mit-and-beyond-1104"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
