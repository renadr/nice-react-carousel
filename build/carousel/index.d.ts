import { ReactNode, FunctionComponent, ReactElement } from 'react';
export interface CarouselProps {
    itemsToShow?: number;
    itemsToSlide?: number;
    itemsWidth?: number;
    space?: number;
    children: ReactNode[];
    dots?: ReactNode | boolean;
    mode?: string;
    paddingContainer?: number;
    arrows?: boolean;
    customNextArrow?: ReactElement;
    customPrevArrow?: ReactElement;
}
declare const Carousel: FunctionComponent<CarouselProps>;
export default Carousel;
