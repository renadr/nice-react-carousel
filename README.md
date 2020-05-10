<div align="center">
  <h1>
    🎠
    <br />
    nice-react-carousel
  </h1>
  A nice carousel for your React project. 
  <br />
  <img alt="npm" src="https://img.shields.io/npm/v/nice-react-carousel">
  <img alt="npm" src="https://img.shields.io/npm/dt/nice-react-carousel">
  <img alt="NPM" src="https://img.shields.io/npm/l/nice-react-carousel">
  <br />
  <br />
  <img src="http://adrienlemaire.fr/video2-nice-react-carousel.gif" />
</div>

## Try it

https://nice-react-carousel.netlify.com

## Install it

**[npm](https://www.npmjs.com/package/nice-react-carousel)**

```bash
npm i nice-react-carousel
```

**[yarn](https://yarnpkg.com/package/nice-react-carousel)**

```bash
yarn add nice-react-carousel
```

## Use it

```javascript
import Carousel from 'nice-react-carousel';
```

## Documentation

| Option          | Type                                          | Default  | Description                                                         |
| --------------- | --------------------------------------------- | -------- | ------------------------------------------------------------------- |
| mode            | `string` ('normal', 'center' 'variableWidth') | 'normal' | How items should be displayed.                                      |
| itemsBySlide    | `number`                                      | 1        | Items number for each slide. Works only with 'normal' mode.         |
| space           | `number`                                      | 10       | Space between each item (px).                                       |
| itemsWidth      | `number`                                      | 100      | Width of each item(px). Works only with 'variableWidth' mode.       |
| arrows          | `boolean`                                     | true     | Should show the arrow buttons (previous/next) when it's possible.   |
| dots            | `function | boolean`                          | false    | On / Off the dots. Or custom your own dots (See the example below). |
| customNextArrow | `ReactElement`                                |          | Custom the next button.                                             |
| customPrevArrow | `ReactElement`                                |          | Custom the previous button.                                         |
| responsive      | `Object`{breakpoint: number, ...}             |          | Change properties depending on the breakpoint (Mobile first).       |

### Basic example

```javascript
<Carousel mode="normal" itemsBySlide={2} dots>
  <div>Slider 1</div>
  <div>Slider 2</div>
  <div>Slider 3</div>
</Carousel>
```

### Props usage examples

- Custom dots :

```javascript
  dots = {active => {
    return (
      <span>[{active ? 'x': ''}]</span>
    );
  }}
```

- Responsive (Mobile first) :

```javascript
  responsive = {[
    {
      breakpoint:800,
      space: 10,
      itemsWidth: 200
    },
    {
      breakpoint:1200,
      space: 15,
      itemsWidth: 250,
      dots: false,
    },
  ]}
```

## Help ?

Open an issue for all your question, request or anything else just here :

https://github.com/renadr/nice-react-carousel/issues
