/**
 * Profile component
 */

import React from 'react';
import styled from 'styled-components';
import { BodyNarrow } from './Body.styles';
import HikeForm from './HikeForm';


const ProfileInfo = styled.div`
  display: flex;
`;

const MyHikesWrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;

function Profile( {userId} ) {

  

  return (
    <BodyNarrow>

      <ProfileInfo>

      </ProfileInfo>

      <MyHikesWrapper>
        <HikeForm userId={userId}/>
      </MyHikesWrapper>

    </BodyNarrow>
  );
};

export default Profile;