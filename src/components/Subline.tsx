import { rgba } from 'polished';
import styled from 'styled-components';
import { media } from '../utils/media';

interface IProps {
  readonly theme: {
    readonly fontSize: {
      readonly small: number;
      readonly big: number;
    };
    readonly colors: {
      readonly white: string;
      readonly grey: {
        readonly light: string;
      };
    };
  };
  readonly sectionTitle: string;
  readonly light: boolean;
}

export const Subline: any = styled.p`
  font-size: ${(props: IProps) => props.theme.fontSize.small};
  ${(props: IProps) => props.light && `color: ${rgba(props.theme.colors.white, 0.7)}`};
  ${(props: IProps) => props.sectionTitle && 'text-align: center'};
  display: block;
  width: 100%;
  margin-bottom: 8px;
  @media ${media.tablet} {
    margin-bottom: 5px;
    width: 100%;
    font-size: 1.2rem;
  }
  @media ${media.phone} {
    width: 100%;
    font-size: ${props => props.theme.fontSize.smallest};
  }
`;
export default Subline;
