import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ThumbsUpIcon } from "feather-icons/dist/icons/thumbs-up.svg";
import { ReactComponent as AuthorIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TopicIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;


const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const DSScards = [
    {
      imageSrc: "https://opendatascience.com/wp-content/uploads/2023/08/Untitled-design-7-1-600x300.png",
      title: "\"Orion\" AI Model",
      description: "OpenAI Prepares for the Next Frontier with “Orion” AI Model Release by December",
      rating: "5",
      link: 'https://opendatascience.com/openai-prepares-for-the-next-frontier-with-orion-ai-model-release-by-december/',
      topic: 'Artificial Intelligence',
      author: 'ODSC Team',
      views: 115,
    },
    {
      imageSrc: "https://opendatascience.com/wp-content/uploads/2024/10/Quora-Banners-640x300.jpg",
      title: "Predictive Analytics and Businesses",
      description: "How Predictive Analytics Can Help Businesses Make Better Decisions.",
      rating: "4",
      link: 'https://opendatascience.com/how-predictive-analytics-can-help-businesses-make-better-decisions/',
      topic: 'Data Analytics',
      author: 'ODSC Community',
      views: 75,
    },
    {
      imageSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1SmNYd1MtrW5TtRno5ruQg.jpeg",
      title: "Building a Sentiment Analysis report using NLTK and Altair",
      description: "Using the UCI News dataset we’ll calculate positivity of news headlines, visualize the results and package them into an interactive report",
      rating: "3",
      link: 'https://towardsdatascience.com/building-a-sentiment-analysis-interactive-report-using-nltk-and-altair-83cb9fcb36fe',
      topic: 'Sentiment Analysis',
      author: 'John Micah Reid',
      views: 60,
    },
    {
      imageSrc: "https://assets.bbhub.io/image/v1/resize?type=auto&url=https%3A%2F%2Fassets.bbhub.io%2Fmedia%2Fsites%2F2%2F2024%2F08%2Fmona_lisa.jpg&width=751",
      title: "Artificial Intelligence Will Enhance Human Creativity, Not Replace It",
      description: "Artificial Intelligence Will Enhance Human Creativity, Not Replace It",
      rating: "4",
      link: 'https://www.bloombergmedia.com/blog/artificial-intelligence-will-enhance-human-creativity-not-replace-it/',
      topic: 'Artificial Intelligence',
      author: 'Jon Krohn',
      views: 55,
    },
  ]
  const personalCards = [
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/10/bf20-forcefield.jpg?resize=2048,1139",
      title: "Deepfake Detection",
      description: "ForceField helps detect deepfakes and digital deception by verifying source data",
      rating: "4",
      link: 'https://techcrunch.com/2024/10/29/forcefield-helps-detect-deepfakes-and-digital-deception-by-verifying-source-data/',
      topic: 'Artificial Intelligence',
      author: 'Paul Sawers'
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/10/bf20-mdc.jpg",
      title: "Surgical Robot",
      description: "MDC is building a surgical robot that operates inside an MRI",
      rating: "3",
      link: 'https://techcrunch.com/2024/10/29/mdc-is-building-a-surgical-robot-that-operates-inside-an-mri/',
      topic: 'Robots',
      author: 'Brian Heater'
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/09/Screenshot-2024-09-25-at-08.59.42.png?resize=2048,1015",
      title: "Automatic Translation",
      description: "Reddit is bringing AI-powered, automatic translation to dozens of new countries",
      rating: "5",
      link: 'https://techcrunch.com/2024/09/25/reddit-is-bringing-ai-powered-automatic-translation-to-dozens-of-new-countries/',
      topic: 'Machine Learning',
      author: 'Paul Sawers'
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2024/08/GettyImages-2151466539.jpg?resize=2048,1363",
      title: "Gen AI @ Google",
      description: "Google says its next-gen AI agents won’t launch until 2025 at the earliest",
      rating: "7",
      link: 'https://techcrunch.com/2024/10/29/google-says-its-next-gen-ai-agents-wont-launch-until-2025-at-the-earliest/',
      topic: 'Artificial Intelligence',
      author: 'Kyle Wiggers'
    },
  ]
  const uniqueTitlesDSS = [...new Set(DSScards.map(card => card.topic))].join(", ");
  const uniqueTitlesPersonal = [...new Set(personalCards.map(card => card.topic))].join(", ");

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>DSS Loves...</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <Text style={{ fontSize: '20px' }}>{uniqueTitlesDSS} 🔥</Text>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {DSScards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <ThumbsUpIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <TopicIcon />
                    </IconContainer>
                    <Text>{card.topic}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <AuthorIcon />
                    </IconContainer>
                    <Text>{card.author}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Text>Views: {card.views}</Text>
                <Description>{card.description}</Description>
              </TextInfo>
              <a href = {card.link}>
              <PrimaryButton>Read Now</PrimaryButton>
              </a>
            </Card>
          ))}
        </CardSlider>
      </Content>
      <Content>
        <HeadingWithControl>
          <Heading>Recently Viewed</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <Text style={{ fontSize: '20px' }}>Currently Loving: {uniqueTitlesPersonal} 🔥🔥🔥</Text>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {personalCards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <ThumbsUpIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <TopicIcon />
                    </IconContainer>
                    <Text>{card.topic}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <AuthorIcon />
                    </IconContainer>
                    <Text>{card.author}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <a href = {card.link}>
              <PrimaryButton>Read Now</PrimaryButton>
              </a>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};