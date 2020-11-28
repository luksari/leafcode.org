import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { media, sizes } from '@utils/media';
import { PageTitle, PageTitleSecondary } from '@components/Title';
import { LogoImage } from '@components/Logo';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useWindowWidth } from '@react-hook/window-size';
import GatsbyImage from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const HeroWrapper = styled.div<{ main?: boolean }>`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  /** HeroWrapper class  */
  @media ${media.tablet} {
    height: 600px;
  }
`;

const LeavesImageContainer = styled(motion.div)`
  position: absolute;
  width: 1000px;
  z-index: 1;
  right: 0;
  bottom: 0;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    ${({ theme }) => css`
      background: linear-gradient(
        180deg,
        transparent,
        transparent 30%,
        ${theme.colors.bgLight} 60%
      );
    `};
  }
`;

const DotsImageContainer = styled(motion.div)`
  position: absolute !important;
  left: 0;
  top: 0;
  width: 700px;
`;

const TitleWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 150px auto;
  grid-column-gap: 15px;
  grid-template-rows: auto auto;
  justify-content: center;
  @media ${media.tablet} {
    align-items: center;
    grid-column-gap: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 85px auto auto;
    justify-content: center;
  }
`;

const LogoWrapper = styled(motion.div)`
  grid-column: 1/1;
  grid-row: 1/1;
  height: 100%;
  z-index: 10;
  @media ${media.tablet} {
    margin-bottom: 25px;
  }
`;

const AnimatedTitle = motion.custom(PageTitle);

const StyledMainTitle = styled(AnimatedTitle)`
  span {
    display: inline-block;
    border-bottom: 3px solid ${({ theme }) => theme.colors.darkText};
  }
  span:first-child {
    color: ${({ theme }) => theme.colors.darkText};
    padding: 0 25px 0 0;
  }
  span:last-child {
    background: ${({ theme }) => theme.colors.darkText};
    color: ${({ theme }) => theme.colors.lightText};
    padding: 0 25px;
  }
  @media ${media.tablet} {
    grid-column: 1/1;
    grid-row: 2/2;
    display: flex;
    justify-content: center;
  }
`;

const StyledSecondaryTitle = styled(PageTitleSecondary)`
  grid-column: 2/2;
  @media ${media.tablet} {
    grid-column: 1/1;
    grid-row: 3/3;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

const AnimatedSubtitle = motion.custom(StyledSecondaryTitle);

const PicturesQuery = graphql`
  query {
    leaves: file(relativePath: { eq: "HeroLeaves.png" }) {
      childImageSharp {
        fluid(quality: 85) {
          originalName
          aspectRatio
          src
          srcSet
          sizes
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
    dots: file(relativePath: { eq: "HeroDots.png" }) {
      childImageSharp {
        fluid(quality: 85) {
          originalName
          aspectRatio
          src
          srcSet
          sizes
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;

interface IProps {
  title?: string;
  subTitle?: string;
  main?: boolean;
}

export const Hero: FC<IProps> = ({
  title = 'Leafcode',
  subTitle = 'Frontend, UI/UX i wiele więcej',
  main,
}) => {
  const { leaves, dots } = useStaticQuery(PicturesQuery);
  const [isClient, setIsClient] = useState(false);
  const width = useWindowWidth();
  const isDesktop = width > sizes.tablet;

  const { scrollY } = useViewportScroll();

  const logoContainerMoveY = useTransform(
    scrollY,
    [0, 500],
    [0, isDesktop ? 200 : 150],
  );
  const logoContainerScale = useTransform(
    scrollY,
    [0, 500],
    [1, isDesktop ? 0.75 : 0.85],
  );
  const logoContainerBlur = useTransform(
    scrollY,
    [0, isDesktop ? 500 : 750],
    ['blur(0)', 'blur(4px)'],
  );
  const leavesScale = useTransform(
    scrollY,
    [0, 450],
    [isDesktop ? 1 : 0.5, isDesktop ? 1.2 : 0.6],
  );
  const dotsMoveY = useTransform(
    scrollY,
    [0, 450],
    [-100, isDesktop ? 300 : 200],
  );
  const dotsMoveX = useTransform(scrollY, [0, 450], [-350, -300]);
  const dotsScale = useTransform(scrollY, [0, 450], [1, 1.1]);
  const leavesMoveY = useTransform(scrollY, [0, 450], [150, 200]);
  const leavesX = isDesktop ? 300 : 1100;

  const dotsImageStyle = {
    y: dotsMoveY,
    x: dotsMoveX,
    scale: dotsScale,
    rotateZ: -15,
  };

  const leavesStyle = {
    x: leavesX,
    scale: leavesScale,
    y: leavesMoveY,
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <HeroWrapper>
      <DotsImageContainer style={dotsImageStyle}>
        <GatsbyImage fadeIn={false} fluid={dots.childImageSharp.fluid} />
      </DotsImageContainer>
      <LeavesImageContainer style={leavesStyle}>
        <GatsbyImage fadeIn={false} fluid={leaves.childImageSharp.fluid} />
      </LeavesImageContainer>
      <TitleWrapper
        style={{
          y: logoContainerMoveY,
          scale: logoContainerScale,
          filter: logoContainerBlur,
        }}
      >
        <LogoWrapper>
          <LogoImage />
        </LogoWrapper>
        {main ? (
          /** It is also AnimatedTitle due to composition */
          <StyledMainTitle>
            <span>leaf</span>
            <span>code</span>
          </StyledMainTitle>
        ) : (
          <AnimatedTitle>{title}</AnimatedTitle>
        )}
        <AnimatedSubtitle>{subTitle}</AnimatedSubtitle>
      </TitleWrapper>
    </HeroWrapper>
  );
};
