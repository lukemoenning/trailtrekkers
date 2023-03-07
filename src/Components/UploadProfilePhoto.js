/**
 * Component for uploading profile photo
 */ 

import React, { useContext } from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';
import { Upload } from '@mui/icons-material';
import { Input, IconButton } from '@mui/material';
import { uploadPhoto } from '../photos';
import UserContext from '../UserContext';


const UploadProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadIcon = styled(Upload)`
  ${'' /* background-color: ${palette.primary}; */}
`;


function UploadProfilePhoto() {

  /**
   * State management pulled from UserContext
   */
  const {userInfo} = useContext(UserContext);

  /**
   * Function to handle uploading a photo, calls uploadPhoto function from photos.js
   */
  const handleUpload = (event) => {
    const file = event.target.files[0];
    uploadPhoto(file, userInfo.userId);
  };

  return (
    <UploadProfilePhotoWrapper>
      <UploadInput type="file" accept="image/*" id="profile-photo-upload" onChange={(event) => handleUpload(event)}/>
      <IconButton component="label" htmlFor="profile-photo-upload">
        <UploadIcon fontSize='large'/>
      </IconButton>
    </UploadProfilePhotoWrapper>
  );
}

export default UploadProfilePhoto;