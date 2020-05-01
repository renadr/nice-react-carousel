import React from 'react';
import { withKnobs, number } from "@storybook/addon-knobs";

import { Card, Title, Background, Desc, StoryBookTitle, StoryBookDesc } from "../styles";
import Carousel from "./index";

export default {
  title: "nice-react-carousel",
  decorators: [withKnobs]
};
export const CarouselExample = () =>(
  <>
  <StoryBookTitle>Playground</StoryBookTitle>
  <StoryBookDesc>Here you can try the component. Have fun with the props in the Knobs tab 😉</StoryBookDesc>
  <Carousel itemsToShow={number("itemsToShow", 1)} itemsToSlide={number("itemsToSlide", 1)} dots={true}>
    <Card>
      <Background/>
      <Title>Title 1</Title>
      <Desc>Lorem ipsum</Desc>
    </Card>
    <Card>
      <Background/>
      <Title>Title 2</Title>
      <Desc>Lorem ipsum</Desc>
    </Card>
    <Card>
      <Background/>
      <Title>Title 3</Title>
      <Desc>Lorem ipsum</Desc>
    </Card>
    <Card>
      <Background/>
      <Title>Title 4</Title>
      <Desc>Lorem ipsum</Desc>
    </Card>
    <Card>
      <Background/>
      <Title>Title 5</Title>
      <Desc>Lorem ipsum</Desc>
    </Card>
    <Card>
      <Background/>
      <Title>Title 6</Title>
      <Desc>Lorem ipsum</Desc>
    </Card>
  </Carousel>
  </>
);