import React, { FC } from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { LogoImage } from '.';
import { media } from '../utils/media';
import { PageTitle, PageTitleSecondary } from './Title';
import { Wrapper } from './Wrapper';
import BackgroundImage from 'gatsby-background-image';
import { theme } from '@config/Theme';

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
    padding: 2rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 2rem;
  }
`;

const GridRow = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  display: flex;
  background-position: bottom center;
  background-attachment: fixed;
  background-size: cover;
  @media ${media.tablet} {
    height: 600px;
  }
  
`;

const TitleWrapper = styled(Wrapper)`
  justify-content: flex-start;
  padding: 0;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 120px;
    height: 4px;
    background: ${props => props.theme.gradients.primary(90)};
    bottom: 5px;
  }
  @media ${media.tablet} {
    width: 100%;
  }
  @media ${media.phone} {
    width: 100%;
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

export const imageQuery = graphql`
  query {
    allFile(filter: {name: {eq: "bg"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
   }
`;


export const Hero: FC<IProps> = ({
  title = 'Na Froncie',
  subTitle = 'Boost your frontend',
  children,
  main,
}) => {
  return (
    <StaticQuery
      query={imageQuery}
      render={(data) => {
        const fluidImage = data.allFile.edges[0].node.childImageSharp.fluid;
        return (
          <GridRow 
            Tag='section'
            fluid={fluidImage}
            backgroundColor={theme.colors.neonBlue}
          >
            <HeroWrapper main={main}>
              <LogoImage src={'/assets/sigil.svg'} alt='Na froncie' />
              <TitleWrapper>
                <PageTitle data-text={title} background>
                  {title}
                </PageTitle>
                <PageTitleSecondary data-text={subTitle} background>
                  {subTitle}
                </PageTitleSecondary>
              </TitleWrapper>
              {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
            </HeroWrapper>
          </GridRow>)
      }}
    />
  
  );
};