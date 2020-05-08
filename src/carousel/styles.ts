/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const CarouselStyled = styled.div<{
  ref: any;
  onMouseDown: any;
  onMouseMove: any;
  onMouseUp: any;
  onTouchStart: any;
  onTouchMove: any;
  onTouchEnd: any;
}>`
  display: flex;
  flex-direction: row;
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
  cursor: grab;
`;

export const CarouselSlidesContainer = styled.div<{ dragged: boolean }>`
  display: flex;
  flex-direction: row;
  ${props =>
    !props.dragged &&
    `
    transition: transform ease 0.6s;
  `}
`;

export const CarouselItem = styled.div<{ width?: number; padding?: number; margin?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width + 'px' : 'auto')};
  border-radius: 30px;
  padding: 10px 0;
  margin-right: ${props => (props.margin ? props.margin : 0)}px;
  padding: 0 ${props => (props.padding ? props.padding / 2 : 0)}px;
  box-sizing: border-box;
  & > * {
    width: 100%;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
`;

export const Arrow = styled.span<{ left?: boolean; right?: boolean }>`
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  ${props =>
    props.left &&
    `
    transform: rotate(-135deg);
    top: 4px;
  `}
  ${props =>
    props.right &&
    `
  transform: rotate(45deg);
  top: 0px;
  `}

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: #17294d;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }
`;

export const CarouselArrow = styled.button<{ left?: boolean; right?: boolean }>`
  height: 50px;
  width: 50px;
  background-color: #ffffff;
  border: none;
  border-radius: 100px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  transition: all ease-in 0.2s;
  ${props =>
    props.left &&
    `
    left: 0;
  `}
  ${props =>
    props.right &&
    `
    right: 0;
  `}
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const Dot = styled.button<{ active?: boolean }>`
  height: 5px;
  width: 20px;
  margin: 3px;
  padding: 0;
  border-radius: 20px;
  background-color: ${props => (props.active ? '#17294d' : '#EFEFEF')};
  border: none;
`;

export const DotsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
