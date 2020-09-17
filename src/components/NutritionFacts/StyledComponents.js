import styled, { keyframes } from 'styled-components';
import { zdepth1, SmallButton, fadeInAnim } from '../../Assets/Style';

export const NutritionAnim = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Nutrition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  ${fadeInAnim};

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
  }
`;

export const NutritionFact = styled.div`
  width: 80vw;
  height: 62vh;
  background-color: white;
  border-radius: 15px;
  z-index: 99999;
  display: flex;
  flex-flow: column;
`;

export const FactHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 20px;
`;

export const FactImage = styled.img`
  width: 80px;
  height: 80px;
  ${zdepth1};
  border-radius: 20px;
`;

export const FactHeaderText = styled.div`
  display: flex;
  flex-flow: column;
`;

export const FactTitle = styled.h2`
  flex: 1;
  padding-left: 15px;
  margin: 0;
`;

export const FactSubTitle = styled.h3`
  flex: 1;
  padding-left: 15px;
  margin: 0;
  color: #7b7b7b;
`;

export const FactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Fact = styled.div`
  width: 65vw;
  background-color: #f0ecec;
  padding: 8px 35px;
  border-radius: 15px;
  font-size: 1.1em;
  margin-right: 10px;
  font-weight: 800;
`;

export const Quantity = styled.div`
  width: 31vw;
  background-color: #f0ecec;
  padding: 8px 0;
  border-radius: 10px;
  font-size: 1.1em;
  text-align: center;
`;

export const CloseBtn = styled(SmallButton)`
  align-self: center;
  background-color: #ec3c3c;
  color: white;
`;
