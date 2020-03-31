import React, { FC, useState } from 'react';
import { useDebounce, useWindowScroll } from 'react-use';
import styled from 'styled-components';
import { BurgerButton } from '.';
import { media } from '../utils/media';
import { StyledLink } from './Link';
import { LogoSigil } from './Logo';
import { Link } from 'gatsby';



const MenuWrapper = styled.header<{ visible?: boolean }>`
  width: 100%;
  padding: 5px 10rem;
  display: flex;
  align-items: center;
  z-index: 420;
  margin: 0;
  position: absolute;
  justify-content: space-between;
  @media ${media.tablet} {
    padding: 10px 15px;
    transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-300px)')};
    transition: transform 0.5s;
    background: none;
    position: fixed;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  text-align: center;
  margin: 0;
  font-size: 1rem;
  margin: 0 35px;
  text-transform: uppercase;
  &:last-of-type {
    margin-right: 0;
  }
  @media ${media.tablet} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.biggest};
    position: relative;
    transition: transform 0.3s;
    transform-origin: right;
  }
  @media ${media.phone} {
    font-size: ${({ theme }) => theme.fontSize.big};
  }
  ${StyledLink} {
    display: block;
  }
`;

const MenuList = styled.ul<{ expanded?: boolean }>`
  display: flex;
  flex-direction: row;
  transform: scaleX(1);
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin: 0;

  @media ${media.tablet} {
    background: ${({ theme }) => theme.colors.grey.bluish};
    justify-content: center;
    margin: 0;
    top: 0;
    left: 0;
    transform-origin: right;
    transition: transform 0.1s;
    transform: ${({ expanded }) => (expanded ? 'scaleX(1)' : 'scaleX(0)')};
    flex-direction: column;
    position: absolute;
    width: 100vw;
    height: 100vh;
    ${MenuItem} {
      transform: ${({ expanded}) => (expanded ? 'scaleX(1)' : 'scaleX(0)')};
    }
  }
`;



const MenuLink = styled(StyledLink)`
  position: relative;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  ::after {
    content: '';
    transform-origin: center;
    transform: scaleX(0);
    bottom: -3px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary(90)};
    transition: transform 0.3s;
    will-change: transform;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
  @media ${media.tablet} {
    color: white;
  }
`;

const Menu: FC<{ expanded?: boolean, visible?: boolean}> = () => {
  const { x, y } = useWindowScroll();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevPos, setPrevPos] = useState({ x, y });

  useDebounce(
    () => {
      setPrevPos(prevState => ({ ...prevState, y }));
      prevPos.y < y ? setVisible(false) : setVisible(true);
    },
    35,
    [x, y],
  );

  const handleMenuClick = () => {
    setExpanded(false)
  }

  return (
    <MenuWrapper visible={visible}>
      <Link to='/'>
        <LogoSigil src={'assets/sigil.svg'} />
      </Link>
      <BurgerButton handleExpanded={setExpanded} expanded={expanded} />
      <MenuList expanded={expanded}>
        <MenuItem>
          <MenuLink color='white' to='/' onClick={handleMenuClick}>
            Strona główna
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink color='white' to='/blog' onClick={handleMenuClick}>
            Blog
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink color='white' to='/contact' onClick={handleMenuClick}>
            Kontakt
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  );
};
export default Menu;
