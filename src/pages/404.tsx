import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { config } from '../../config/SiteConfig';
import { Content, Header, Layout, SectionTitle, Wrapper } from '../components';

export const NotFoundPage: FunctionComponent<{}> = ({}) => (
  <Layout>
    <Helmet title={`404 Nie znaleziono | ${config.siteTitle}`} />
    <Header>
      <Link to='/'>{config.siteTitle}</Link>
      <SectionTitle>Nie znaleziono</SectionTitle>
    </Header>
    <Wrapper>
      <Content>
        <p>Przepraszamy, chyba nie powinno Cię tu być 😔😔😔</p>
      </Content>
    </Wrapper>
  </Layout>
);
export default NotFoundPage;
