/**
 * Component for uploading profile photo
 */ 

import React from 'react';
import styled from 'styled-components';
import { palette, styles } from './assets/constants';
import { Upload } from '@mui/icons-material';
import { Input, IconButton } from '@mui/material';


const UploadProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const UploadProfilePhotoInput = styled(Input)`
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

const UploadProfilePhotoIcon = styled(Upload)`
  ${'' /* height: 130px;
  width: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  opacity: ${({ showUpload }) => (showUpload ? 1 : 0)};
  transition: 200ms ease-in;
  z-index: 1; */}
`;

function UploadProfilePhoto() {
  return (
    <UploadProfilePhotoWrapper>
      {/* <UploadProfilePhoto
        type="file"
        id="upload-file"
        inputProps={{ 'aria-label': 'upload file' }}
        style={{ display: 'none' }}
      />
      <label htmlFor="upload-file">
        <IconButton component="span">
          <UploadProfilePhotoIcon />
        </IconButton>
      </label> */}
      upload
    </UploadProfilePhotoWrapper>
  );
}

export default UploadProfilePhoto;