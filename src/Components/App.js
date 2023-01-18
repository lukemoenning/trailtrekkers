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
import { media, nav } from './assets/constants';
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
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  position: relative;

  background: tan;

  @media (max-width: ${media.DESKTOP_MIN_WIDTH}) {
    margin-top: ${nav.MOBILE_HEIGHT};
  }
`;

function App( {signOut, user }) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppWrapper>

        {/* NAVBAR */}
        <Navbar signOut={signOut} />

        {/* BODY CONTENT */}
        <BodyWrapper>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/map' element={<Map />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BodyWrapper>

      </AppWrapper>
    </BrowserRouter>
  );
};

export default withAuthenticator(App);