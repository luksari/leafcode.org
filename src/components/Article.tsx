import { Link, navigate } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash';
import moment from 'moment';
import React, { FunctionComponent, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { Subline } from './Subline';

const Post = styled.article<{ readonly primary?: boolean }>`
  display: grid;
  margin: 15px;
  overflow: hidden;
  grid-column-gap: 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.bgLight};
  box-shadow: 0px 2px 8px ${({ theme }) => theme.colors.grey.ultraLight};
  transition: transform 500ms ease-in-out;
  flex: ${({ primary }) => (primary ? '1 100%' : '1 30%')};
  max-width: ${({ primary }) => (primary ? '100%' : '500px')};
  grid-template-columns: ${({ primary }) => (primary ? '1fr 0.8fr' : '1fr')};
  border-top: 5px solid ${({ theme }) => theme.colors.accent};
  @media ${media.tablet} {
    flex: 1 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 350px 1fr;
  }
  @media ${media.phone} {
    grid-template-rows: 235px 1fr;
  }
  &:hover {
    transform: scale(1.015);
  }
`;

const Banner = styled(Img)`
  margin: 0;
  border: 5px solid ${({ theme }) => theme.colors.bgLight};
  width: auto;
  max-height: 355px;
  picture {
    height: 150px;
  }
`;

const ContentWrapper = styled.div`
  padding: 25px;
`;

const Title = styled.h2<{ readonly primary?: boolean }>`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  font-size: ${({ theme, primary }) => (primary ? theme.fontSize.big : theme.fontSize.medium)};
  @media ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.big};
  }
  @media ${media.phone} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: 1;
`;

const Excerpt = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface IProps {
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly timeToRead: number;
  readonly category: string;
  readonly primary?: boolean;
  readonly banner?: FluidObject;
}

export const Article: FunctionComponent<IProps> = ({ title, date, excerpt, slug, timeToRead, category, primary, banner }) => {
  const firstChar = title.charAt(0);
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`/blog/${slug}`);
  };

  return (
    <Post primary={primary} onClick={handleClick}>
      <Banner fluid={banner} />
      <ContentWrapper>
        <Title primary={primary}>
          <Initiale>{firstChar}</Initiale>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <Subline>
          {moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY')} &mdash; {timeToRead} min. czytania &mdash; w
          <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
      </ContentWrapper>
    </Post>
  );
};
export default Article;
