import React, { FC, useState } from 'react';
import { useDebounce, useWindowScroll } from 'react-use';
import styled from 'styled-components';
import { BurgerButton } from '.';
import { media } from '../utils/media';
import StyledLink, { LogoLink } from './Link';
import { LogoSigil } from './Logo';

interface IProps {
  readonly expanded?: boolean;
  readonly visible?: boolean;
}

const MenuWrapper = styled.header<IProps>`
  width: 100%;
  padding: 5px 15rem;
  background: ${props => props.theme.colors.grey.main};
  display: flex;
  align-items: center;
  z-index: 420;
  margin: 0;
  position: absolute;
  justify-content: space-between;

  @media ${media.tablet} {
    padding: 10px 15px;
    transform: ${props => (props.visible ? 'translateY(0)' : 'translateY(-300px)')};
    transition: transform 0.5s;
    justify-content: space-between;
    background: none;
    position: fixed;
    max-height: 85px;
  }
  @media ${media.phone} {
    max-height: 65px;
  }
`;
const MenuList = styled.ul<IProps>`
  display: flex;
  flex-direction: row;
  transform: scaleX(1);
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin: 0;

  @media ${media.tablet} {
    background: ${props => props.theme.colors.grey.bluish};
    justify-content: center;
    margin: 0;
    top: 0;
    left: 0;
    transform-origin: right;
    transition: transform 0.1s;
    transform: ${props => (props.expanded ? 'scaleX(1)' : 'scaleX(0)')};
    flex-direction: column;
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;

const MenuItem = styled.li<IProps>`
  list-style: none;
  text-align: center;
  margin: 0;
  font-size: 1rem;
  margin: 0 35px;
  @media ${media.tablet} {
    margin: 0;
    font-size: ${props => props.theme.fontSize.biggest};
    position: relative;
    transition: transform 0.3s;
    transform-origin: right;
    transform: ${props => (props.expanded ? 'scaleX(1)' : 'scaleX(0)')};
  }
  @media ${media.phone} {
    font-size: ${props => props.theme.fontSize.big};
  }
  ${StyledLink} {
    display: block;
  }
`;

const MenuLink = styled(StyledLink)`
  position: relative;
  color: ${props => props.theme.colors.white};
  ::after {
    content: '';
    transform-origin: center;
    transform: scaleX(0);
    bottom: -3px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.gradients.primary(90)};
    transition: transform 0.3s;
    will-change: transform;
  }
  &:hover {
    ::after {
      transform: scaleX(1);
    }
  }
  @media ${media.tablet} {
    color: white;
  }
`;

const Menu: FC<IProps> = () => {
  const { x, y } = useWindowScroll();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevPos, setPrevPos] = useState({ x, y });

  // tslint:disable-next-line: no-expression-statement
  useDebounce(
    () => {
      // tslint:disable-next-line: no-expression-statement
      setPrevPos(prevState => ({ ...prevState, y }));
      // tslint:disable-next-line: no-expression-statement
      prevPos.y < y ? setVisible(false) : setVisible(true);
    },
    35,
    [x, y],
  );

  return (
    <MenuWrapper visible={visible}>
      <LogoLink to='/'>
        <LogoSigil src={'/assets/sigil.svg'} />
      </LogoLink>
      <BurgerButton handleExpanded={setExpanded} expanded={expanded} />
      <MenuList expanded={expanded}>
        <MenuItem expanded={expanded}>
          <MenuLink color='white' to='/'>
            Strona główna
          </MenuLink>
        </MenuItem>
        <MenuItem expanded={expanded}>
          <MenuLink color='white' to='/blog'>
            Blog
          </MenuLink>
        </MenuItem>
        <MenuItem expanded={expanded}>
          <MenuLink color='white' to='/contact'>
            Kontakt
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  );
};
export default Menu;
