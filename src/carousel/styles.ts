import styled from "styled-components";

export const CarouselStyled = styled.div<{ ref: any, onMouseDown: any, onMouseMove: any, onMouseUp: any, onTouchStart: any, onTouchMove: any, onTouchEnd: any }>`
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
`;

export const CarouselContainer = styled.div<{ dragged: boolean }>`
  background-color: red;
  display: flex;
  flex-direction: row;
  ${props =>
    !props.dragged &&
    `
    transition: all ease 0.2s;
  `}
`;

export const CarouselItem = styled.div<{ width: number }>`
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}px;
  border-radius: 30px;
  padding: 10px 0;
`;
