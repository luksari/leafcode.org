import { lighten } from 'polished';
import styled from 'styled-components';

export const Button: any = styled.button`
  background-image: ${props => props.theme.gradients.primary(80)};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${(props: any) => (props.big ? '1.5rem' : '1rem')};
  font-size: ${(props: any) => (props.big ? props.theme.fontSize.medium : props.theme.fontSize.small)};
  color: white;
  padding: ${(props: any) => (props.big ? '0.35rem 1.6rem' : '0.25rem 1.5rem')};
  transition: transform ${(props: any) => props.theme.transitions.normal}, background ${(props: any) => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background: ${(props: any) => lighten(0.02, props.theme.colors.primary)};
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:focus {
    outline: ${(props: any) => props.theme.colors.secondary};
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: white;
  }
`;
export default Button;
