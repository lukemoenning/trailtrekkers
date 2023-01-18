/**
 * Component for the navigation bar. Distinquishes between mobile navigation items and desktop navigation items
 */

import { SvgIcon } from '@mui/material';
import React from 'react';
import styled from 'styled-components';


const NavbarItemWrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  outline: 1px solid red;
  transition: ease-in 200ms;
  color: red;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;

const NavbarItemTitle = styled.h3`
  padding-left: 10px;
`;


function NavbarItem({ title, Icon, isDesktop, signOut }) {
  return (
    <NavbarItemWrapper onClick={signOut ? signOut : () => {}}>

      {/* ICON */}
      <SvgIcon component={Icon}/>

      {/* ONLY DISPLAY THE TITLE IF TRUE */}
      {isDesktop && (<NavbarItemTitle>{title}</NavbarItemTitle>)}

    </NavbarItemWrapper>
  );
};

export default NavbarItem;