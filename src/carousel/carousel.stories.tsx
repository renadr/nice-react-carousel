import React from 'react';
import { withKnobs, number } from "@storybook/addon-knobs";

import { Card, StoryBookTitle, StoryBookDesc } from "../styles";
import Carousel from "./index";

export default {
  title: "nice-react-carousel",
  decorators: [withKnobs]
};
export const CarouselExample = () =>(
  <>
  <StoryBookTitle>Playground</StoryBookTitle>
  <StoryBookDesc>Here you can try the component. Have fun with the props in the Knobs tab 😉</StoryBookDesc>
  <Carousel itemsBySlide={number("itemsBySlide", 1)}>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
    <Card>4</Card>
    <Card>5</Card>
    <Card>6</Card>
  </Carousel>
  </>
);