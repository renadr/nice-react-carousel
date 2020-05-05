import React, { ReactElement } from 'react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

import { Card, Title, Desc, Btn, StoryBookTitle, StoryBookDesc, ItemNews } from '../styles';
import Carousel from './index';

export default {
  title: 'Playground',
  decorators: [withKnobs],
};

const optionsSpace = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

const optionsWidth = {
  range: true,
  min: 150,
  max: 800,
  step: 5,
};

const optionsMode = {
  normal: 'normal',
  centerMode: 'center',
  variableWidth: 'variableWidth',
};

export const CarouselPlayground = (): ReactElement => (
  <>
    <StoryBookTitle>Playground</StoryBookTitle>
    <StoryBookDesc>
      Here you can try the component. Have fun with the props in the Knobs tab 😉
    </StoryBookDesc>
    <StoryBookDesc>
      If you can't see the Knobs tab : On the left side, click on the '...' button just next to the
      Storybook logo and click on 'Show addons'. Or just hit the 'A' key on your keyboard.
    </StoryBookDesc>
    <Carousel
      mode={select('Mode', optionsMode, 'normal')}
      itemsToShow={number('itemsToShow', 1)}
      space={number('space', 10, optionsSpace)}
      itemsWidth={number('itemsWidth (mode: variableWidth)', 200, optionsWidth)}
      arrows={boolean('arrows', true)}
    >
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #4e54c8, #8f94fb)' }}>
        <Title>Title 1</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #800080, #ffc0cb)' }}>
        <Title>Title 2</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>
        <Title>Title 3</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #fc4a1a, #f7b733)' }}>
        <Title>Title 4</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #4e54c8, #8f94fb)' }}>
        <Title>Title 5</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #800080, #ffc0cb)' }}>
        <Title>Title 6</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>
        <Title>Title 7</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews rounded style={{ backgroundImage: 'linear-gradient(to right, #fc4a1a, #f7b733)' }}>
        <Title>Title 8</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
    </Carousel>
  </>
);
