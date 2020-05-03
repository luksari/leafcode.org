import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ color?: string; bold?: boolean }>`
  font-weight: 700;
`;


export default StyledLink;
