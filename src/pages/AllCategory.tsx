import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { AnimatedTitle, Content, Header, Layout, PageTitle } from '../components';

import { config } from '@config/SiteConfig';
import { IPageProps } from '../models/PageProps';

export const AllCategoryTemplate: FunctionComponent<IPageProps> = ({ pathContext: { categories } }) => (
  <>
    {categories && (
      <Layout>
        <Helmet title={`Kategorie | ${config.siteTitle}`} />
        <Header>
          <PageTitle>Kategorie</PageTitle>
        </Header>
        <Content>
          {categories.map((category, index: number) => (
            <AnimatedTitle delay={index} key={index}>
              <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
            </AnimatedTitle>
          ))}
        </Content>
      </Layout>
    )}
  </>
);
export default AllCategoryTemplate;
