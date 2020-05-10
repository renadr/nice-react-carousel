import React from 'react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';
import { Title, Desc, StoryBookTitle, StoryBookDesc, ItemNews } from '../styles';
import Carousel from './index';
export default {
    title: 'Playground',
    decorators: [withKnobs],
};
var optionsSpace = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
};
var optionsWidth = {
    range: true,
    min: 150,
    max: 800,
    step: 5,
};
var optionsMode = {
    normal: 'normal',
    center: 'center',
    variableWidth: 'variableWidth',
};
export var CarouselPlayground = function () { return (React.createElement(React.Fragment, null,
    React.createElement(StoryBookTitle, null, "Playground"),
    React.createElement(StoryBookDesc, null, "Here you can try the component. Have fun with the props in the Knobs tab \uD83D\uDE09"),
    React.createElement(StoryBookDesc, null, "If you can't see the Knobs tab : On the left side, click on the '...' button just next to the Storybook logo and click on 'Show addons'. Or just hit the 'A' key on your keyboard."),
    React.createElement(Carousel, { mode: select('Mode', optionsMode, 'normal'), itemsToShow: number('itemsToShow', 1), space: number('space', 10, optionsSpace), itemsWidth: number('itemsWidth (mode: variableWidth)', 200, optionsWidth), arrows: boolean('arrows', true) },
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #4e54c8, #8f94fb)' } },
            React.createElement(Title, null, "Title 1"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #800080, #ffc0cb)' } },
            React.createElement(Title, null, "Title 2"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)' } },
            React.createElement(Title, null, "Title 3"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #fc4a1a, #f7b733)' } },
            React.createElement(Title, null, "Title 4"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #4e54c8, #8f94fb)' } },
            React.createElement(Title, null, "Title 5"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #800080, #ffc0cb)' } },
            React.createElement(Title, null, "Title 6"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)' } },
            React.createElement(Title, null, "Title 7"),
            React.createElement(Desc, null, "Lorem ipsum")),
        React.createElement(ItemNews, { rounded: true, style: { backgroundImage: 'linear-gradient(to right, #fc4a1a, #f7b733)' } },
            React.createElement(Title, null, "Title 8"),
            React.createElement(Desc, null, "Lorem ipsum"))))); };
//# sourceMappingURL=carousel-playground.stories.js.map