import styled, { css, keyframes } from 'styled-components';

/** Drop Shadows */
export const zdepth1 = css`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const zdepth2 = css`
  box-shadow: 0 4px 5px 0 rgba(0 , 0 , 0 , 0.14), 0 1px 10px 0 rgba(0 , 0 , 0 , 0.12),
    0 2px 4px -1px rgba(0 , 0 , 0 , 0.3);
`;

export const zdepth3 = css`
  box-shadow: 0 8px 17px 2px rgba(0 , 0 , 0 , 0.14),
    0 3px 14px 2px rgba(0 , 0 , 0 , 0.12),0 5px 5px -3px rgba(0 , 0 , 0 , 0.2);
`;

export const zdepth4 = css`
  box-shadow: 0 16px 24px 2px rgba(0 , 0 , 0 , 0.14),
    0 6px 30px 5px rgba(0 , 0 , 0 , 0.12), 0 8px 10px -7px rgba(0 , 0 , 0 , 0.2);
`;

export const zdepth5 = css`
  box-shadow: 0 24px 38px 3px rgba(0 , 0 , 0 , 0.14),
    0 9px 46px 8px rgba(0 , 0 , 0 , 0.12), 0 11px 15px -7px rgba(0 , 0 , 0 , 0.2);
`;

export const DesktopContainer = styled.div`
  max-width: 400px;
  position: relative;
`;

export const SectionTitle = styled.h2`
  padding: 10px 20px;
  margin: 0;
  font-weight: 800;
  font-size: 2em;
  color: #303030;
`;

export const FadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeInAnim = css`
  animation: ${FadeInKeyframes} ease-out 0.5s forwards;
`;

export const ClickAnimKeyframes = keyframes`
  from {
    transform: scale(1);
    ${zdepth1}
  }

  to {
    transform: scale(1.1);
    ${zdepth2}
  }
`;

export const ClickAnim = css`
  animation: ${ClickAnimKeyframes} 0.3s ease-out;
`;

export const SmallButton = styled.button`
  background-color: #e5e5e5;
  padding: 10px 15px;
  border-radius: 20px;
  border: 0;
  margin: 10px;
  user-select: none;
  ${zdepth1}
  transition: all 0.2s ease-out;

  ${(props) => (props.selected
    ? css`
          outline: 0;
          background-color: #8504a6;
          color: white;
          ${zdepth2}
          transform: scale(1.05);
        `
    : null)}

  &:focus {
    outline: 0;
  }
`;
