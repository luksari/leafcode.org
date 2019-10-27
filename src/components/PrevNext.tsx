import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IPost } from '../models/Post';

const Wrapper = styled.div`
  display: flex;
  margin-top: 35px;
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-items: center;
`;

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

interface IProps {
  readonly next: IPost;
  readonly prev: IPost;
}

export const PrevNext: FunctionComponent<IProps> = ({ prev, next }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>Poprzedni</span>
        <Link to={`/blog/${kebabCase(prev.frontmatter.title)}`}>{prev.frontmatter.title}</Link>
      </Prev>
    )}
    {next && (
      <Next>
        <span>Następny</span>
        <Link to={`/blog/${kebabCase(next.frontmatter.title)}`}>{next.frontmatter.title}</Link>
      </Next>
    )}
  </Wrapper>
);
export default PrevNext;
