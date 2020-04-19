import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ color?: string, bold?: boolean }>`
  color: ${({ color, theme }) => color ? (theme.colors as Record<string, any>)[color] : theme.colors.primary};
  font-weight: 700;
`;


export default StyledLink;
