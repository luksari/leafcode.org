import React, { FC, useState, Children } from 'react';
import { useDebounce, useWindowScroll, useWindowSize } from 'react-use';
import styled from 'styled-components';
import { BurgerButton } from '.';
import { media } from '../utils/media';
import { StyledLink } from './Link';
import { LogoSigil } from './Logo';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const visibilityVariants = {
  visible: { y: 0 },
  hidden: { y: '-100%' }
}


const MenuWrapper = styled(motion.nav).attrs({ variants: visibilityVariants })`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 420;
  margin: 0;
  padding: 15px 35px;
  position: absolute;
  position: fixed;
  justify-content: space-between;
  @media ${media.tablet} {
    padding: 10px 15px;
    position: fixed;
  }
`;


const MenuItem = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-right: 45px;
  text-transform: lowercase;
  display: block;
  margin-bottom: 0;
  &:last-of-type {
    margin-right: 0;
  }
  @media ${media.tablet} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.biggest};
    position: relative;
    transition: transform 0.3s;
    transform-origin: right;
    margin-bottom: 15px;
  }
  @media ${media.phone} {
    font-size: ${({ theme }) => theme.fontSize.big};
  }
  ${StyledLink} {
    display: block;
  }
`;

const expandVariants = {
  expanded: { x: 0 },
  closed: { x: '100%' }
}

const MenuListDesktop = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  transform: scaleX(1);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
`

const MenuListMobile = styled(MenuListDesktop).attrs({ variants: expandVariants })`
  @media ${media.tablet} {
    background: ${({ theme }) => theme.colors.lightText};
    justify-content: center;
    margin: 0;
    top: 0;
    left: 0;
    transform-origin: right;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
  }
`;

const MenuLink = styled(StyledLink)`
  text-transform: lowercase;
  position: relative;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.darkText};
  ::after {
    content: '';
    transform-origin: center;
    transform: scaleX(0);
    bottom: -3px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.gradients.primary(90)};
    transition: transform 0.3s;
    will-change: transform;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

const MenuListComponent: FC<{ isExpanded: boolean }> = ({ children, isExpanded }) => {
  const { width } = useWindowSize();

  return (<>
    {width < 1025
      ? 
      <MenuListMobile initial='closed' animate={isExpanded ? 'expanded' : 'closed'}>
        {Children.map(children, (child) => child)}
      </MenuListMobile>
      : 
      <MenuListDesktop>
        {Children.map(children, (child) => child)}
      </MenuListDesktop>
      }
  </>)
}

export const Menu: FC = () => {
  const { x, y } = useWindowScroll();
  const [isExpanded, setIsExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevPos, setPrevPos] = useState({ x, y });

  useDebounce(
    () => {
      setPrevPos(prevState => ({ ...prevState, y }));
      prevPos.y < y && !isExpanded ? setVisible(false) : setVisible(true);
    },
    35,
    [x, y],
  );

  const handleMenuClick = () => {
    setIsExpanded(false)
  }


  return (
    <MenuWrapper initial='visible' animate={visible ? 'visible' : 'hidden'}>
      <Link to='/'>
        <LogoSigil src={'assets/sigil.svg'} />
      </Link>
      <BurgerButton onClick={() => setIsExpanded((prev) => !prev)} isExpanded={isExpanded} />
      <MenuListComponent isExpanded={isExpanded}>
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
    </MenuListComponent>
  </MenuWrapper>
  );
};
