/**
 * Card for displaying information about a hike
 */

import React, { useContext } from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';
import UserContext from '../UserContext';


const HikeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  background: ${palette.OFF_WHITE};
  border-radius: ${styles.BORDER_RADIUS};
`;

const HikeCardPhoto = styled.div`
  width: 250px;
  height: 250px;
  background: ${palette.GRAY};
`;

function HikeCard({ hike }) {

  /**
   * State management pulled from UserContext
   */
  const {userInfo} = useContext(UserContext);

  return (
    <HikeCardWrapper>

      <HikeCardPhoto />

      {/* IF THE HIKE BELONGS TO THE SIGNED IN USER, DON'T DISPLAY THE USERNAME */}
      {hike.userId!=userInfo.userId && <h1>{hike.username}</h1>} 

      <h1>{hike.title}</h1>
      <h2>{hike.distance}</h2>
      <p>{hike.description}</p>
    </HikeCardWrapper>
  );
};

export default HikeCard;