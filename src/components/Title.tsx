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

export const AnimatedTitle = styled(Title) <{ readonly delay: number }>`
  transition: color 0.15s, transform 0.15s;
  display: flex;
  justify-content: center;
  &:focus,
  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateX(150px);
  }
  ${props => css`
    animation: ${slideFromLeft} 0.65s linear ${props.delay * 0.13}s 1 both;
  `};
`;

export const PageTitle = styled.h1<{ readonly background: boolean }>`
  margin-top: 20px;
  text-align: left;
  position: relative;
  letter-spacing: 13px;
  font-size: 8rem;
  margin-bottom: 15px;
  z-index: 3;
  animation: ${glitchMain} 1.4s 0s linear infinite;
  white-space: pre;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  @media ${media.tablet} {
    width: 100%;
    font-size: 5rem;
  }
  @media ${media.phone} {
    margin-bottom: 15px;
    width: 100%;
    font-size: 2rem;
  }
  &::after,
  &::before {
    content: attr(data-text);
    position: absolute;
    z-index: -1;
    top: 0;
  }
  &::before {
    left: -3px;
    animation: ${glitchPseudo1} 1.6s 0.3s infinite linear alternate-reverse;
    background: ${props => props.theme.gradients.neonPink(180)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &::after {
    left: 3px;
    animation: ${glitchPseudo2} 1.3s 0.1s infinite linear alternate-reverse;
    background: ${props => props.theme.gradients.neonBlue(180)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const PageTitleSecondary = styled.h2<{ readonly background: boolean }>`
  text-align: left;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 6px;
  font-size: 1.5rem;
  z-index: 2;
  /* animation: ${glitchMain} 1s 0s linear infinite; */
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  @media ${media.tablet} {
    font-size: 2rem;
  }
  @media ${media.phone} {
    margin-bottom: 15px;
    width: 100%;
    font-size: 0.65rem;
  }
  /* &::after,
  &::before {
    content: attr(data-text);
    text-transform: uppercase;
    position: absolute;
    z-index: -1;
  }
  &::before {
    left: -3px;
    animation: ${glitchPseudo1} 1.6s 0.3s infinite linear alternate-reverse;
    background: ${props => props.theme.gradients.neonPink(180)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &::after {
    left: 3px;
    animation: ${glitchPseudo2} 1.3s 0.2s infinite linear alternate-reverse;
    background: ${props => props.theme.gradients.neonBlue(180)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */
`;
export default Title;
