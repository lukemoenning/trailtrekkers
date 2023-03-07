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
import UploadProfilePhoto from './UploadProfilePhoto';
import { getPhoto } from '../photos';


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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
  border-radius: 50%;
`;

const ProfilePhoto = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
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
   * State management for the profile photo
   */
  const [profilePhoto, setProfilePhoto] = useState(null);

  /**
   * Retrieves the profile photo from S3 when the component is mounted, if it doesnt exist, set the profile photo to the default
   */
  useEffect(() => {
    async function fetchData() {
      const profilePhoto = await getPhoto('photo'+userInfo.userId);
      if (profilePhoto) {
        setProfilePhoto(profilePhoto);
      } else {
        setProfilePhoto(require('./assets/images/blank-profile-picture.png'));
      }
    }
    fetchData();
  }, []);

  return (
    <BodyNarrow>

      {/* USER INFORMATION DISPLAYED AT THE TOP OF THE SCREEN */}
      <ProfileHeader>

        {/* USER PHOTO */}
        <ProfilePhotoWrapper onMouseEnter={() => setShowUpload(true)} onMouseLeave={() => setShowUpload(false)}>

          {/* IF SHOWUPLOAD IS TRUE, SHOW THE UPLOADPROFILEPHOTO COMPONENT, OTHERWISE SHOW THE PROFILEPHOTO COMPONENT */}
          {showUpload 
            ? <UploadProfilePhoto /> 
            : <ProfilePhoto src={profilePhoto} />
          }
        </ProfilePhotoWrapper>
        {console.log(profilePhoto)}

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