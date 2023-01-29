/**
 * Navigation bar
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette, styles } from './assets/constants';
import { Home, Groups, Explore, Map, AccountCircle, ExitToApp } from '@mui/icons-material';
import NavbarItem from './NavbarItem';
import { ReactComponent as Logo } from './assets/images/trailtrekkers-logo.svg';


const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  height: ${styles.DESKTOP_HEIGHT};
  width: ${styles.DESKTOP_WIDTH};
  background: ${palette.DARK_GREEN};

  @media (max-width: ${styles.DESKTOP_MIN_WIDTH}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${styles.MOBILE_HEIGHT};
    width: ${styles.MOBILE_WIDTH};
  }
`;

const NavLinksWrapper = styled.div`
  @media (max-width: ${styles.DESKTOP_MIN_WIDTH}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const NavLogo = styled(Logo)`
  margin: 10px;
  filter: invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%);
`;

function Navbar( {signOut }) {

  /**
   * Width of the current window
   */
  const [width, setWidth] = useState(window.innerWidth);

  /**
   * @returns {boolean} if the current window size is greater than the minimum desktop size
   */
  const isDesktop = () => {
    const desktopMinWidth = styles.DESKTOP_MIN_WIDTH.slice(0, -2);
    return width > new Number(desktopMinWidth);
  }

  /**
   * Handles updating width state on a window resize
   */
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <NavWrapper>

      {/* Navigation Links */}
      <NavLinksWrapper>

        {/* DISPLAY THE LOGO ONLY IF ON A DESKTOP */}
        {isDesktop() && <Link to='/'><NavLogo height={'50px'} width={'160px'}/></Link>}

        <Link to='/'><NavbarItem title={'Home'} Icon={Home} isDesktop={isDesktop()}></NavbarItem></Link>
        <Link to='/friends'><NavbarItem title={'Friends'} Icon={Groups} isDesktop={isDesktop()}></NavbarItem></Link>
        <Link to='/discover'><NavbarItem title={'Discover'} Icon={Explore} isDesktop={isDesktop()}></NavbarItem></Link>
        <Link to='/map'><NavbarItem title={'Map'} Icon={Map} isDesktop={isDesktop()}></NavbarItem></Link>
        <Link to='/profile'><NavbarItem title={'Profile'} Icon={AccountCircle} isDesktop={isDesktop()}></NavbarItem></Link>
      </NavLinksWrapper>

      {/* SIGN OUT BUTTON */}
      <NavbarItem title={'Sign Out'} Icon={ExitToApp} isDesktop={isDesktop()} signOut={signOut}></NavbarItem>

    </NavWrapper>
  );
};

export default Navbar;