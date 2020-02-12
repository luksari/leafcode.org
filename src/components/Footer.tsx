import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.grey.bluish};
  color: ${({ theme }) => theme.colors.white};
  align-self: flex-end;
  text-align: center;
  margin-top: auto;
  span {
    font-size: 0.75rem;
  }
  a {
    color: white;
  }
`;