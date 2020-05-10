'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var CarouselStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow: hidden;\n  padding: 20px 0;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: grab;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow: hidden;\n  padding: 20px 0;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: grab;\n"])));
var CarouselSlidesContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  ",
    "\n"])), function (props) {
    return !props.dragged &&
        "\n    transition: transform ease 0.6s;\n  ";
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
    var _a = props.itemsToShow, itemsToShow = _a === void 0 ? 1 : _a, _b = props.itemsToSlide, itemsToSlide = _b === void 0 ? 1 : _b, _c = props.dots, dots = _c === void 0 ? false : _c, _d = props.space, space = _d === void 0 ? 10 : _d, _e = props.itemsWidth, itemsWidth = _e === void 0 ? 100 : _e, _f = props.mode, mode = _f === void 0 ? 'normal' : _f, _g = props.arrows, arrows = _g === void 0 ? true : _g, _h = props.customNextArrow, customNextArrow = _h === void 0 ? null : _h, _j = props.customPrevArrow, customPrevArrow = _j === void 0 ? null : _j, _k = props.responsive, responsive = _k === void 0 ? [] : _k;
    var children = React__default.Children.toArray(props.children);
    var ref = React.useRef(null);
    var _l = React.useState(0), containerWidth = _l[0], setContainerWidth = _l[1];
    var _m = React.useState(0), active = _m[0], setActive = _m[1];
    var _o = React.useState(0), dragStartX = _o[0], setDragStartX = _o[1];
    var _p = React.useState(false), dragged = _p[0], setDragged = _p[1];
    var _q = React.useState(0), leftDrag = _q[0], setLeftDrag = _q[1];
    var _r = React.useState(0), widthItem = _r[0], setWidthItem = _r[1];
    var _s = React.useState(''), direction = _s[0], setDirection = _s[1];
    var _t = React.useState(widthItem * active), translateSpace = _t[0], setTranslateSpace = _t[1];
    var _u = React.useState(0), saveTranslateSpace = _u[0], setSaveTranslateSpace = _u[1];
    var _v = React.useState(0), slidesListWidth = _v[0], setSlidesListWidth = _v[1];
    var _w = React.useState({
        breakpoint: 0,
        itemsToShow: itemsToShow,
        itemsToSlide: itemsToSlide,
        dots: dots,
        space: space,
        itemsWidth: itemsWidth,
        mode: mode,
        arrows: arrows,
        customNextArrow: customNextArrow,
        customPrevArrow: customPrevArrow,
    }), actual = _w[0], setActual = _w[1];
    var padding = actual.mode === 'normal' ? actual.space : 0;
    var margin = actual.mode !== 'normal' ? actual.space : 0;
    var handleResize = function () {
        var vw = window.innerWidth;
        if (responsive && vw) {
            var currentProps_1 = {
                breakpoint: 0,
                itemsToShow: itemsToShow,
                itemsToSlide: itemsToSlide,
                dots: dots,
                space: space,
                itemsWidth: itemsWidth,
                mode: mode,
                arrows: arrows,
                customNextArrow: customNextArrow,
                customPrevArrow: customPrevArrow,
            };
            responsive.forEach(function (respProps) {
                if (vw >= respProps.breakpoint) {
                    if (respProps.breakpoint > currentProps_1.breakpoint) {
                        currentProps_1 = __assign(__assign({}, currentProps_1), respProps);
                    }
                }
            });
            setActual(currentProps_1);
        }
    };
    React.useEffect(function () {
        handleResize();
    }, [
        itemsToShow,
        itemsToSlide,
        dots,
        space,
        itemsWidth,
        mode,
        arrows,
        customNextArrow,
        customPrevArrow,
    ]);
    var calculateItemWidth = function (shouldCalculateWidth) {
        return shouldCalculateWidth ? containerWidth / actual.itemsToShow : actual.itemsWidth;
    };
    React.useEffect(function () {
        setWidthItem(calculateItemWidth(actual.mode === 'normal'));
    }, [widthItem, actual.itemsWidth, actual.itemsToShow, containerWidth, actual.mode]);
    React.useEffect(function () {
        setActive(0);
    }, [actual.mode, itemsWidth, actual.space]);
    React.useEffect(function () {
        setSlidesListWidth(children.length * (widthItem + margin) - margin);
    }, [widthItem, margin]);
    var shouldNavigatePrevious = function () { return active > 0; };
    var shouldNavigateNext = function () {
        var endOfItemsPosition = slidesListWidth - translateSpace;
        var lastItemIsFullyVisible = endOfItemsPosition > containerWidth;
        return lastItemIsFullyVisible;
    };
    var resizeWidth = function () { return setContainerWidth(ref.current ? ref.current.offsetWidth : 0); };
    React.useEffect(function () { return resizeWidth(); }, []);
    var move = function () {
        var itemsOverflowAtTheEnd = slidesListWidth - translateSpace - (widthItem + margin) > containerWidth;
        var shouldShowLastItemToTheEnd = actual.mode !== 'normal' && direction === 'next' && !itemsOverflowAtTheEnd;
        if (shouldShowLastItemToTheEnd) {
            setTranslateSpace(children.length * (widthItem + margin) - margin - containerWidth);
        }
        else if (actual.mode === 'center' && active !== 0) {
            var nbOfItems = Math.floor(containerWidth / (widthItem + margin));
            var shiftToCenter = (containerWidth - nbOfItems * (widthItem + margin)) / 2 + margin / 2;
            setTranslateSpace(active * (widthItem + margin) - shiftToCenter);
        }
        else {
            setTranslateSpace(active * (widthItem + margin));
        }
    };
    var previous = function () {
        if (shouldNavigatePrevious()) {
            setDirection('previous');
            setActive(active - actual.itemsToSlide);
        }
    };
    var next = function () {
        if (shouldNavigateNext()) {
            setDirection('next');
            setActive(active + actual.itemsToSlide);
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
    var getNewActiveFromDrag = function (active, leftDrag, widthItem) {
        var newActive = active + Math.round((leftDrag * -1) / widthItem);
        if (newActive < 0)
            return 0;
        else if (newActive > children.length - actual.itemsToShow)
            return active;
        return newActive;
    };
    var onDragEnd = function () {
        if (dragged) {
            setDragged(false);
            setActive(getNewActiveFromDrag(active, leftDrag, widthItem));
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
    React.useEffect(function () {
        window.addEventListener('resize', resizeWidth);
        return function () {
            window.removeEventListener('resize', resizeWidth);
        };
    }, []);
    React.useEffect(function () {
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    React.useEffect(function () { return move(); }, [active, dragged]);
    var showArrow = function (shouldDisplay, customArrow, onClick, propsArrow) {
        if (actual.arrows && shouldDisplay) {
            customArrow && React__default.cloneElement(customArrow, __assign({ onClick: onClick }, propsArrow));
            return (React__default.createElement(CarouselArrow, __assign({ onClick: onClick }, propsArrow),
                React__default.createElement(Arrow, __assign({}, propsArrow))));
        }
        return null;
    };
    return (React__default.createElement(CarouselContainer, null,
        React__default.createElement(CarouselStyled, { ref: ref, onMouseDown: onDragStartMouse, onMouseMove: onMouseMove, onMouseUp: onDragEndMouse, onTouchStart: onDragStartTouch, onTouchMove: onTouchMove, onTouchEnd: onDragEndTouch },
            React__default.createElement(CarouselSlidesContainer, { style: { transform: "translateX(" + translateSpace * -1 + "px)" }, dragged: dragged },
                actual.mode === 'normal' &&
                    children.map(function (item, id) { return (React__default.createElement(CarouselItem, { key: id, width: widthItem, padding: padding }, item)); }),
                actual.mode !== 'normal' &&
                    children.map(function (item, id) { return (React__default.createElement(CarouselItem, { key: id, width: widthItem, margin: margin }, item)); }))),
        showArrow(shouldNavigatePrevious(), actual.customPrevArrow, previous, { left: true }),
        showArrow(shouldNavigateNext(), actual.customNextArrow, next, { right: true }),
        actual.dots && (React__default.createElement(DotsList, null, children.map(function (_, id) { return (React__default.createElement(Dot, { key: id, active: active === id * actual.itemsToSlide, onClick: function () { return setActive(id); } })); })))));
};

exports.default = Carousel;
//# sourceMappingURL=index.js.map
