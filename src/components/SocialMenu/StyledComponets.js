import styled from 'styled-components';

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 125px; */
`;

export const SocialBtn = styled.button`
  /* background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border-radius: 100%; */
  border: 0;
  background-color: transparent;
  /* transition: background-color ease-out 0.2s;

  &:active {
    background-color: #e3e3e3;
  } */
`;

export const SocialBtnIcon = styled.img`
  width: 45px;
  height: 45px;
`;
