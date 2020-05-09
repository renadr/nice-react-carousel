import React, { useState, useEffect, useRef, FunctionComponent, ReactElement } from 'react';
import {
  CarouselStyled,
  CarouselContainer,
  CarouselItem,
  CarouselArrow,
  CarouselSlidesContainer,
  Arrow,
  Dot,
  DotsList,
} from './styles';
import { CurrentProps, ResponsiveCarousel, CarouselProps } from './interfaces';

const Carousel: FunctionComponent<CarouselProps> = props => {
  const {
    children = [],
    itemsToShow = 1,
    itemsToSlide = 1,
    dots = false,
    space = 10,
    itemsWidth = 100,
    mode = 'normal',
    arrows = true,
    customNextArrow = null,
    customPrevArrow = null,
    responsive = [],
  } = props;

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

  const [actual, setActual] = useState<CurrentProps>({
    width: 0,
    itemsToShow,
    itemsToSlide,
    dots,
    space,
    itemsWidth,
    mode,
    arrows,
    customNextArrow,
    customPrevArrow,
  });
  const padding = actual.mode === 'normal' ? actual.space : 0;
  const margin = actual.mode !== 'normal' ? actual.space : 0;

  const handleResize = () => {
    const vw = window.innerWidth;
    if (responsive && vw) {
      let currentProps: CurrentProps = {
        width: 0,
        itemsToShow,
        itemsToSlide,
        dots,
        space,
        itemsWidth,
        mode,
        arrows,
        customNextArrow,
        customPrevArrow,
      };
      responsive.forEach((respProps: ResponsiveCarousel) => {
        if (vw >= respProps.width) {
          if (respProps.width > currentProps.width) {
            currentProps = { ...currentProps, ...respProps };
          }
        }
      });
      setActual(currentProps);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    if (actual.mode === 'normal') {
      setWidthItem(containerWidth / actual.itemsToShow);
    } else {
      setWidthItem(actual.itemsWidth);
    }
  }, [widthItem, actual.itemsWidth, actual.itemsToShow, containerWidth, actual.mode]);

  useEffect(() => {
    setActive(0);
  }, [actual.mode, itemsWidth, actual.space]);

  const shouldNavigatePrevious = active > 0;
  const shouldNavigateNext = (): boolean => {
    const totalWidthOfItemsAndMargins =
      children.length * (widthItem + margin) - margin - translateSpace;
    const lastItemIsFullyVisible = totalWidthOfItemsAndMargins > containerWidth;
    if (lastItemIsFullyVisible) return true;
    return false;
  };

  const resizeWidth = (): void => setContainerWidth(ref.current ? ref.current.offsetWidth : 0);

  useEffect(() => resizeWidth(), [])

  const move = (): void => {
    const totalWidthOfItemsAndMargins = children.length * (widthItem + margin) - margin;
    const itemsOverflowAtTheEnd =
      totalWidthOfItemsAndMargins - translateSpace - (widthItem + margin) > containerWidth;
    const shouldShowLastItemToTheEnd =
      actual.mode !== 'normal' && direction === 'next' && !itemsOverflowAtTheEnd;
    if (shouldShowLastItemToTheEnd) {
      setTranslateSpace(children.length * (widthItem + margin) - margin - containerWidth);
    } else if (actual.mode === 'center' && active !== 0) {
      const nbOfItems = Math.floor(containerWidth / (widthItem + margin));
      const shiftToCenter = (containerWidth - nbOfItems * (widthItem + margin)) / 2 + margin / 2;
      setTranslateSpace(active * (widthItem + margin) - shiftToCenter);
    } else {
      setTranslateSpace(active * (widthItem + margin));
    }
  };
  const previous = (): void => {
    if (shouldNavigatePrevious) {
      setDirection('previous');
      setActive(active - actual.itemsToSlide);
    }
  };
  const next = (): void => {
    if (shouldNavigateNext()) {
      setDirection('next');
      setActive(active + actual.itemsToSlide);
    }
  };

  const onMouseMove = (event: MouseEvent): void => {
    if (dragged) {
      const left = event.clientX - dragStartX;
      setTranslateSpace(saveTranslateSpace + left * -1);
      setLeftDrag(left);
    }
  };
  const onTouchMove = (event: TouchEvent): void => {
    if (dragged) {
      const touch = event.targetTouches[0];
      const left = touch.clientX - dragStartX;
      setTranslateSpace(saveTranslateSpace + left * -1);
      setLeftDrag(left);
    }
  };

  const onDragStart = (clientX: number): void => {
    setDragged(true);
    setDragStartX(clientX);
  };
  const onDragStartTouch = (event: TouchEvent): void => {
    const touch = event.targetTouches[0];
    setSaveTranslateSpace(translateSpace);
    onDragStart(touch.clientX);
  };
  const onDragStartMouse = (event: MouseEvent): void => {
    setSaveTranslateSpace(translateSpace);
    onDragStart(event.clientX);
  };

  const onDragEnd = (): void => {
    if (dragged) {
      setDragged(false);
      let newActive = active + Math.round((leftDrag * -1) / widthItem * 2);
      if (newActive < 0) newActive = 0;
      if (newActive > children.length - actual.itemsToShow) newActive = active;
      setActive(newActive);
    }
  };

  const onDragEndMouse = (): void => {
    window.removeEventListener('mousemove', onMouseMove);
    onDragEnd();
  };

  const onDragEndTouch = (): void => {
    window.removeEventListener('touchmove', onTouchMove);
    onDragEnd();
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWidth);
    return (): void => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => move(), [active, dragged]);

  const showPrevArrow = (): ReactElement | null => {
    if (actual.arrows && shouldNavigatePrevious) {
      if (actual.customPrevArrow) {
        return React.cloneElement(actual.customPrevArrow, { onClick: previous, left: true });
      }
      return (
        <CarouselArrow onClick={previous} left>
          <Arrow left />
        </CarouselArrow>
      );
    }
    return null;
  };

  const showNextArrow = (): ReactElement | null => {
    if (actual.arrows && shouldNavigateNext()) {
      if (actual.customNextArrow) {
        return React.cloneElement(actual.customNextArrow, { onClick: next, right: true });
      }
      return (
        <CarouselArrow onClick={next} right>
          <Arrow right />
        </CarouselArrow>
      );
    }
    return null;
  };

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
          {actual.mode === 'normal' &&
            children.map((item, id) => (
              <CarouselItem key={id} width={widthItem} padding={padding}>
                {item}
              </CarouselItem>
            ))}
          {(actual.mode === 'variableWidth' || actual.mode === 'center') &&
            children.map((item, id) => (
              <CarouselItem key={id} width={widthItem} margin={margin}>
                {item}
              </CarouselItem>
            ))}
        </CarouselSlidesContainer>
      </CarouselStyled>
      {showPrevArrow()}
      {showNextArrow()}
      {actual.dots && (
        <DotsList>
          {children.map((_, id) => (
            <Dot
              key={id}
              active={active === id * actual.itemsToSlide}
              onClick={(): void => setActive(id)}
            />
          ))}
        </DotsList>
      )}
    </CarouselContainer>
  );
};
export default Carousel;
