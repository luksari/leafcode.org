/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react';
import styled from 'styled-components';
import { LogoImage } from './Logo';
import { media } from '../utils/media';
import { PageTitle, PageTitleSecondary } from './Title';
import Particles, { IParticlesParams } from 'react-particles-js';
import { theme } from '@config/Theme';

export const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
    @media ${media.tablet} {
      opacity: 0;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      background-attachment:fixed;
    }
    
`

const HeroWrapper = styled.div<{  main?: boolean }>`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: ${({ main }) => main ? '100vh' : '70vh'};
  @media ${media.tablet} {
    min-height: ${({ main }) => main ? '100vh' : '60vh'};
  }

  @media ${media.tablet} {
    height: 600px;
  }

`;


const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  @media ${media.tablet} {
    align-items: center;
  }
`;
const ChildrenWrapper = styled.div`
  z-index: 10;
  margin-top: 1rem;
  padding: 0.8rem 0.7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

interface IProps {
  title?: string;
  subTitle?: string;
  main?: boolean;
}

const particlesOpts: IParticlesParams = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      }
    },
    color: {
      value: theme.colors.primary,
    },
    line_linked: {
      enable: false,
    },
    size: {
      value: 6,
      random: true
    },
    opacity: {
      value: 0.6,
      anim: {
        enable: false,
      }
    },
    shape: {
      type: 'circle',
    }
   },
  interactivity: {
    detect_on: 'canvas',
    events: {
      resize: true,
    }
  },
}

export const Hero: FC<IProps> = ({
  title = 'Na Froncie',
  subTitle = 'Boost your frontend',
  children,
  main = false,
}) => {
  return (
        <HeroWrapper main={main}>
        <StyledParticles 
            params={particlesOpts}
          />
          <TitleWrapper>
            <LogoImage />
            <PageTitle data-text={title}>
              {title}
            </PageTitle>
            <PageTitleSecondary data-text={subTitle}>
              {subTitle}
            </PageTitleSecondary>
          </TitleWrapper>
          {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
        </HeroWrapper>
      )
};
