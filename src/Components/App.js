/**
 * App component
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { palette, styles } from './assets/constants';
import Navbar from './Navbar';
import Home from './Home';
import Friends from './Friends';
import Discover from './Discover';
import Map from './Map';
import Profile from './Profile';
import { listUsers } from '../graphql/queries';


Amplify.configure(config);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${palette.OFF_WHITE};
  min-height: 100vh;
  
  @media (min-width: ${styles.DESKTOP_MIN_WIDTH}) {
    margin-left: ${styles.DESKTOP_WIDTH};
  }
`;

function App( {signOut, user }) {

  /**
   * UserId for the current signed in user
   */
  const [userId, setUserId] = useState('be9d531a-84b8-4611-b356-f22a472b2737'); // SHOULD BE SET TO NULL

// COMMENTED OUT FOR DEVELOPMENT PURPOSES

  // /**
  //  * Fetch and set userId
  //  */
  // useEffect(() => {
  //   async function fetchData() {
  //     const id = await fetchUserId(user);
  //     setUserId(id);
  //   }
  //   fetchData();
  // }, []);


  // /**
  //  * Fetch all users from the database and return the userId that is associated with the signed in user
  //  * @param {*} user Current signed in user 
  //  * @returns 
  //  */
  // const fetchUserId = async (user) => {
  //   try {
  //     const users = await API.graphql({
  //       query: listUsers,
  //     });

  //     let userId = null;
  //     users.data.listUsers.items.forEach(item => {
  //       if (item.username == user.username) {
  //         userId = item.id;
  //       }
  //     });

  //     return userId;

  //   } catch (error) {
  //     console.log("Error while fetching userId: ", error);
  //   }
  // };

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
          <Route path='/profile' element={<Profile userId={userId}/>} />
        </Routes>

      </AppWrapper>
    </BrowserRouter>
  );
};

export default withAuthenticator(App);