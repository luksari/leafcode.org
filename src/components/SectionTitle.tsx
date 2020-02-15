import styled from 'styled-components';
import { media } from '../utils/media';

export const SectionTitle = styled.h1<{ light?: boolean, uppercase?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.biggest};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'normal')};
  text-align: center;
  color: ${({ light, theme })=> (light ? theme.colors.white : theme.colors.grey.bluish)};
  margin-bottom: 10px;
  @media ${media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.big};
  }
`;
export default SectionTitle;
