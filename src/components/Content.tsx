import styled from 'styled-components';
import { media } from '../utils/media';

export const Content = styled.section`
  padding: 2rem 9rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 2;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 1rem 1.5rem;
  }
`;

export const PostsContent: any = styled.section`
  padding: 3rem 15%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  z-index: 25;
  margin-top: -8rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
  @media ${media.tablet} {
    padding: 1rem 2rem;
    margin-top: -3.5rem;
    grid-template-columns: 1fr;
  }
  @media ${media.phone} {
    margin-top: -4rem;
    padding: 1rem 1rem;
  }
`;

export default Content;
