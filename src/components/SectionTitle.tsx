import styled from 'styled-components';
import { media } from '../utils/media';

export const SectionTitle = styled.h1<{ readonly light?: boolean }>`
  font-size: ${props => props.theme.fontSize.biggest};
  text-transform: ${(props: any) => (props.uppercase ? 'uppercase' : 'normal')};
  text-align: center;
  color: ${props => (props.light ? props.theme.colors.white : props.theme.colors.grey.bluish)};
  margin-bottom: 10px;
  @media ${media.tablet} {
    font-size: ${props => props.theme.fontSize.big};
  }
`;
export default SectionTitle;
