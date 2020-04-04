(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{282:function(module,exports,__webpack_require__){__webpack_require__(283),__webpack_require__(429),module.exports=__webpack_require__(430)},347:function(module,exports){},430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(277);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(615),module)}.call(this,__webpack_require__(431)(module))},615:function(module,exports,__webpack_require__){var map={"./carousel/carousel.stories.tsx":616};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=615},616:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});__webpack_require__(275).withSource;var addSourceDecorator=__webpack_require__(275).addSource;const react_1=__importDefault(__webpack_require__(2)),addon_knobs_1=__webpack_require__(619),styles_1=__webpack_require__(629),index_1=__importDefault(__webpack_require__(631));exports.default={parameters:{storySource:{source:'import React from \'react\';\nimport { withKnobs, number } from "@storybook/addon-knobs";\n\nimport { Card, StoryBookTitle, StoryBookDesc } from "../styles";\nimport Carousel from "./index";\n\nexport default {\n  title: "nice-react-carousel",\n  decorators: [withKnobs]\n};\nexport const CarouselExample = () =>(\n  <>\n  <StoryBookTitle>Playground</StoryBookTitle>\n  <StoryBookDesc>Here you can try the component. Have fun with the props in the Knobs tab 😉</StoryBookDesc>\n  <Carousel itemsBySlide={number("itemsBySlide", 1)}>\n    <Card>1</Card>\n    <Card>2</Card>\n    <Card>3</Card>\n    <Card>4</Card>\n    <Card>5</Card>\n    <Card>6</Card>\n  </Carousel>\n  </>\n);',locationsMap:{"nice-react-carousel--carousel-example":{startLoc:{col:31,line:11},endLoc:{col:1,line:24},startBody:{col:31,line:11},endBody:{col:1,line:24}}}}},title:"nice-react-carousel",decorators:[addon_knobs_1.withKnobs]},exports.CarouselExample=addSourceDecorator(()=>react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(styles_1.StoryBookTitle,null,"Playground"),react_1.default.createElement(styles_1.StoryBookDesc,null,"Here you can try the component. Have fun with the props in the Knobs tab 😉"),react_1.default.createElement(index_1.default,{itemsBySlide:addon_knobs_1.number("itemsBySlide",1)},react_1.default.createElement(styles_1.Card,null,"1"),react_1.default.createElement(styles_1.Card,null,"2"),react_1.default.createElement(styles_1.Card,null,"3"),react_1.default.createElement(styles_1.Card,null,"4"),react_1.default.createElement(styles_1.Card,null,"5"),react_1.default.createElement(styles_1.Card,null,"6"))),{__STORY__:'import React from \'react\';\nimport { withKnobs, number } from "@storybook/addon-knobs";\n\nimport { Card, StoryBookTitle, StoryBookDesc } from "../styles";\nimport Carousel from "./index";\n\nexport default {\n  title: "nice-react-carousel",\n  decorators: [withKnobs]\n};\nexport const CarouselExample = () =>(\n  <>\n  <StoryBookTitle>Playground</StoryBookTitle>\n  <StoryBookDesc>Here you can try the component. Have fun with the props in the Knobs tab 😉</StoryBookDesc>\n  <Carousel itemsBySlide={number("itemsBySlide", 1)}>\n    <Card>1</Card>\n    <Card>2</Card>\n    <Card>3</Card>\n    <Card>4</Card>\n    <Card>5</Card>\n    <Card>6</Card>\n  </Carousel>\n  </>\n);',__ADDS_MAP__:{"nice-react-carousel--carousel-example":{startLoc:{col:31,line:11},endLoc:{col:1,line:24},startBody:{col:31,line:11},endBody:{col:1,line:24}}},__MAIN_FILE_LOCATION__:"/carousel.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/alemaire/Documents/nice-react-carousel/src/carousel",__IDS_TO_FRAMEWORKS__:{}})},629:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__importDefault(__webpack_require__(276));exports.StoryBookTitle=styled_components_1.default.h2`
  font-family: serif;
  color: #17294d;
  font-size: 45px;
  font-weight: 900;
  margin: 0;
  padding: 0;
`,exports.StoryBookDesc=styled_components_1.default.p`
  font-family: sans-serif;
  font-size: 15px;
  margin: 10px 0;
  color: #17294d;
`,exports.Card=styled_components_1.default.div`
  height: 300px;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  border-radius: 10px;
`},631:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(2)),styles_1=__webpack_require__(632);exports.default=props=>{const{children:children=[],itemsBySlide:itemsBySlide=1}=props,ref=react_1.useRef(null),[containerWidth,setContainerWidth]=react_1.useState(0),[active,setActive]=react_1.useState(0),[dragStartX,setDragStartX]=react_1.useState(0),[dragged,setDragged]=react_1.useState(!1),[leftDrag,setLeftDrag]=react_1.useState(0),widthItem=containerWidth/itemsBySlide,[translateSpace,setTranslateSpace]=react_1.useState(widthItem*active),[saveTranslateSpace,setSaveTranslateSpace]=react_1.useState(0),shouldNavigatePrevious=active>0,shouldNavigateNext=active<children.length-1&&itemsBySlide+active<=children.length-1,resizeWidth=()=>setContainerWidth(ref.current?ref.current.offsetWidth:0),onMouseMove=event=>{if(dragged){const left=event.clientX-dragStartX;setTranslateSpace(saveTranslateSpace+-1*left),setLeftDrag(left)}},onTouchMove=event=>{if(dragged){const left=event.targetTouches[0].clientX-dragStartX;setTranslateSpace(saveTranslateSpace+-1*left),setLeftDrag(left)}},onDragStart=clientX=>{setDragged(!0),setDragStartX(clientX)},onDragEnd=()=>{if(dragged){setDragged(!1);let newActive=active+Math.round(-1*leftDrag/widthItem);newActive<0&&(newActive=0),newActive>children.length-itemsBySlide&&(newActive=active),setActive(newActive)}};return react_1.useEffect(resizeWidth,[ref.current]),react_1.useEffect(()=>(window.addEventListener("resize",resizeWidth),()=>{window.removeEventListener("resize",resizeWidth)})),react_1.useEffect(()=>setTranslateSpace(active*widthItem),[active,dragged]),react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(styles_1.CarouselStyled,{ref:ref,onMouseDown:event=>{setSaveTranslateSpace(translateSpace),onDragStart(event.clientX)},onMouseMove:onMouseMove,onMouseUp:()=>{window.removeEventListener("mousemove",onMouseMove),onDragEnd()},onTouchStart:event=>{const touch=event.targetTouches[0];setSaveTranslateSpace(translateSpace),onDragStart(touch.clientX)},onTouchMove:onTouchMove,onTouchEnd:()=>{window.removeEventListener("touchmove",onTouchMove),onDragEnd()}},react_1.default.createElement(styles_1.CarouselContainer,{style:{transform:`translateX(${-1*translateSpace}px)`},dragged:dragged},children.map((item,id)=>react_1.default.createElement(styles_1.CarouselItem,{key:id,width:widthItem},item)))),shouldNavigatePrevious&&react_1.default.createElement("button",{onClick:()=>shouldNavigatePrevious&&setActive(active-1)},"Précédent"),shouldNavigateNext&&react_1.default.createElement("button",{onClick:()=>shouldNavigateNext&&setActive(active+1)},"Suivant"))}},632:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__importDefault(__webpack_require__(276));exports.CarouselStyled=styled_components_1.default.div`
  display: flex;
  flex-direction: row;
  background-color: #aaaaaa;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  padding: 20px 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`,exports.CarouselContainer=styled_components_1.default.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  ${props=>!props.dragged&&"\n    transition: all ease 0.2s;\n  "}
`,exports.CarouselItem=styled_components_1.default.div`
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props=>props.width}px;
  border-radius: 30px;
  padding: 10px 0;
`}},[[282,1,2]]]);
//# sourceMappingURL=main.92ac2643e0c9769499d6.bundle.js.map