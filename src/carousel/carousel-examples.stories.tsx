import React, { ReactElement } from 'react';

import { Title, Desc, StoryBookTitle, StoryBookDesc, ItemNews, StyledArrow } from '../styles';
import Carousel from './index';

export default {
  title: 'Examples',
};

export const CarouselNewsExample = (): ReactElement => (
  <>
    <StoryBookTitle>Exemple : Carousel for news</StoryBookTitle>
    <StoryBookDesc>#1</StoryBookDesc>
    <Carousel
      customPrevArrow={<StyledArrow prev />}
      customNextArrow={<StyledArrow next />}
      itemsToShow={1}
      space={0}
    >
      <ItemNews
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)',
        }}
      >
        <Title>Title 1</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        }}
      >
        <Title>Title 2</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        }}
      >
        <Title>Title 3</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
      <ItemNews
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1776924/pexels-photo-1776924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        }}
      >
        <Title>Title 4</Title>
        <Desc>Lorem ipsum</Desc>
      </ItemNews>
    </Carousel>
    <StoryBookDesc>#2 : With margin</StoryBookDesc>
    <Carousel itemsToShow={1} space={30}>
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
    </Carousel>
  </>
);

export const CarouselListExample = (): ReactElement => (
  <>
    <StoryBookTitle>Exemple : Carousel for lists</StoryBookTitle>
    <StoryBookDesc>
      #1 : 'normal' mode, 4 items displayed in the same time and 30px of space between items.
    </StoryBookDesc>
    <Carousel itemsToShow={4} space={30}>
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
    <StoryBookDesc>
      #2 : 'center' mode, width of 250px and space of 30px. The previous and next items are partially displayed.
    </StoryBookDesc>
    <Carousel space={30} mode="center" itemsWidth={250}>
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
    <StoryBookDesc>
      #3 : 'variableWidth' mode, width of 250px and space of 30px. That can show the next item every
      time.
    </StoryBookDesc>
    <Carousel space={30} mode="variableWidth" itemsWidth={250}>
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