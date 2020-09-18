import React from 'react';
import appDisplay from '../../Assets/app-display.png';
import QrCode from '../../Assets/frame.png';
import { Desktop, PageSide, PageBg, AppDisplay, AppLogo, DeskModeText, PhoneQr } from './StyledComponents';

const DesktopMode = () => {
  return (
    <Desktop>
      <PageBg />
      <PageSide>
        <AppLogo>Ratatouille</AppLogo>
        <DeskModeText>
          Olá! ;)
          <br />
          Por enquanto o Ratatouille só pode ser utilizado no seu SmartPhone.
          <br />
          Para acessar utilize o QR Code abaixo.
        </DeskModeText>
        <PhoneQr src={QrCode} alt="Qr code for phone access" />
      </PageSide>
      <PageSide>
        <AppDisplay src={appDisplay} />
      </PageSide>
    </Desktop>
  );
};

export default DesktopMode;
