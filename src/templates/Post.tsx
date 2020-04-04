import { config } from '@config/SiteConfig';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { kebabCase } from 'lodash';
import moment from 'moment';
import { rgba } from 'polished';
import React, { FC } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Content, Header, Layout, PrevNext, SectionTitle, SEO, StyledLink, Subline, GlitchedPageTitle } from '../components';
import { IPathContext } from '../models/PathContext';
import { IPost } from '../models/Post';
import { media } from '../utils/media';
import '../utils/prismjs-theme.css';

const PostContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.6rem;
  margin-top: -12rem;
  margin-bottom: 1rem;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background: ${({ theme }) => theme.colors.accent};
    transform: translate(10px, 10px)
  }
  @media ${media.tablet} {
    padding: 1rem;
    margin-top: -4rem;
  }
`;

const PostSubline = styled(Subline)`
  color: ${props => props.theme.colors.secondary};
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
          <PostSubline light={false} sectionTitle>
            <StyledLink bold to={'/blog'}>
              Blog
            </StyledLink>{' '}
            / {moment(post.frontmatter.date).format('LLL')}
          </PostSubline>
          <SectionTitle>{post.frontmatter.title}</SectionTitle>
        </PostHeader>
        <StyledBackgroundImage Tag='header' fluid={post.frontmatter.banner.childImageSharp.fluid}>
          <StyledLink color={'white'} to={`/categories/${kebabCase(post.frontmatter.category)}`}>
            <GlitchedPageTitle background data-text={`#${post.frontmatter.category}`}>
              #{post.frontmatter.category}{' '}
            </GlitchedPageTitle>
          </StyledLink>
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
