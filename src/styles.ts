/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const StoryBookTitle = styled.h2`
  font-family: serif;
  color: #17294d;
  font-size: 45px;
  font-weight: 900;
  margin: 0;
  padding: 0;
`;

export const StoryBookDesc = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  margin: 10px 0;
  color: #17294d;
`;

export const Background = styled.div`
  height: 150px;
  width: 100%;
  background: linear-gradient(45deg, #f12711, #f5af19);
  clip-path: circle(400px at 50% -270px);
  transition: all ease-in 0.2s;
`;

export const Title = styled.h3`
  font-family: serif;
  color: #17294d;
  font-size: 25px;
  font-weight: 900;
  margin: 5px 20px;
  padding: 0;
  text-align: center;
  transition: all ease-in 0.2s;
  display: inline-block;
  border-radius: 30px;
`;

export const Desc = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  margin: 5px 20px;
  color: #17294d;
  display: inline-block;
  transition: all ease-in 0.2s;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 40px;
  background: linear-gradient(-45deg, #f12711, #f5af19);
  color: white;
  font-size: 20px;
  padding: 5px 15px;
  cursor: pointer;
  text-align: center;
`;

export const Card = styled.div`
  height: 300px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  overflow: hidden;
  transition: all ease 0.2s;
  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 8px 15px 1px rgba(0, 0, 0, 0.1);
    ${Background} {
      clip-path: circle(100% at 0% -80px);
      opacity: 0.05;
    }
    ${Title} {
      transform: scale(1.2) translateY(-70px);
      background-color: white;
      padding: 2px 10px;
      box-shadow: 0 8px 15px 1px rgba(0, 0, 0, 0.1);
    }
    ${Desc} {
      transform: scale(1.2) translateY(-30px);
    }
  }
`;

export const ItemNews = styled.div<{ rounded?: boolean }>`
  height: 300px;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${props => props.rounded && 'border-radius: 20px;'}
  ${Title} {
    color: white;
    font-size: 40px;
    text-align: left;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  ${Desc} {
    color: white;
    margin-bottom: 40px;
  }
`;

export const StyledArrow = styled.button<{ next?: boolean; prev?: boolean }>`
  position: absolute;
  height: 300px;
  width: 50px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  ${props => props.next && 'right: 0;'}
  ${props => props.prev && 'left: 0;'}
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  transition: all ease 0.4s;
  &:hover {
    width: 60px;
  }
  &:after {
    content: '${props => (props.prev && 'Prev') || (props.next && 'Next')}';
  }
`;
