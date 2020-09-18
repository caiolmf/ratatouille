import styled, { css, keyframes } from 'styled-components';
import {
  SmallButton, ClickAnim, zdepth1, zdepth2, fadeInAnim, maxMobileSize,
} from '../../Assets/Style';

export const Recipe = styled.div`
  align-items: cneter;
  display: flex;
  flex-flow: column;
  justify-content: certe;
  padding: ${({ type }) => (type === 'menu' ? '103px 20px' : '15px 20px')};
  background-color: white;
  border-radius: 40px;
  margin-top: 30vh;
  box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 35%);
`;

export const recipeImgAmim = keyframes`
  from {
    transform: scale(1.3);
  }

  to {
    transform: scale(1);
  }
`;

export const RecipeImageContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  max-width: ${maxMobileSize};
  z-index: -1;
  overflow: hidden;
`;

export const RecipeImage = styled.img`
  width: 100%;
  max-width: ${maxMobileSize};
  z-index: -2;
  animation: ${recipeImgAmim} 2s ease-out forwards;
`;

export const RecipeHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  transition: background-color ease-out 0.5s;

  ${({ type }) => (type === 'menu'
    ? css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-width: ${maxMobileSize};
          background-color: white;
          padding: 0 20px;
        `
    : null)}
`;

export const RecipeTitle = styled.h1`
  font-size: 2em;
  font-weight: 800;
  margin-right: auto;
`;

export const RecipeVideo = styled.iframe`
  border-radius: 10px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  height: 300px;
  width: 100%;
`;

export const RecipeStartButtom = styled(SmallButton)`
  padding: 12px 0px;
  width: 30vh;
  font-size: 1.3em;
  bottom: 3vh;
  position: fixed;
  margin: 0;
  margin-left: 8vh;
  background-color: #7b1fa2;
  color: white;
  font-weight: 800;
  ${zdepth2};

  &:active {
    ${ClickAnim};
  }
`;

export const RecipeInredients = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const Ingredient = styled.div`
  width: 65vw;
  background-color: #dedede; // Old Color #f0ecec
  padding: 8px 35px;
  border-radius: 20px;
  font-size: 1.1em;
  margin-right: 10px;
  font-weight: 800;
`;

export const Measure = styled.div`
  width: 25vw;
  background-color: #dedede; // Old Color #f0ecec
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 1.1em;
  text-align: center;
  overflow: hidden;
  max-height: 42px;
`;
