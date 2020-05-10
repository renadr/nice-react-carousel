import { ReactNode, ReactElement } from 'react';
export interface CurrentProps {
    width: number;
    itemsToShow: number;
    itemsToSlide: number;
    itemsWidth: number;
    space: number;
    dots: ReactNode | boolean;
    mode: string;
    arrows: boolean;
    customNextArrow: ReactElement | null;
    customPrevArrow: ReactElement | null;
}
export interface ResponsiveCarousel {
    width: number;
    itemsToShow?: number;
    itemsToSlide?: number;
    itemsWidth?: number;
    space?: number;
    dots?: ReactNode | boolean;
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
    dots?: ReactNode | boolean;
    mode?: string;
    arrows?: boolean;
    customNextArrow?: ReactElement | null;
    customPrevArrow?: ReactElement | null;
    responsive?: ResponsiveCarousel[];
}
