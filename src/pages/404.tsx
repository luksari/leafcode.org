import { Link } from 'gatsby';
import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { Content, Header, Layout, SectionTitle, Wrapper } from '../components';
import { config } from '@config/SiteConfig';

export const NotFoundPage: FC = () => (
  <Layout>
    <Helmet title={`404 Nie znaleziono | ${config.siteTitle}`} />
    <Header>
      <Link to='/'>{config.siteTitle}</Link>
      <SectionTitle>Nie znaleziono</SectionTitle>
    </Header>
    <Wrapper>
      <Content>
        <p>Hej, chyba nie powinno Cię tu być 😔</p>
      </Content>
    </Wrapper>
  </Layout>
);
export default NotFoundPage;
