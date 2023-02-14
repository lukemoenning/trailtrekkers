/**
 * Card for displaying information about a hike
 */

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';
import UserContext from '../UserContext';
import { Settings } from '@mui/icons-material';
import { Storage } from 'aws-amplify';


const HikeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 80%;
  min-width: 400px;
  height: 700px;
  background: ${palette.WHITE};
  border-radius: ${styles.BORDER_RADIUS};
`;

const HikeCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 20px;
`;

const HikeCardUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const HikeCardUserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const HikeCardLargeText = styled.p`
  font-size: large;
  font-weight: italic;
  color: ${palette.BLACK};
  margin: 10px;
`;

const HikeCardSmallText = styled(HikeCardLargeText)`
  font-size: small;
  font-weight: normal;
`;

const HikeCardPhoto = styled.img`
  width: 100%;
  padding-bottom: 100%;
`;

const HikeCardTitleAndDistance = styled.div` 
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const EditButton = styled(Settings)`
  align-self: center;
  color: ${palette.BROWN};
  transition: ease-in 200ms;
  margin-left: auto;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    opacity: 0.5;
  }
`;

function HikeCard({ hike }) {

  /**
   * State management pulled from UserContext
   */
  const {userInfo} = useContext(UserContext);

  /**
   * URL for the hike photo
   */
  const [hikePhotoURL, setHikePhotoURL] = useState(null);

  /**
   * URL for the user photo
   */
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  
  /**
   * Retrieves the hike photo from S3
   * @param {*} imagePath image path from S3
   * @returns 
   */
  const getHikePhoto = async (imagePath) => {
    // try {
    //   const hikePhoto = await Storage.get(imagePath);
    //   setHikePhotoURL(URL.createObjectURL(hikePhoto)); 
    // } catch (error) {
    //   console.log('Error retrieving hike photo: ', error);
    // }
  };

  /**
   * Retrieves the hike photo from S3 when the component is mounted
   */
  useEffect(() => {
    async function fetchData() {
      const file = await getHikePhoto(hike.imagePath);
    }
    fetchData();
  }, []);

  return (
    <HikeCardWrapper>

      <HikeCardHeader>
        {/* IF THE HIKE BELONGS TO THE SIGNED IN USER, DISPLAY THE EDIT BUTTON INSTEAD OF USER INFORMATION */}
        {hike.userId!=userInfo.userId   
          ? (<HikeCardUserInfo>
              <HikeCardUserPhoto src={userPhotoURL ? userPhotoURL : require('./assets/images/blank-profile-picture.png')} />
              <HikeCardLargeText>{hike.username}</HikeCardLargeText>
            </HikeCardUserInfo>)
          : <EditButton />
        } 
      </HikeCardHeader>

      <HikeCardPhoto src={hikePhotoURL} />

      <HikeCardTitleAndDistance>
        <HikeCardLargeText>{hike.title}</HikeCardLargeText>
        <HikeCardLargeText>{hike.distance}{hike.distance===1 ? ' mile' : ' miles'}</HikeCardLargeText>
      </HikeCardTitleAndDistance>

      <HikeCardSmallText>{hike.description}</HikeCardSmallText>
    </HikeCardWrapper>
  );
};

export default HikeCard;