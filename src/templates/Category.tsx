import { Link } from 'gatsby';
import React, { FC } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { config } from '../../config/SiteConfig';
import { Article, Button, Layout, PostsContent, Subline } from '../components';
import Hero from '../components/Hero';
import { IPageProps } from '../models/PageProps';
import { IPost } from '../models/Post';
import { getPostSubline } from '../utils/subline';

const StyledLink = styled(Link)`
  align-self: center;
  color: ${props => props.theme.colors.white};
  display: block;
`;

export const Category: FC<IPageProps> = ({ pathContext: { posts, categoryName } }) => {
  const totalCount = posts ? posts.length : 0;
  const subline = getPostSubline({ totalCount, name: categoryName });

  return (
    <Layout>
      <Helmet title={`${categoryName} | ${config.siteTitle}`} />
      <Hero title={'Kategorie'} subTitle={`#${categoryName}`}>
        <>
          <Subline sectionTitle>{subline}</Subline>
          <Button>
            <StyledLink to={'/categories'}>Wszystkie kategorie</StyledLink>
          </Button>
        </>
      </Hero>
      <PostsContent>
        {posts &&
          posts.map((post: IPost, index) => (
            <Article
              banner={post.frontmatter.banner.childImageSharp.fluid}
              primary={index % 4 === 0}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              timeToRead={post.timeToRead}
              slug={post.fields.slug}
              category={post.frontmatter.category}
              key={post.fields.slug}
            />
          ))}
      </PostsContent>
    </Layout>
  );
};
export default Category;
