/**
 * Profile component
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BodyNarrow } from './Body.styles';
import { palette, styles } from './assets/constants';
import HikeForm from './HikeForm';
import { BlankProfile } from './assets/images/blank-profile-picture.png';


const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  color: ${palette.BLACK};
  margin: 20px 20px 20px 0;
`;

const ProfileStatsWrapper = styled.div`
  display: flex;
`;

const ProfileStat = styled(ProfileUsername)`
  font-size: medium;
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

const MyHikesWrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;

function Profile( {userId} ) {

  /**
   * Retrieve the user information on reload
   */
  useEffect(() => {
    
  },[])

  return (
    <BodyNarrow>

      {/* USER INFORMATION DISPLAYED AT THE TOP OF THE SCREEN */}
      <ProfileHeader>

        {/* USER PHOTO */}
        <ProfilePhoto src={require('./assets/images/blank-profile-picture.png')} />

        {/* USER INFORMATION */}
        <ProfileInfo>
          <ProfileUsername>username</ProfileUsername>

          <ProfileStatsWrapper>
            <ProfileStat>0 hikes</ProfileStat>
            <ProfileStat>0 followers</ProfileStat>
            <ProfileStat>0 following</ProfileStat>
          </ProfileStatsWrapper>
        </ProfileInfo>
       
      </ProfileHeader>

      {/* SEPERATE HEADER FROM HIKES */}
      <ProfileHorizontalLine />

      {/* USER HIKES */}
      <MyHikesWrapper>
        {/* <HikeForm userId={userId}/> */}
      </MyHikesWrapper>

    </BodyNarrow>
  );
};

export default Profile;