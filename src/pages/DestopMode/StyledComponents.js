import styled from 'styled-components';

export const Desktop = styled.div`
  display: flex;
  flex-flow: row:
  justify-content: center;
  align-items: center;
  background-color: #7b1fa2;
  color: white;
`;

export const PageBg = styled.div`
  background-color: #7b1fa2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const PageSide = styled.div`
  flex: 1;
  heigth: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const AppDisplay = styled.img`
  max-width: 50%;
`;

export const AppLogo = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 3.5em;
  color: white;
  margin-top: 10vh;
  z-index: 999;
  margin-left: 40px;
`;

export const DeskModeText = styled.p`
  text-align: center;
  font-size: 1.5em;
  margin-top: 80px;
  margin-left: 40px;
`;

export const PhoneQr = styled.img`
  width: 30%;
  border-radius: 15px;
  margin-top: 5%;
`;
