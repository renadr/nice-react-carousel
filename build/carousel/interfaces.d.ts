import { ReactNode, ReactElement } from 'react';
export interface CurrentProps {
    breakpoint: number;
    itemsToShow: number;
    itemsToSlide: number;
    itemsWidth: number;
    space: number;
    dots: Function | boolean;
    mode: string;
    arrows: boolean;
    customNextArrow: ReactElement | null;
    customPrevArrow: ReactElement | null;
}
export interface ResponsiveCarousel {
    breakpoint: number;
    itemsToShow?: number;
    itemsToSlide?: number;
    itemsWidth?: number;
    space?: number;
    dots?: Function | boolean;
    mode?: string;
    arrows?: boolean;
    customNextArrow?: ReactElement | null;
    customPrevArrow?: ReactElement | null;
}
export interface CarouselProps {
    itemsToShow?: number;
    itemsToSlide?: number;
    itemsWidth?: number;
    space?: number;
    children: ReactNode[];
    dots?: Function | boolean;
    mode?: string;
    arrows?: boolean;
    customNextArrow?: ReactElement | null;
    customPrevArrow?: ReactElement | null;
    responsive?: ResponsiveCarousel[];
}
