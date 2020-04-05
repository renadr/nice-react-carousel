import styled from "styled-components";

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

export const Card = styled.div`
  height: 350px;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.15);
  border-radius: 25px;
  overflow: hidden;
  transition: all ease-in .2s;
  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11);
  }
`;

export const Background = styled.div`
  height: 150px;
  width: 100%;
  background: #EFEFEF;
`;

export const Title = styled.h3`
  font-family: serif;
  color: #17294d;
  font-size: 25px;
  font-weight: 900;
  margin: 10px;
  padding: 0;
`;

export const Desc = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  margin: 10px;
  color: #17294d;
`;