import { config } from '@config/SiteConfig';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Article, Layout, Pagination, PostsContent } from '../components';
import Hero from '../components/Hero';
import { IData } from '../models/Data';

interface IProps {
  readonly data: IData;
  readonly pageContext: {
    readonly currentPage: number;
    readonly totalPages: number;
  };
}

export const BlogPage: FunctionComponent<IProps> = ({ pageContext: { currentPage, totalPages }, data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Hero subTitle={`Wszystkie wpisy ( ${totalCount} )`} />
      <PostsContent>
        {edges.map((post, index) => (
          <Article
            banner={post.node.frontmatter.banner.childImageSharp.fluid}
            title={post.node.frontmatter.title}
            primary={index % 4 === 0}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            category={post.node.frontmatter.category}
            key={post.node.fields.slug}
          />
        ))}
        <Pagination currentPage={currentPage} totalPages={totalPages} url={'blog'} />
      </PostsContent>
    </Layout>
  );
};
export default BlogPage;

export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
