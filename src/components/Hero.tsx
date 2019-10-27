import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { LogoImage } from '.';
import { media } from '../utils/media';
import { PageTitle, PageTitleSecondary } from './Title';
import { Wrapper } from './Wrapper';

const HeroWrapper = styled.div<{ readonly main?: boolean }>`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: ${props => (props.main ? '100vh' : '70vh')};
  @media ${media.tablet} {
    min-height: ${props => (props.main ? '100vh' : '60vh')};
    padding: 2rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 2rem;
  }
`;

const GridRow: any = styled.div<{ readonly expanded: boolean }>`
  background: url("/assets/bg.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 20% 100%;
  color: ${(props: any) =>
    props.background ? props.theme.colors.white : null};
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
  margin-top: 1rem;
  z-index: 10;
  border-radius: 15px;
  padding: 0.5rem 0.7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 5px 7px -5px ${props => props.theme.colors.grey.bluish};
`;

interface IProps {
  readonly title?: string;
  readonly subTitle?: string;
  readonly children?: ReactElement | HTMLElement;
  readonly main?: boolean;
}

const Hero: FC<IProps> = ({
  title = 'Na Froncie',
  subTitle = 'Boost your frontend',
  children,
  main,
}) => {
  const secondaryText = `${subTitle}`;
  const mainText = `${title}`;

  return (
    <GridRow background>
      <HeroWrapper main={main}>
        <LogoImage src={'/assets/sigil.svg'} alt='Qarbon' />
        <TitleWrapper>
          <PageTitle data-text={mainText} background>
            {mainText}
          </PageTitle>
          <PageTitleSecondary data-text={secondaryText} background>
            {secondaryText}
          </PageTitleSecondary>
        </TitleWrapper>
        {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
      </HeroWrapper>
    </GridRow>
  );
};

export default Hero;
