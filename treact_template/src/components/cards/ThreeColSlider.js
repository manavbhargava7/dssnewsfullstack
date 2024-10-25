import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as TopicIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as AuthorIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as ThumbsUpIcon } from "feather-icons/dist/icons/thumbs-up.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  background-color: #289E9E;
  color: white;
  svg {
    ${tw`w-6 h-6`}
  }
  &:hover {
    background-color: #70b4b4; /* Slightly darker on hover */
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
const CardLikeButton = styled.button`
  ${tw`flex items-center cursor-pointer`}
  svg {
    ${tw`w-6 h-6 transition-colors duration-300`}
    ${({ liked }) => (liked ? tw`text-green-500` : tw`text-gray-300`)}; /* Blue when liked */
  }
`;

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

const PrimaryButton = styled(PrimaryButtonBase)`
  ${tw`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6 text-center`}
  background-color: #289E9E;
  color: white;
  &:hover {
    background-color: #70b4b4; /* Slightly darker on hover */
  }
`;

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
  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Wyatt Residency",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Rome, Italy",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Soho Paradise",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Hotel Baja",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Palo Alto, CA",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Hudak Homes",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
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

  const [likes, setLikes] = useState(Array(trendingCards.length).fill(false));

  const toggleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((liked, i) => (i === index ? !liked : liked))
    );
  };

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular Hotels</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon /></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon /></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>

      <Content>
        <HeadingWithControl>
          <Heading>Trending</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon /></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon /></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {trendingCards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <CardLikeButton onClick={() => toggleLike(index)} liked={likes[index]}>
                    <ThumbsUpIcon />
                    <Rating>{card.rating}</Rating>
                  </CardLikeButton>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <TopicIcon />
                    </IconContainer>
                    <Text>{card.topicText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <AuthorIcon />
                    </IconContainer>
                    <Text>{card.authorText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton as="a" href={card.url} target="_blank" rel="noopener noreferrer">
                Read More
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>



  );
};
