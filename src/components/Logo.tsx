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

export const LogoImage = styled(Sigil)<{ readonly big?: boolean }>`
  height: 100%;
  width: 100%;
  @media ${media.tablet} {
    left: -200px;
  }
  @media ${media.phone} {
    left: -150px;
  }
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

