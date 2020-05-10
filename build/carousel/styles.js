var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
export var CarouselStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow: hidden;\n  padding: 20px 0;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: grab;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow: hidden;\n  padding: 20px 0;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: grab;\n"])));
export var CarouselSlidesContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  ",
    "\n"])), function (props) {
    return !props.dragged &&
        "\n    transition: transform ease 0.6s;\n  ";
});
export var CarouselItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  border-radius: 30px;\n  padding: 10px 0;\n  margin-right: ", "px;\n  padding: 0 ", "px;\n  box-sizing: border-box;\n  & > * {\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  border-radius: 30px;\n  padding: 10px 0;\n  margin-right: ", "px;\n  padding: 0 ", "px;\n  box-sizing: border-box;\n  & > * {\n    width: 100%;\n  }\n"])), function (props) { return (props.width ? props.width + 'px' : 'auto'); }, function (props) { return (props.margin ? props.margin : 0); }, function (props) { return (props.padding ? props.padding / 2 : 0); });
export var CarouselContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
export var Arrow = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  ", "\n  ", "\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    border-width: 2px 2px 0 0;\n    border-style: solid;\n    border-color: #17294d;\n    transition: 0.2s ease;\n    display: block;\n    transform-origin: 100% 0;\n  }\n"], ["\n  width: 10px;\n  height: 10px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  ",
    "\n  ",
    "\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    border-width: 2px 2px 0 0;\n    border-style: solid;\n    border-color: #17294d;\n    transition: 0.2s ease;\n    display: block;\n    transform-origin: 100% 0;\n  }\n"])), function (props) {
    return props.left &&
        "\n    transform: rotate(-135deg);\n    top: 4px;\n  ";
}, function (props) {
    return props.right &&
        "\n  transform: rotate(45deg);\n  top: 0px;\n  ";
});
export var CarouselArrow = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 50px;\n  width: 50px;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  cursor: pointer;\n  transition: all ease-in 0.2s;\n  ", "\n  ", "\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);\n  }\n"], ["\n  height: 50px;\n  width: 50px;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  cursor: pointer;\n  transition: all ease-in 0.2s;\n  ",
    "\n  ",
    "\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);\n  }\n"])), function (props) {
    return props.left &&
        "\n    left: 0;\n  ";
}, function (props) {
    return props.right &&
        "\n    right: 0;\n  ";
});
export var Dot = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 5px;\n  width: 20px;\n  margin: 3px;\n  padding: 0;\n  border-radius: 20px;\n  background-color: ", ";\n  border: none;\n"], ["\n  height: 5px;\n  width: 20px;\n  margin: 3px;\n  padding: 0;\n  border-radius: 20px;\n  background-color: ", ";\n  border: none;\n"])), function (props) { return (props.active ? '#17294d' : '#EFEFEF'); });
export var DotsList = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styles.js.map