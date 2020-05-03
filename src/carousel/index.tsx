import React, { useState, useEffect, useRef, ReactNode, FunctionComponent } from "react";
import { CarouselStyled, CarouselContainer, CarouselItem, CarouselArrow, CarouselSlidesContainer, Arrow, Dot, DotsList } from "./styles";

export interface CarouselProps {
  itemsToShow?: number,
  itemsToSlide?: number,
  itemsWidth?: number,
  space?: number,
  children: ReactNode[],
  dots?: ReactNode | boolean,
  mode?: string,
  paddingContainer?: number,
}

const Carousel: FunctionComponent<CarouselProps> = props => {
  const { children = [], itemsToShow = 1, itemsToSlide = 1, dots = false, space = 10, itemsWidth = 100, mode = 'normal'} = props;

  const ref = useRef<HTMLInputElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [active, setActive] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragged, setDragged] = useState(false);
  const [leftDrag, setLeftDrag] = useState(0);
  const [widthItem, setWidthItem] = useState(0);
  const [direction, setDirection] = useState('');
  
  const [translateSpace, setTranslateSpace] = useState(widthItem * active);
  const [saveTranslateSpace, setSaveTranslateSpace] = useState(0);

  // let childrenList = React.Children.toArray(children);
  const padding = mode === 'normal' ? space : 0;
  const margin = mode === 'variableWidth' ? space : 0;

  useEffect(() => {
    if(mode === 'variableWidth') {
      // const item = childrenList[0];
      // if (React.isValidElement<{style: boolean}>(item)) {
      //   console.log('hello123:', item.props['style']);
      // }
      setWidthItem(itemsWidth);
    } else if(mode === 'normal') {
      setWidthItem(containerWidth / itemsToShow);
    }
  }, [widthItem, itemsWidth, itemsToShow, containerWidth, mode]);

  useEffect(() => {
    setActive(0);
  }, [mode, itemsWidth, space]);

  const shouldNavigatePrevious = active > 0;
  const shouldNavigateNext = () => {
    // Mode : Normal
    // if(mode === 'normal' && active < children.length - 1 && itemsToShow + active <= children.length - 1) return true;

    // Mode : Every ////VariableWidth
    const totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin - translateSpace;
    const lastItemIsFullyVisible = totalWidthOfItemsAndMargins > containerWidth;
    if(lastItemIsFullyVisible ) return true;
    // if(mode === 'variableWidth' && lastItemIsFullyVisible ) return true;

    return false;
  }

  const resizeWidth = () =>
    setContainerWidth(ref.current ? ref.current.offsetWidth : 0);

  const move = () => {
    const totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin;
    const itemsOverflowAtTheEnd = totalWidthOfItemsAndMargins - translateSpace - (widthItem + margin) > containerWidth;
    const shouldShowLastItemToTheEnd = mode === "variableWidth" && direction === 'next' && !itemsOverflowAtTheEnd;
    if(shouldShowLastItemToTheEnd) {
      setTranslateSpace(children.length * (widthItem + margin) - margin - containerWidth);
    } else {
      setTranslateSpace(active * (widthItem + margin));
    }
  }
  const previous = () => {
    if(shouldNavigatePrevious) {
      setDirection('previous');
      setActive(active - itemsToSlide);
    }
  } 
  const next = () => {
    if(shouldNavigateNext()) {
      setDirection('next');
      setActive(active + itemsToSlide);
    }
  }

  const onMouseMove = (event: MouseEvent) => {
    if (dragged) {
      const left = event.clientX - dragStartX;
      setTranslateSpace(saveTranslateSpace + left * -1);
      setLeftDrag(left);
    }
  };
  const onTouchMove = (event: TouchEvent) => {
    if (dragged) {
      const touch = event.targetTouches[0];
      const left = touch.clientX - dragStartX;
      setTranslateSpace(saveTranslateSpace + left * -1);
      setLeftDrag(left);
    }
  };

  const onDragStart = (clientX: number) => {
    setDragged(true);
    setDragStartX(clientX);
  };
  const onDragStartTouch = (event: TouchEvent) => {
    const touch = event.targetTouches[0];
    setSaveTranslateSpace(translateSpace);
    onDragStart(touch.clientX);
  };
  const onDragStartMouse = (event: MouseEvent) => {
    setSaveTranslateSpace(translateSpace);
    onDragStart(event.clientX);
  };

  const onDragEnd = () => {
    if (dragged) {
      setDragged(false);
      let newActive = active + Math.round((leftDrag * -1) / widthItem);
      if (newActive < 0) newActive = 0;
      if (newActive > children.length - itemsToShow) newActive = active;
      setActive(newActive);
    }
  };

  const onDragEndMouse = () => {
    window.removeEventListener("mousemove", onMouseMove);
    onDragEnd();
  };

  const onDragEndTouch = () => {
    window.removeEventListener("touchmove", onTouchMove);
    onDragEnd();
  };
  useEffect(resizeWidth, [ref.current]);
  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  });
  useEffect(() => move(), [active, dragged]);

  const aaa = (children.length / itemsToSlide) ;


  return (
    <CarouselContainer>
      <CarouselStyled
        ref={ref}
        onMouseDown={onDragStartMouse}
        onMouseMove={onMouseMove}
        onMouseUp={onDragEndMouse}
        onTouchStart={onDragStartTouch}
        onTouchMove={onTouchMove}
        onTouchEnd={onDragEndTouch}
      >
        <CarouselSlidesContainer
          style={{ transform: `translateX(${translateSpace * -1}px)` }}
          dragged={dragged}
        >
          {mode === 'normal' && children.map((item, id) => (
            <CarouselItem key={id} width={widthItem} padding={padding}>
              {item}
            </CarouselItem>
          ))}
           {mode === 'variableWidth' && children.map((item, id) => (
            <CarouselItem key={id} width={widthItem} margin={margin}>
              {item}
            </CarouselItem>
          ))}
          {/* {variableWidth && children} */}
        </CarouselSlidesContainer>
      </CarouselStyled>
      {shouldNavigatePrevious && (<CarouselArrow onClick={previous} left><Arrow left/></CarouselArrow>)}
      {shouldNavigateNext() && <CarouselArrow onClick={next} right><Arrow right/></CarouselArrow>}
      {dots && (
        <DotsList>
          {[...Array(aaa).keys()].map((_, id) => <Dot key={id} active={active === id * itemsToSlide} onClick={()=>setActive(id)}/>)}
        </DotsList>
      )}
      
    </CarouselContainer>
  );
};
export default Carousel;
