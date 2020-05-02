import styled from 'styled-components';
import { media } from '../utils/media';

export const Content = styled.section`
  padding: 2rem 9rem;
  background-color: ${({ theme }) => theme.colors.bgLight};
  z-index: 2;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 1rem 1.5rem;
  }
`;

export const PostsContent = styled.section`
  padding: 3rem 10%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  z-index: 25;
  margin-top: -8rem;
  position: relative;
  @media ${media.tablet} {
    padding: 1rem 7rem;
    margin-top: -3.5rem;
    justify-content: center;
  }
  @media ${media.phone} {
    margin-top: -4rem;
    padding: 1rem 5rem;
  }
`;
