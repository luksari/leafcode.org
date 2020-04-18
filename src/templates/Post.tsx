import React, { FC } from 'react';
import { config } from '@config/SiteConfig';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Content, Header, Layout, PrevNext, SectionTitle, SEO, StyledLink, Subline } from '../components';
import { IPathContext } from '../models/PathContext';
import { IPost } from '../models/Post';
import { media } from '../utils/media';
import '../utils/prismjs-theme.css';

const PostContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-top: -12rem;
  margin-bottom: 1rem;
  position: relative;
  box-shadow: 0px 15px 10px -15px ${({ theme }) => theme.colors.darkText};
 
  @media ${media.tablet} {
    padding: 1rem;
    margin-top: -4rem;
  }
`;

const PostSubline = styled(Subline)`
  color: ${({ theme }) => theme.colors.primary};
  width: 250px;
  * {
    margin: 0 6px;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-position: bottom center;
  background-attachment: fixed;
  background-repeat: repeat-y;
  background-size: cover;
  height: 600px;
  @media ${media.tablet} {
    height: 400px;
  }
`;

const TagsWrapper = styled.div`
  padding: 5px 0;
  width: 100%;
  font-size: 15px;
  background: ${({ theme }) => theme.colors.bgLight}
`
const PostHeader = styled(Header)`
  min-height: 300px;
`;

interface IProps {
  readonly data: {
    readonly markdownRemark: IPost;
  };
  readonly pathContext: IPathContext;
}
export const PostPage: FC<IProps> = ({ pathContext: { prev, next }, data: { markdownRemark: post } }) => (
  <Layout>
    {post && (
      <>
        <SEO postPath={post.fields.slug} postNode={post} postSEO />
        <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
        <PostHeader>
          <PostSubline sectionTitle>
            <StyledLink bold to={'/blog'}>
              Blog
            </StyledLink>
            /<StyledLink bold to={`/categories/${kebabCase(post.frontmatter.category)}`}>
              {post.frontmatter.category}
            </StyledLink>
            / {post.frontmatter.date}
          </PostSubline>
          <SectionTitle>{post.frontmatter.title}</SectionTitle>
        </PostHeader>
        <StyledBackgroundImage Tag='header' fluid={post.frontmatter.banner.childImageSharp.fluid}>
        </StyledBackgroundImage>
        <Content>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.tags && (
            <TagsWrapper>
              Tagi: &#160;
              {post.frontmatter.tags.map((tag, i) => (
                <StyledLink key={i} to={`/tags/${kebabCase(tag)}`}>
                  <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                </StyledLink>
              ))}
            </TagsWrapper>
          )}
          <PrevNext prev={prev} next={next} />
        </Content>
      </>
    )}
  </Layout>
);

export default PostPage;

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
      timeToRead
    }
  }
`;
