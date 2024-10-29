import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
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
const Card = tw.div`h-full flex flex-col justify-between sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`; 
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

const PrimaryButton = tw(PrimaryButtonBase)`
  mt-auto w-full sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6
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
      imageSrc: "https://media.cnn.com/api/v1/images/stellar/prod/gitex-global-2024.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      title: "AI and robots take center stage at ‘world’s largest tech event’",
      description: "A debrief on Gitex Global 2024",
      locationText: "Dubai, UAE",
      rating: 4.8,
      link: 'https://www.cnn.com/2024/10/21/middleeast/ai-robots-gitex-dubai-spc/index.html',
      author: "Yara Enany and Jacopo Prisco",
    },
    {
      imageSrc: "https://techcrunch.com/wp-content/uploads/2021/02/ARCH_Aircraft_01_glamourIntro_COMP10_STE_QC_JM.jpg?resize=2048,1273",
      title: "The Station: Archer Aviation’s two big scores, a boost for e-bikes and how Uber defines adjusted EBITDA",
      description: "Electric Bikes & Uber",
      locationText: "San Francisco, CA",
      rating: 4.9,
      link: "https://techcrunch.com/2021/02/15/the-station-archer-aviations-two-big-scores-a-boost-for-ebikes-and-how-uber-defines-adjusted-ebitda/",
      author: "Kirsten Korosec",
    },
    {
      imageSrc: "https://media.wired.com/photos/666eeb7f1c5dda5634fd1a0e/master/w_2240,c_limit/wired_collage5.jpg",
      title: "Could Wireless Power Beaming Finally Become Reality?",
      description: "Liberating power from copper cables would open up a range of possibilities, from space-based grids to drones that can be charged up mid-flight. But first there are challenges to solve…",
      locationText: "Auckland, NZ",
      rating: 5.0,
      link: "https://www.wired.com/sponsored/story/qinetiq-innovation-trends-power-beaming/",
      author: "Dr. Richard Hoad",
    },
    {
      imageSrc: "https://www.digitaltrends.com/wp-content/uploads/2024/05/apple-m4-event-may.jpg?resize=1000%2C600&p=1",
      title: "M4 chip: here’s everything we know about Apple’s latest silicon",
      description: "Apple announces its new M4 chip.",
      locationText: "Cupertino, CA",
      rating: 4.5,
      link: "https://www.digitaltrends.com/computing/apple-m4-chip-everything-we-know-so-far/",
      author: "Alex Blake",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Reccomended</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
            <CardImage imageSrc={card.imageSrc} />
            <TextInfo className="flex-grow"> {/* Ensures content grows and leaves space for the button */}
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
                  <Text>{card.locationText}</Text>
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
            <PrimaryButton as="a" href={card.link} target="_blank" rel="noopener noreferrer">
    Read Now!
  </PrimaryButton>
          </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
