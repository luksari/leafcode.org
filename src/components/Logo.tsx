import styled, { keyframes } from 'styled-components';
import { media } from '../utils/media';

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

export const LogoImage = styled.img<{ readonly big?: boolean }>`
  position: absolute;
  left: -250px;
  top: 0;
  height: 100%;
  width: auto;
  @media ${media.tablet} {
    left: -200px;
  }
  @media ${media.phone} {
    left: -150px;
  }
`;

export const LogoSigil = styled.img`
  animation: ${slideFromTop} 0.6s ease-in-out;
  margin: 0;
  height: 100%;
  max-height: 65px;
  width: 100%;
  @media ${media.tablet} {
    max-height: 85px;
    margin-bottom: 0rem;
  }
  @media ${media.phone} {
    max-height: 65px;
  }
`;

