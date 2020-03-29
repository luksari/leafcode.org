import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const HeaderWrapper = styled.header`
  margin-top: 65px;
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
  readonly children: ReactElement | ReadonlyArray<ReactElement>;
  readonly banner?: string;
}

export const Header: FC<IProps> = ({ children }) => (
  <HeaderWrapper>
    <Content>{children}</Content>
  </HeaderWrapper>
);
