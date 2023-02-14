/**
 * Home component
 */

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BodyWide } from './Body.styles';
import UserContext from '../UserContext';
import { palette, styles } from './assets/constants';
import Loading from './Loading';


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  outline: 1px solid red;
`;

const HomeHeader = styled.p`  
  font-size: 1.5rem;
  font-weight: italic;
  align-self: flex-start;
  color: ${palette.BROWN};
  margin: 30px;
`;

const HomeMilage = styled.p`
  font-size: 1.5rem;
  font-size: 1.5rem;
  font-weight: italic;
  color: ${palette.BROWN};
  margin: 30px;
`;

const HomeHikePhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  outline: 1px solid red;
  justify-items: center;
  align-items: center;
`;

const HomeHikePhoto = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${palette.BROWN};
  border-radius: ${styles.BORDER_RADIUS};
`;

/**
 * Get the greeting for the home page, will differ depening on the time of day.
 * 
 * @returns String with the greeting that corresponds to the time of day
 */
function getGreeting() {
  
  const todaysDate = new Date();
  const currentHour = todaysDate.getHours();

  switch (true) {

    case currentHour<12:
      return "Good morning";

    case currentHour<18:
      return "Good afternoon";

    case currentHour<24:
      return "Good evening";

    default:
      return "Hello";
  }
}

function Home() {

  /**
   * State management pulled from UserContext
   */
  const { userInfo, userHikes } = useContext(UserContext);

  /**
   * My Total Miles Hiked
   */
  const [myDistance, setMyDistance] = useState(0);

  /**
   * Sum all the miles from the user's hikes
   */
  useEffect(() => {
    let totalDistance = 0;
    userHikes.map(hike => {
      totalDistance += parseFloat(hike.distance);
    });
    setMyDistance(totalDistance.toFixed(2));
  }, []);

  return (
    <BodyWide>

      <HomeWrapper>


        {/* GREETING */}
        <HomeHeader>
          {getGreeting()} {userInfo ? userInfo.username : <Loading />}
        </HomeHeader>

        {/* TOTAL MILAGE */}
        <HomeMilage>
          You've hiked {myDistance} miles!
        </HomeMilage>


        <p>Take a trip through your hike memories.</p>
        {/* HIKE PHOTOS */}
        <HomeHikePhotosWrapper>
          {userHikes ? (userHikes.map((hike) => {
            return <HomeHikePhoto key={hike.id+'home'} />
          })) : <Loading />}
        </HomeHikePhotosWrapper>

      </HomeWrapper>
      
    </BodyWide>
  );
};

export default Home;