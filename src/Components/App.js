/**
 * App component
 */

import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { palette, styles } from './assets/constants';
import { authenticatorComponents, authenticatorFormFields } from './Authenticator.styles';
import Navbar from './Navbar';
import Home from './Home';
import Friends from './Discover';
import Discover from './Discover';
import Map from './Map';
import Profile from './Profile';
import { listUsers, listHikes } from '../graphql/queries';
import UserContext from '../UserContext';
import Loading from './Loading';


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
   * State management pulled from UserContext
   */
  const { userInfo, setUserInfo, userHikes, setUserHikes } = useContext(UserContext);
  
  // COMMENTED OUT FOR DEVELOPMENT PURPOSES
  // ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****
  /**
   * Fetch and set user info when the app loads
   */
  useEffect(() => {
    async function fetchData() {
      const info = await fetchUserInfo(user);
      setUserInfo(info);
      const hikes = await fetchUserHikes(info.userId);
      setUserHikes(hikes);
    }
    fetchData();
  }, []);

  /**
   * Fetch all users from the database and return the userInfo that is associated with the signed in user
   * @param {*} user Current signed in user 
   * @returns 
   */
  const fetchUserInfo = async (user) => {
    try {
      const users = await API.graphql({
        query: listUsers,
      });

      let userId = null;
      users?.data?.listUsers?.items?.forEach(item => {
        if (item.username == user.username) {
          userId = item.id;
        }
      });

      return {
        userId: userId,
        username: user.username,
      }

    } catch (error) {
      console.log("Error while fetching userId: ", error);
    }
  };
  // ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****

  /**
   * @returns {Array} Array of hikes belonging to the user
   */
  const fetchUserHikes = async (userId) => {
    try {
      const hikes = await API.graphql({
        query: listHikes,
        variables: { 
          filter: { userId: { eq: userId } } 
        }
      });
      return hikes.data.listHikes.items;
    } catch (error) {
      console.log('error fetching user hikes: ', error);
    }
  }
  

  return (
    // <Authenticator // Custom login UI
    //   formFields={authenticatorFormFields} // Custom login UI
    //   components={authenticatorComponents} // Custom login UI
    //   loginMechanisms={['username']} // Custom login UI
    // > // Custom login UI

      // {({ signOut}) => // Custom login UI
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppWrapper>

            {/* NAVBAR */}
            <Navbar signOut={signOut} />

            {/* BODY CONTENT */}
            <Routes>
              <Route path='/' element={(userInfo && userHikes) ? <Home /> : <Loading />} /> // Only render Home component if user info and user hikes are available
              <Route path='/discover' element={<Discover />} />
              {/* <Route path='/map' element={<Map />} /> */}
              <Route path='/profile' element={<Profile />} />
            </Routes>


          </AppWrapper>
        </BrowserRouter>
      // } // Custom login UI

    // </Authenticator> // Custom login UI
  );
};

export default withAuthenticator(App);
// export default App; // Custom login UI