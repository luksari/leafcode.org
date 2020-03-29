import { random } from 'lodash';
import styled, { css, keyframes } from 'styled-components';
import { media } from '../utils/media';

const slideFromLeft = keyframes`
  0% {
    transform: translateX(-250px);
    opacity: 0;
  }
  65% {
    transform: translateX(45px);
    opacity: 1;
  }
  80% {
    transform: translateX(-15px);
  }
  100% {
    transform: translateX(0px);

  }
`;
const glitchPseudoFactory = (steps: number) => {
  const styles = [...Array(steps).keys()]
    .map(
      step => `
  ${(step / steps) * 100}% {
      clip: rect(${random(100)}px, 9999px, ${random(100)}px, 30px);
			transform: skew(${random(100) / 5}deg);
  }`,
    )
    .join('');

  return css`
    ${styles}
  `;
};
const glitchMainFactory = (steps: number) => {
  const styles = [...Array(steps).keys()]
    .map(
      step => `
  ${(step / steps) * 100}% {
			transform: skew(${random(5) - 5}deg);
  }`,
    )
    .join('');

  return css`
    ${styles}
  `;
};

const glitchPseudo1 = keyframes`
  ${glitchPseudoFactory(20)};
`;

const glitchPseudo2 = keyframes`
  ${glitchPseudoFactory(16)};
`;
const glitchMain = keyframes`
  ${glitchMainFactory(10)};
`;

export const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

export const AnimatedTitle = styled(Title)<{ delay: number }>`
  transition: color 0.15s, transform 0.15s;
  display: flex;
  justify-content: center;
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(150px);
  }
  ${({ delay }) => css`
    animation: ${slideFromLeft} 0.65s linear ${delay * 0.13}s 1 both;
  `};
`;

export const PageTitle = styled.h1<{ background: boolean }>`
  margin-top: 20px;
  letter-spacing: 13px;
  font-size: 8rem;
  margin-bottom: 15px;
  white-space: pre;
  width: 50%;
  color: ${({ background, theme }) => (background && theme.colors.white )};
  @media ${media.tablet} {
    width: 100%;
    font-size: 4.5rem;
  }
  @media ${media.phone} {
    margin-bottom: 15px;
    width: 100%;
    font-size: 2rem;
  }
`;

export const GlitchedPageTitle = styled(PageTitle)`
 animation: ${glitchMain} 1s 0s linear infinite;
 &::after,
 &::before {
    content: attr(data-text);
    position: absolute;
    z-index: -1;
  };
  &::before {
    left: -3px;
    animation: ${glitchPseudo1} 1.6s 0.3s infinite linear alternate-reverse;
    background: ${({ theme }) => theme.gradients.neonPink(180)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &::after {
    left: 3px;
    animation: ${glitchPseudo2} 1.3s 0.2s infinite linear alternate-reverse;
    background: ${({ theme }) => theme.gradients.neonBlue(180)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const PageTitleSecondary = styled.h2<{ background: boolean }>`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 6px;
  font-size: 1.5rem;
  z-index: 2;
  color: ${({ background, theme })=> (background ? theme.colors.white : null)};
  @media ${media.tablet} {
    font-size: 1.7rem;
  }
  @media ${media.phone} {
    margin-bottom: 15px;
    width: 100%;
    font-size: 0.8rem;
  }
`;
export default Title;
