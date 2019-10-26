import styled from 'styled-components';
import { media } from '../utils/media';

interface IProps {
  readonly fullWidth?: boolean;
}

export const Wrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  max-width: ${props => (props.fullWidth ? '100%' : '100rem')};
  padding: ${(props: IProps) => (props.fullWidth ? '0' : '0 3rem')};
  @media ${media.tablet} {
    padding: ${(props: IProps) => (props.fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.phone} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '1rem 1rem')};
  }
`;
