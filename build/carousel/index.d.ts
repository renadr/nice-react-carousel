import { ReactNode, FunctionComponent } from "react";
export interface CarouselProps {
    itemsBySlide: number;
    children: ReactNode[];
}
declare const Carousel: FunctionComponent<CarouselProps>;
export default Carousel;
