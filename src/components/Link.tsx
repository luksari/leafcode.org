import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';

export const StyledLink = styled(Link)<{ color?: string, bold?: boolean }>`
  color: ${({ color, theme }) => color ? theme.colors[color] : theme.colors.primary};
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
