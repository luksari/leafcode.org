import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const HeaderWrapper = styled.header`
  position: relative;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  padding: 5rem 0.5rem 5rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media ${media.tablet} {
    padding: 3.5rem 0.5rem 3.5rem 0.5rem;
  }
  @media ${media.phone} {
    padding: 2rem 0.5rem 2rem 0.5rem;
  }
`;

interface IProps {
  children: ReactElement | ReadonlyArray<ReactElement>;
  className?: string;
}

export const Header: FC<IProps> = ({ children, className }) => (
  <HeaderWrapper className={className}>
    <Content>{children}</Content>
  </HeaderWrapper>
);
