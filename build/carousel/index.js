var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useEffect, useRef } from 'react';
import { CarouselStyled, CarouselContainer, CarouselItem, CarouselArrow, CarouselSlidesContainer, Arrow, Dot, DotsList, } from './styles';
var Carousel = function (props) {
    var _a = props.children, children = _a === void 0 ? [] : _a, _b = props.itemsToShow, itemsToShow = _b === void 0 ? 1 : _b, _c = props.itemsToSlide, itemsToSlide = _c === void 0 ? 1 : _c, _d = props.dots, dots = _d === void 0 ? false : _d, _e = props.space, space = _e === void 0 ? 10 : _e, _f = props.itemsWidth, itemsWidth = _f === void 0 ? 100 : _f, _g = props.mode, mode = _g === void 0 ? 'normal' : _g, _h = props.arrows, arrows = _h === void 0 ? true : _h, _j = props.customNextArrow, customNextArrow = _j === void 0 ? null : _j, _k = props.customPrevArrow, customPrevArrow = _k === void 0 ? null : _k, _l = props.responsive, responsive = _l === void 0 ? [] : _l;
    var ref = useRef(null);
    var _m = useState(0), containerWidth = _m[0], setContainerWidth = _m[1];
    var _o = useState(0), active = _o[0], setActive = _o[1];
    var _p = useState(0), dragStartX = _p[0], setDragStartX = _p[1];
    var _q = useState(false), dragged = _q[0], setDragged = _q[1];
    var _r = useState(0), leftDrag = _r[0], setLeftDrag = _r[1];
    var _s = useState(0), widthItem = _s[0], setWidthItem = _s[1];
    var _t = useState(''), direction = _t[0], setDirection = _t[1];
    var _u = useState(widthItem * active), translateSpace = _u[0], setTranslateSpace = _u[1];
    var _v = useState(0), saveTranslateSpace = _v[0], setSaveTranslateSpace = _v[1];
    var _w = useState({
        width: 0,
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
                width: 0,
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
                if (vw >= respProps.width) {
                    if (respProps.width > currentProps_1.width) {
                        currentProps_1 = __assign(__assign({}, currentProps_1), respProps);
                    }
                }
            });
            setActual(currentProps_1);
        }
    };
    useEffect(function () {
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
    useEffect(function () {
        if (actual.mode === 'normal') {
            setWidthItem(containerWidth / actual.itemsToShow);
        }
        else {
            setWidthItem(actual.itemsWidth);
        }
    }, [widthItem, actual.itemsWidth, actual.itemsToShow, containerWidth, actual.mode]);
    useEffect(function () {
        setActive(0);
    }, [actual.mode, itemsWidth, actual.space]);
    var shouldNavigatePrevious = active > 0;
    var shouldNavigateNext = function () {
        var totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin - translateSpace;
        var lastItemIsFullyVisible = totalWidthOfItemsAndMargins > containerWidth;
        if (lastItemIsFullyVisible)
            return true;
        return false;
    };
    var resizeWidth = function () { return setContainerWidth(ref.current ? ref.current.offsetWidth : 0); };
    useEffect(function () { return resizeWidth(); }, []);
    var move = function () {
        var totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin;
        var itemsOverflowAtTheEnd = totalWidthOfItemsAndMargins - translateSpace - (widthItem + margin) > containerWidth;
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
        if (shouldNavigatePrevious) {
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
    var createActive = function () {
    };
    var onDragEnd = function () {
        if (dragged) {
            setDragged(false);
            var newActive = active + Math.round((leftDrag * -1) / widthItem);
            if (newActive < 0)
                newActive = 0;
            if (newActive > children.length - actual.itemsToShow)
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
    useEffect(function () {
        window.addEventListener('resize', resizeWidth);
        return function () {
            window.removeEventListener('resize', resizeWidth);
        };
    }, []);
    useEffect(function () {
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    useEffect(function () { return move(); }, [active, dragged]);
    var showPrevArrow = function () {
        if (actual.arrows && shouldNavigatePrevious) {
            if (actual.customPrevArrow) {
                return React.cloneElement(actual.customPrevArrow, { onClick: previous, left: true });
            }
            return (React.createElement(CarouselArrow, { onClick: previous, left: true },
                React.createElement(Arrow, { left: true })));
        }
        return null;
    };
    var showNextArrow = function () {
        if (actual.arrows && shouldNavigateNext()) {
            if (actual.customNextArrow) {
                return React.cloneElement(actual.customNextArrow, { onClick: next, right: true });
            }
            return (React.createElement(CarouselArrow, { onClick: next, right: true },
                React.createElement(Arrow, { right: true })));
        }
        return null;
    };
    return (React.createElement(CarouselContainer, null,
        React.createElement(CarouselStyled, { ref: ref, onMouseDown: onDragStartMouse, onMouseMove: onMouseMove, onMouseUp: onDragEndMouse, onTouchStart: onDragStartTouch, onTouchMove: onTouchMove, onTouchEnd: onDragEndTouch },
            React.createElement(CarouselSlidesContainer, { style: { transform: "translateX(" + translateSpace * -1 + "px)" }, dragged: dragged },
                actual.mode === 'normal' &&
                    children.map(function (item, id) { return (React.createElement(CarouselItem, { key: id, width: widthItem, padding: padding }, item)); }),
                (actual.mode === 'variableWidth' || actual.mode === 'center') &&
                    children.map(function (item, id) { return (React.createElement(CarouselItem, { key: id, width: widthItem, margin: margin }, item)); }))),
        showPrevArrow(),
        showNextArrow(),
        actual.dots && (React.createElement(DotsList, null, children.map(function (_, id) { return (React.createElement(Dot, { key: id, active: active === id * actual.itemsToSlide, onClick: function () { return setActive(id); } })); })))));
};
export default Carousel;
//# sourceMappingURL=index.js.map