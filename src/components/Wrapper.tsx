import styled from 'styled-components';
import { media } from '../utils/media';

export const Wrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '100rem')};
  padding: ${({ fullWidth }) => (fullWidth ? '0' : '0 3rem')};
  @media ${media.tablet} {
    padding: ${({ fullWidth }) => (fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.phone} {
    padding: ${({ fullWidth }) => (fullWidth ? '0' : '1rem 1rem')};
  }
`;
