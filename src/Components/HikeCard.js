/**
 * Card for displaying information about a hike
 */

import React from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';


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
  return (
    <HikeCardWrapper>
      <HikeCardPhoto />
      <h1>{hike.title}</h1>
      <h2>{hike.distance}</h2>
      <p>{hike.description}</p>
    </HikeCardWrapper>
  );
};

export default HikeCard;