import React, { useState, useEffect } from "react";
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

export default ({ cards, title }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setLikes(Array(cards.length).fill(false));
  }, [cards]);

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

  const toggleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((liked, i) => (i === index ? !liked : liked))
    );
  };

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>{title}</Heading>
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
