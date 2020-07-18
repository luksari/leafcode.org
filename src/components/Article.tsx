import { Link, navigate } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash';
import moment from 'moment';
import React, { FunctionComponent, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { Subline } from './Subline';
import { motion } from 'framer-motion';

const Banner = styled(Img)`
  margin: 0;
  border-radius: 12px;
  height: 300px;
`;

const Post = styled(motion.article)<{ readonly primary?: boolean }>`
  display: grid;
  margin: 15px;
  overflow: hidden;
  max-height: 300px;
  width: 600px;
  flex: ${({ primary }) => (primary ? '1 1 100%' : '1 1 25%')};
  grid-template-columns: ${({ primary }) => (primary ? '1.2fr 1fr' : '1fr')};
  @media ${media.tablet} {
    flex: 1 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr;
  }
  @media ${media.phone} {
    grid-template-rows: 180px 1fr;
  }
`;


const ContentWrapper = styled.div`
  padding: 25px;
`;

const Title = styled.h2<{ readonly primary?: boolean }>`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  font-size: ${({ primary }) => (primary ? '2rem' : '1.7rem')};
  @media ${media.tablet} {
    font-size: 1.5rem;
  }
  @media ${media.phone} {
    font-size: 1rem;
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
    <Post primary={primary} onClick={handleClick} whileHover={{ y: -10, transition: { duration: 0.33 },  }}>
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
