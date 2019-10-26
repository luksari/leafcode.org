import { graphql, StaticQuery } from 'gatsby';
import { split } from 'lodash';
import React, { FunctionComponent, ReactElement } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import './layout.scss';
import Menu from './Menu';
import { Wrapper } from './Wrapper';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.secondary};
  }
  body {
    overflow: hidden;
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: color ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.secondary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.secondary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.grey.bluish};
  color: ${props => props.theme.colors.white};
  align-self: flex-end;
  text-align: center;
  margin-top: auto;
  span {
    font-size: 0.75rem;
  }
  a {
    color: white;
  }
`;

const PageWrapper = styled.div`
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Layout: FunctionComponent<{ readonly children: ReactElement | ReadonlyArray<ReactElement> }> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "DD.MM.YYYY")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <GlobalStyle />
          <Menu />
          <Wrapper fullWidth>{children}</Wrapper>
          <Footer>
            &copy; {split(data.site.buildTime, '.')[2]} by Qarbon. All rights reserved. <br />
            <a href='https://qarbon.pl'>QARBON</a> <br />
            <span>Ostatnia zmiana: {data.site.buildTime}</span>
          </Footer>
        </PageWrapper>
      </ThemeProvider>
    )}
  />
);

export default Layout;