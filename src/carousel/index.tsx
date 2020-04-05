import React, { useState, useEffect, useRef, ReactNode, FunctionComponent } from "react";
import { CarouselStyled, CarouselContainer, CarouselItem, CarouselArrow, CarouselSlidesContainer, Arrow } from "./styles";

export interface CarouselProps {
  itemsBySlide: number,
  children: ReactNode[],
}

const Carousel: FunctionComponent<CarouselProps> = props => {
  const { children = [], itemsBySlide = 1 } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [active, setActive] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragged, setDragged] = useState(false);
  const [leftDrag, setLeftDrag] = useState(0);
  const widthItem = containerWidth / itemsBySlide;
  const [translateSpace, setTranslateSpace] = useState(widthItem * active);
  const [saveTranslateSpace, setSaveTranslateSpace] = useState(0);

  const shouldNavigatePrevious = active > 0;
  const shouldNavigateNext =
  active < children.length - 1 && itemsBySlide + active <= children.length - 1;

  const resizeWidth = () =>
    setContainerWidth(ref.current ? ref.current.offsetWidth : 0);
  const move = () => setTranslateSpace(active * widthItem);
  const previous = () => shouldNavigatePrevious && setActive(active - 1);
  const next = () => shouldNavigateNext && setActive(active + 1);

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
      if (newActive > children.length - itemsBySlide) newActive = active;
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
          {children.map((item, id) => (
            <CarouselItem key={id} width={widthItem}>
              {item}
            </CarouselItem>
          ))}
        </CarouselSlidesContainer>
      </CarouselStyled>
      {shouldNavigatePrevious && (
      <CarouselArrow onClick={previous} left><Arrow left/></CarouselArrow>)}
      {shouldNavigateNext && <CarouselArrow onClick={next} right><Arrow right/></CarouselArrow>}
    </CarouselContainer>
  );
};
export default Carousel;
