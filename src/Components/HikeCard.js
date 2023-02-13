/**
 * Card for displaying information about a hike
 */

import React, { useContext } from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';
import UserContext from '../UserContext';
import { Settings } from '@mui/icons-material';


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

const HikeCardUserPhoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${palette.GRAY};
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

/**
 * Retrieves the hike photo from S3
 * @param {*} imagePath image path from S3
 * @returns 
 */
const getHikePhoto = async (imagePath) => {
  const hikePhoto = await Storage.get(imagePath);
  return hikePhoto;
};

function HikeCard({ hike }) {

  /**
   * State management pulled from UserContext
   */
  const {userInfo} = useContext(UserContext);

  return (
    <HikeCardWrapper>

      <HikeCardHeader>
        {/* IF THE HIKE BELONGS TO THE SIGNED IN USER, DISPLAY THE EDIT BUTTON INSTEAD OF USER INFORMATION */}
        {hike.userId!=userInfo.userId   
          ? (<HikeCardUserInfo>
              <HikeCardUserPhoto /> 
              <HikeCardLargeText>{hike.username}</HikeCardLargeText>
            </HikeCardUserInfo>)
          : <EditButton />
        } 
      </HikeCardHeader>

      <HikeCardPhoto src={getHikePhoto(hike.imagePath)} />

      <HikeCardTitleAndDistance>
        <HikeCardLargeText>{hike.title}</HikeCardLargeText>
        <HikeCardLargeText>{hike.distance}{hike.distance===1 ? ' mile' : ' miles'}</HikeCardLargeText>
      </HikeCardTitleAndDistance>

      <HikeCardSmallText>{hike.description}</HikeCardSmallText>
    </HikeCardWrapper>
  );
};

export default HikeCard;