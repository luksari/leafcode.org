import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ color?: string, bold?: boolean }>`
  color: ${({ color, theme }) => color ? (theme.colors as Record<string, any>)[color] : theme.colors.primary};
  font-weight: ${({ bold }) => (bold ? '700' : '500')};
`;

export const LogoLink = styled(Link)`
  display: flex;
`;

export default StyledLink;
