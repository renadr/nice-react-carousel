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
  const [slidesListWidth, setSlidesListWidth] = useState(0);

  const [actual, setActual] = useState<CurrentProps>({
    breakpoint: 0,
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
        breakpoint: 0,
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
        if (vw >= respProps.breakpoint) {
          if (respProps.breakpoint > currentProps.breakpoint) {
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

  const calculateItemWidth = (shouldCalculateWidth: boolean) =>
    shouldCalculateWidth ? containerWidth / actual.itemsToShow : actual.itemsWidth;

  useEffect(() => {
    setWidthItem(calculateItemWidth(actual.mode === 'normal'));
  }, [widthItem, actual.itemsWidth, actual.itemsToShow, containerWidth, actual.mode]);

  useEffect(() => {
    setActive(0);
  }, [actual.mode, itemsWidth, actual.space]);

  useEffect(() => {
    setSlidesListWidth(children.length * (widthItem + margin) - margin);
  }, [widthItem, margin]);

  const shouldNavigatePrevious = (): boolean => active > 0;
  const shouldNavigateNext = (): boolean => {
    const endOfItemsPosition = slidesListWidth - translateSpace;
    const lastItemIsFullyVisible = endOfItemsPosition > containerWidth;
    return lastItemIsFullyVisible;
  };

  const resizeWidth = (): void => setContainerWidth(ref.current ? ref.current.offsetWidth : 0);

  useEffect(() => resizeWidth(), []);




  const move = (): void => {
    const itemsOverflowAtTheEnd =
      slidesListWidth - translateSpace - (widthItem + margin) > containerWidth;
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
    if (shouldNavigatePrevious()) {
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

  const getNewActiveFromDrag = (active: number, leftDrag: number, widthItem: number): number => {
    const newActive = active + Math.round((leftDrag * -1) / widthItem);
    if (newActive < 0) return 0;
    else if (newActive > children.length - actual.itemsToShow) return active;
    return newActive;
  };

  const onDragEnd = (): void => {
    if (dragged) {
      setDragged(false);
      setActive(getNewActiveFromDrag(active, leftDrag, widthItem));
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

  const showArrow = (
    shouldDisplay: boolean,
    customArrow: ReactElement | null,
    onClick: Function,
    propsArrow: object,
  ): ReactElement | null => {
    if (actual.arrows && shouldDisplay) {
      customArrow && React.cloneElement(customArrow, { onClick, ...propsArrow });
      return (
        <CarouselArrow onClick={onClick} {...propsArrow}>
          <Arrow {...propsArrow} />
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
          {(actual.mode !== 'normal') &&
            children.map((item, id) => (
              <CarouselItem key={id} width={widthItem} margin={margin}>
                {item}
              </CarouselItem>
            ))}
        </CarouselSlidesContainer>
      </CarouselStyled>
      {showArrow(shouldNavigatePrevious(), actual.customPrevArrow, previous, { left: true })}
      {showArrow(shouldNavigateNext(), actual.customNextArrow, next, { right: true })}
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
