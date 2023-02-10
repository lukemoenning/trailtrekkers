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

const ProfilePhoto = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
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

const ProfileHorizontalLine = styled.hr`
  width: 90%;
  height: 2px;
  border-radius: ${styles.BORDER_RADIUS};
  background: ${palette.GRAY};
  opacity: 0.3;
  border: none;
  margin: 10px auto 10px auto;
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

  return (
    <BodyNarrow>

      {/* USER INFORMATION DISPLAYED AT THE TOP OF THE SCREEN */}
      <ProfileHeader>

        {/* USER PHOTO */}
        <ProfilePhoto src={require('./assets/images/blank-profile-picture.png')} />

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

      {/* SEPERATE HEADER FROM HIKES */}
      {/* <ProfileHorizontalLine /> */}

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