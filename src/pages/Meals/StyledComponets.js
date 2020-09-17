import styled from 'styled-components';
import { SmallButton, ClickAnim, fadeInAnim } from '../../Assets/Style';

export const MealsContainer = styled.div`
  ${fadeInAnim};
`;

export const Recipes = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 20px;
`;
export const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Categories = styled.div`
  height: ${(props) => (props.visible ? '110px' : '0px')};
  overflow: hidden;
  padding: 0 5px;
  transition: height ease-out 0.2s;
`;

export const CategoriesButton = styled(SmallButton)`
  margin-left: auto;
  margin-right: 20px;
  height: 35px;
  background-color: #7b1fa2;
  color: white;
  font-weight: 800;
  font-size: 1.1em;
  display: flex;
  align-items: center;

  &:active {
    ${ClickAnim};
  }
`;
