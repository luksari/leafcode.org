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
  margin: 0;
  position: absolute;
  left: 5rem;
  mix-blend-mode: hard-light;
  width: 100%;
  width: ${props => (props.big ? '65%' : '45%')};
  @media ${media.tablet} {
    left: 0;
    width: 70%;
  }
  @media ${media.phone} {
    width: 100%;
  }
`;

export const LogoSigil = styled.img`
  animation: ${slideFromTop} 0.6s ease-in-out;
  margin: 0;
  padding: 5px 0;
  height: 55%;
  width: 30%;
  @media ${media.tablet} {
    max-height: 85px;
    margin-bottom: 0rem;
  }
  @media ${media.phone} {
    max-height: 65px;
  }
`;

export default LogoImage;
