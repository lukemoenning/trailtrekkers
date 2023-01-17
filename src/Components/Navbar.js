/**
 * Navigation bar
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme, media, nav } from './assets/constants';


const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${media.DESKTOP_MIN_WIDTH}) {
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  outline: 1px solid red;
  transition: ease-in 200ms;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

function Navbar() {
  return (
    <NavWrapper>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/friends'>Friends</NavLink>
      <NavLink to='/discover'>Discover</NavLink>
      <NavLink to='/map'>Map</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
    </NavWrapper>
  );
};

export default Navbar;