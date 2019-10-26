import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';

export const StyledLink = styled(Link)<{ readonly color?: string; readonly bold?: boolean }>`
  color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.primary)};
  font-weight: ${({ bold }) => (bold ? '700' : '500')};
`;

export const LogoLink = styled(Link)`
  display: flex;
  @media ${media.tablet} {
  }
  @media ${media.phone} {
  }
`;

export default StyledLink;
