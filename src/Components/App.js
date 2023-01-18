/**
 * App component
 */

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import config from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { palette, media, nav } from './assets/constants';
import Navbar from './Navbar';
import Home from './Home';
import Friends from './Friends';
import Discover from './Discover';
import Map from './Map';
import Profile from './Profile';


Amplify.configure(config);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${palette.OFF_WHITE};
  min-height: 100vh;
  
  @media (min-width: ${media.DESKTOP_MIN_WIDTH}) {
    margin-left: ${nav.DESKTOP_WIDTH};
  }
`;

function App( {signOut, user }) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppWrapper>

        {/* NAVBAR */}
        <Navbar signOut={signOut} />

        {/* BODY CONTENT */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/map' element={<Map />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

      </AppWrapper>
    </BrowserRouter>
  );
};

export default withAuthenticator(App);