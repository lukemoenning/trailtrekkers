/**
 * Home component
 */

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BodyWide } from './Body.styles';
import UserContext from '../UserContext';


function Home() {

  /**
   * State management pulled from UserContext
   */
  const { userHikes } = useContext(UserContext);
  console.log('userHikes: ', userHikes)

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
      <h1>{myDistance}</h1>
    </BodyWide>
  );
};

export default Home;