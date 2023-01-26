/**
 * Component for the navigation bar. Distinquishes between mobile navigation items and desktop navigation items
 */

import { SvgIcon } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { palette } from './assets/constants';


export const NavbarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  transition: ease-in 200ms;
  border-radius: 20px;
  color: ${palette.WHITE};

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    background: ${palette.GREEN};
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