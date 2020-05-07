import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var CarouselStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow: hidden;\n  padding: 20px 0;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: grab;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow: hidden;\n  padding: 20px 0;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: grab;\n"])));
var CarouselSlidesContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  ",
    "\n"])), function (props) {
    return !props.dragged &&
        "\n    transition: all ease 0.6s;\n  ";
});
var CarouselItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  border-radius: 30px;\n  padding: 10px 0;\n  margin-right: ", "px;\n  padding: 0 ", "px;\n  box-sizing: border-box;\n  & > * {\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  border-radius: 30px;\n  padding: 10px 0;\n  margin-right: ", "px;\n  padding: 0 ", "px;\n  box-sizing: border-box;\n  & > * {\n    width: 100%;\n  }\n"])), function (props) { return (props.width ? props.width + 'px' : 'auto'); }, function (props) { return (props.margin ? props.margin : 0); }, function (props) { return (props.padding ? props.padding / 2 : 0); });
var CarouselContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Arrow = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  ", "\n  ", "\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    border-width: 2px 2px 0 0;\n    border-style: solid;\n    border-color: #17294d;\n    transition: 0.2s ease;\n    display: block;\n    transform-origin: 100% 0;\n  }\n"], ["\n  width: 10px;\n  height: 10px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  ",
    "\n  ",
    "\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    border-width: 2px 2px 0 0;\n    border-style: solid;\n    border-color: #17294d;\n    transition: 0.2s ease;\n    display: block;\n    transform-origin: 100% 0;\n  }\n"])), function (props) {
    return props.left &&
        "\n    transform: rotate(-135deg);\n    top: 4px;\n  ";
}, function (props) {
    return props.right &&
        "\n  transform: rotate(45deg);\n  top: 0px;\n  ";
});
var CarouselArrow = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 50px;\n  width: 50px;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  cursor: pointer;\n  transition: all ease-in 0.2s;\n  ", "\n  ", "\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);\n  }\n"], ["\n  height: 50px;\n  width: 50px;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  cursor: pointer;\n  transition: all ease-in 0.2s;\n  ",
    "\n  ",
    "\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);\n  }\n"])), function (props) {
    return props.left &&
        "\n    left: 0;\n  ";
}, function (props) {
    return props.right &&
        "\n    right: 0;\n  ";
});
var Dot = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 5px;\n  width: 20px;\n  margin: 3px;\n  padding: 0;\n  border-radius: 20px;\n  background-color: ", ";\n  border: none;\n"], ["\n  height: 5px;\n  width: 20px;\n  margin: 3px;\n  padding: 0;\n  border-radius: 20px;\n  background-color: ", ";\n  border: none;\n"])), function (props) { return (props.active ? '#17294d' : '#EFEFEF'); });
var DotsList = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var Carousel = function (props) {
    var _a = props.children, children = _a === void 0 ? [] : _a, _b = props.itemsToShow, itemsToShow = _b === void 0 ? 1 : _b, _c = props.itemsToSlide, itemsToSlide = _c === void 0 ? 1 : _c, _d = props.dots, dots = _d === void 0 ? false : _d, _e = props.space, space = _e === void 0 ? 10 : _e, _f = props.itemsWidth, itemsWidth = _f === void 0 ? 100 : _f, _g = props.mode, mode = _g === void 0 ? 'normal' : _g, _h = props.arrows, arrows = _h === void 0 ? true : _h, _j = props.customNextArrow, customNextArrow = _j === void 0 ? null : _j, _k = props.customPrevArrow, customPrevArrow = _k === void 0 ? null : _k;
    var ref = useRef(null);
    var _l = useState(0), containerWidth = _l[0], setContainerWidth = _l[1];
    var _m = useState(0), active = _m[0], setActive = _m[1];
    var _o = useState(0), dragStartX = _o[0], setDragStartX = _o[1];
    var _p = useState(false), dragged = _p[0], setDragged = _p[1];
    var _q = useState(0), leftDrag = _q[0], setLeftDrag = _q[1];
    var _r = useState(0), widthItem = _r[0], setWidthItem = _r[1];
    var _s = useState(''), direction = _s[0], setDirection = _s[1];
    var _t = useState(widthItem * active), translateSpace = _t[0], setTranslateSpace = _t[1];
    var _u = useState(0), saveTranslateSpace = _u[0], setSaveTranslateSpace = _u[1];
    var padding = mode === 'normal' ? space : 0;
    var margin = mode === 'variableWidth' ? space : 0;
    useEffect(function () {
        if (mode === 'variableWidth') {
            setWidthItem(itemsWidth);
        }
        else if (mode === 'normal') {
            setWidthItem(containerWidth / itemsToShow);
        }
    }, [widthItem, itemsWidth, itemsToShow, containerWidth, mode]);
    useEffect(function () {
        setActive(0);
    }, [mode, itemsWidth, space]);
    var shouldNavigatePrevious = active > 0;
    var shouldNavigateNext = function () {
        var totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin - translateSpace;
        var lastItemIsFullyVisible = totalWidthOfItemsAndMargins > containerWidth;
        if (lastItemIsFullyVisible)
            return true;
        return false;
    };
    var resizeWidth = function () { return setContainerWidth(ref.current ? ref.current.offsetWidth : 0); };
    var move = function () {
        var totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin;
        var itemsOverflowAtTheEnd = totalWidthOfItemsAndMargins - translateSpace - (widthItem + margin) > containerWidth;
        var shouldShowLastItemToTheEnd = mode === 'variableWidth' && direction === 'next' && !itemsOverflowAtTheEnd;
        if (shouldShowLastItemToTheEnd) {
            setTranslateSpace(children.length * (widthItem + margin) - margin - containerWidth);
        }
        else {
            setTranslateSpace(active * (widthItem + margin));
        }
    };
    var previous = function () {
        if (shouldNavigatePrevious) {
            setDirection('previous');
            setActive(active - itemsToSlide);
        }
    };
    var next = function () {
        if (shouldNavigateNext()) {
            setDirection('next');
            setActive(active + itemsToSlide);
        }
    };
    var onMouseMove = function (event) {
        if (dragged) {
            var left = event.clientX - dragStartX;
            setTranslateSpace(saveTranslateSpace + left * -1);
            setLeftDrag(left);
        }
    };
    var onTouchMove = function (event) {
        if (dragged) {
            var touch = event.targetTouches[0];
            var left = touch.clientX - dragStartX;
            setTranslateSpace(saveTranslateSpace + left * -1);
            setLeftDrag(left);
        }
    };
    var onDragStart = function (clientX) {
        setDragged(true);
        setDragStartX(clientX);
    };
    var onDragStartTouch = function (event) {
        var touch = event.targetTouches[0];
        setSaveTranslateSpace(translateSpace);
        onDragStart(touch.clientX);
    };
    var onDragStartMouse = function (event) {
        setSaveTranslateSpace(translateSpace);
        onDragStart(event.clientX);
    };
    var onDragEnd = function () {
        if (dragged) {
            setDragged(false);
            var newActive = active + Math.round((leftDrag * -1) / widthItem);
            if (newActive < 0)
                newActive = 0;
            if (newActive > children.length - itemsToShow)
                newActive = active;
            setActive(newActive);
        }
    };
    var onDragEndMouse = function () {
        window.removeEventListener('mousemove', onMouseMove);
        onDragEnd();
    };
    var onDragEndTouch = function () {
        window.removeEventListener('touchmove', onTouchMove);
        onDragEnd();
    };
    useEffect(resizeWidth, [ref.current]);
    useEffect(function () {
        window.addEventListener('resize', resizeWidth);
        return function () {
            window.removeEventListener('resize', resizeWidth);
        };
    });
    useEffect(function () { return move(); }, [active, dragged]);
    var showPrevArrow = function () {
        if (arrows && shouldNavigatePrevious) {
            if (customPrevArrow) {
                return React.cloneElement(customPrevArrow, { onClick: previous, left: true });
            }
            return (React.createElement(CarouselArrow, { onClick: previous, left: true },
                React.createElement(Arrow, { left: true })));
        }
        return null;
    };
    var showNextArrow = function () {
        if (arrows && shouldNavigateNext()) {
            if (customNextArrow) {
                return React.cloneElement(customNextArrow, { onClick: next, right: true });
            }
            return (React.createElement(CarouselArrow, { onClick: next, right: true },
                React.createElement(Arrow, { right: true })));
        }
        return null;
    };
    return (React.createElement(CarouselContainer, null,
        React.createElement(CarouselStyled, { ref: ref, onMouseDown: onDragStartMouse, onMouseMove: onMouseMove, onMouseUp: onDragEndMouse, onTouchStart: onDragStartTouch, onTouchMove: onTouchMove, onTouchEnd: onDragEndTouch },
            React.createElement(CarouselSlidesContainer, { style: { transform: "translateX(" + translateSpace * -1 + "px)" }, dragged: dragged },
                mode === 'normal' &&
                    children.map(function (item, id) { return (React.createElement(CarouselItem, { key: id, width: widthItem, padding: padding }, item)); }),
                mode === 'variableWidth' &&
                    children.map(function (item, id) { return (React.createElement(CarouselItem, { key: id, width: widthItem, margin: margin }, item)); }))),
        showPrevArrow(),
        showNextArrow(),
        dots && (React.createElement(DotsList, null, children.map(function (_, id) { return (React.createElement(Dot, { key: id, active: active === id * itemsToSlide, onClick: function () { return setActive(id); } })); })))));
};

export { Carousel };
//# sourceMappingURL=index.es.js.map
