import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { media } from '../utils/media';

export const Subline = styled.p<{ sectionTitle?: boolean; light?: boolean}>`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.grey.bluish};
  ${({ light, theme }) => light && css`
    color: ${rgba(theme.colors.bgLight, 0.7)}
    `};
  ${({ sectionTitle }) => sectionTitle && 'text-align: center'};
  width: 100%;
  margin-bottom: 8px;
  @media ${media.tablet} {
    margin-bottom: 5px;
    width: 100%;
    font-size: 1.2rem;
  }
  @media ${media.phone} {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.smallest};
  }
`;
export default Subline;
