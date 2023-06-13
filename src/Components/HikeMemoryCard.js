import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';
import { getPhoto } from '../photos';

const HikeMemoryCardWrapper = styled.div`

`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: ${styles.BORDER_RADIUS};
`;

function HikeMemoryCard({ hike }) {

  /**
   * URL for the hike photo
   */
  const [hikePhoto, setHikePhoto] = useState(null);

  useEffect(() => {
    async function getHikePhoto() {
      const photo = await getPhoto(hike.imagePath);
      setHikePhoto(photo);
    }
    getHikePhoto();
  }, [hike.photo]);

  return (
    <HikeMemoryCardWrapper>
      <Photo src={hikePhoto} />
    </HikeMemoryCardWrapper>
  )
}

export default HikeMemoryCard