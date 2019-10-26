import { graphql, Link } from 'gatsby';
import React, { FC } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { config } from '../../config/SiteConfig';
import { Article, Button, Layout, PostsContent } from '../components';
import Hero from '../components/Hero';
import { IPageProps } from '../models/PageProps';

const SublineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const IndexPage: FC<IPageProps> = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title={`Homepage | ${config.siteTitle}`} />
      <Hero />
      <PostsContent>
        {edges &&
          edges
            .slice(0, config.HOMEPAGE_POSTS)
            .map((post, index) => (
              <Article
                banner={post.node.frontmatter.banner.childImageSharp.fluid}
                primary={index % 4 === 0}
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.excerpt}
                timeToRead={post.node.timeToRead}
                slug={post.node.fields.slug}
                category={post.node.frontmatter.category}
                key={post.node.fields.slug}
              />
            ))}
      </PostsContent>
      <SublineWrapper>
        <Link to='/blog'>
          <Button>Wszystkie wpisy ( {totalCount} )</Button>
        </Link>
      </SublineWrapper>
    </Layout>
  );
};
export default IndexPage;

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
            tags
            banner {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 255)
          timeToRead
        }
      }
    }
  }
`;
