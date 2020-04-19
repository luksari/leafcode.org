import styled, { keyframes } from 'styled-components';
import { media } from '../utils/media';
import Sigil from 'assets/sigil.svg'

const slideFromTop = keyframes`
  0% {
    transform: translateY(-250px);
    opacity: 0;
  }
  65% {
    transform: translateY(20px);
    opacity: 1;
  }
  80% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);

  }
`;

export const LogoImage = styled(Sigil)`
  position: absolute;
  width: auto;
  left: 50%;
  transform: translateX(-50%) scale(4);
  opacity: 1;
  top: 0;
  z-index: 1;
`;

export const LogoSigil = styled(Sigil)`
  animation: ${slideFromTop} 0.6s ease-in-out;
  height: 85px;
  width: 85px;
  margin: 0;
  @media ${media.tablet} {
    height: 85px;
    width: 85px;
  }
  @media ${media.phone} {
    height: 65px;
    width: 65px;
  }
`;

