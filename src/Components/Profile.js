/**
 * Profile component
 */

import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { BodyNarrow, HikesWrapper } from './Body.styles';
import { palette, styles } from './assets/constants';
import EditHike from './EditHike';
import UserContext from '../UserContext';
import { listHikes } from '../graphql/queries';
import { API } from 'aws-amplify';
import HikeCard from './HikeCard';
import { Upload } from '@mui/icons-material';
import { Input, IconButton } from '@mui/material';


const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  background: ${palette.WHITE};
  border-radius: ${styles.BORDER_RADIUS};
  width: 100%;
  height: 200px;
  padding: 20px;
`;

const ProfilePhotoWrapper = styled.div`
  position: relative;
  outline: 1px solid red;
`;

const UploadProfilePhoto = styled(Input)`
  height: 130px;
  width: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  opacity: ${({ showUpload }) => (showUpload ? 1 : 0)};
  transition: 200ms ease-in;
  z-index: 1;
`;

const ProfilePhoto = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  opacity: ${({ showUpload }) => (showUpload ? 0.5 : 1)};
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 50%;
`;

const ProfileUsername = styled.p`
  font-size: large;
  font-weight: bold;
  color: ${palette.BLACK};
  margin: 20px 20px 20px 0;
`;

const ProfileStatsWrapper = styled.div`
  display: flex;
`;

const ProfileStat = styled(ProfileUsername)`
  font-size: medium;
  font-weight: normal;
`;

const NewHikeButton = styled.button`
  border: 1px solid ${palette.BROWN};
  background: none;
  color: ${palette.BROWN};
  width: 200px;
  font-size: large;
  font-weight: bold;
  align-self: center;
  margin: 20px 0 20px 0;
  border-radius: ${styles.BORDER_RADIUS};
  transition: 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

function Profile() {

  /**
   * State management pulled from UserContext
   */
  const { userInfo, userHikes, editHikeInfo, changeEditHikeDisplay, } = useContext(UserContext);

  /**
   * State management whether to show the upload photo button
   * when hovering over the profile photo
   * 
   * @type {boolean}
   * @default false
   */
  const [showUpload, setShowUpload] = useState(false);

  /**
   * Function to handle the mouse enter event on the profile photo
   */
  const handleMouseEnter = () => {
    setShowUpload(true);
  };

  /** 
   * Function to handle the mouse leave event on the profile photo
   */
  const handleMouseLeave = () => {
    setShowUpload(false);
  };

  return (
    <BodyNarrow>

      {/* USER INFORMATION DISPLAYED AT THE TOP OF THE SCREEN */}
      <ProfileHeader>

        {/* USER PHOTO */}
        <ProfilePhotoWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProfilePhoto showUpload={showUpload} src={require('./assets/images/blank-profile-picture.png')} />
          <UploadProfilePhoto
            type="file"
            id="upload-file"
            inputProps={{ 'aria-label': 'upload file' }}
            style={{ display: 'none' }}
          />
          <label htmlFor="upload-file">
            <IconButton component="span">
              <Upload />
            </IconButton>
          </label>
          {/* <UploadProfilePhoto showUpload={showUpload} type={'file'} accept={'image/*'}> */}
          {/* </UploadProfilePhoto> */}
        </ProfilePhotoWrapper>

        {/* USER INFORMATION */}
        <ProfileInfo>
          <ProfileUsername>{userInfo.username}</ProfileUsername>

          <ProfileStatsWrapper>
            <ProfileStat>{userHikes?.length}{userHikes?.length===1 ? ' hike' : ' hikes'}</ProfileStat>
            {/* <ProfileStat>0 followers</ProfileStat>
            <ProfileStat>0 following</ProfileStat> */}
          </ProfileStatsWrapper>
        </ProfileInfo>
       
      </ProfileHeader>

      {/* BUTTON TO CREATE A NEW HIKE */}
      <NewHikeButton onClick={() => {changeEditHikeDisplay(true)}}>Share a hike</NewHikeButton>
      {editHikeInfo.display && <EditHike />}

      {/* USER HIKES */}
      <HikesWrapper>

        {/* MAP THROUGH USER HIKES IF THEY EXIST AND CREATE A HIKECARD FOR EACH */}
        {userHikes && userHikes.map(hike => {
          return <HikeCard key={hike.id} hike={hike} />
        })}

      </HikesWrapper>

    </BodyNarrow>
  );
};

export default Profile;