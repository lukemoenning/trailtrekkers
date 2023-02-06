/**
 * Form for creating a new hike and posting it in the database
 */


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { View, TextAreaField, Button } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { createHike } from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
import { palette, styles } from './assets/constants';
import { Close, Upload } from '@mui/icons-material';


const BlurBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditHikeWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 75vw;
  max-width:900px;
  height: 75vh;
  max-height: 700px;
  background: ${palette.WHITE};
  border-radius: ${styles.BORDER_RADIUS};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const EditHikePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  border-radius: ${styles.BORDER_RADIUS};
  outline: 1px solid red;
`;

const EditHikeInfoWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 50%;
  height: 100%;
  outline: 1px solid yellow;
`;

const TitleAndDistance = styled.div`
  display: flex;
`;

const FormItem = styled.div`

`;

const FormInput = styled.input`

`;

const SubmitButton = styled.button`
  height: 40px;
  width: 70px;
  position: absolute;
  border-radius: ${styles.BORDER_RADIUS};
  bottom: 3%;
  right: 3%;
  background: none;
  border: none;
  color: ${palette.BROWN};
  transition: 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: scale(1.1, 1.1);
  }
`;

const CloseButton = styled(Close)`
  position: absolute;
  color: ${palette.BROWN};
  top: 5%;
  right: 5%;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: scale(1.1, 1.1);
  }
`;

function EditHike({ handleClose }) {
  const [hike, setHike] = useState({ 
    id: uuidv4(),
    userId: '', 
    title: '', 
    distance: '', 
    description: '', 
    imagePath: 'my/path', 
    likes: '15'
  });

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const id = uuidv4();
    // setHike({ ...hike, id: id, userId: userId });
    // // console.log(userId)
    // console.log(hike)
    // // console.log(hike.userId)
    // const postHike = await API.graphql({
    //   query: createHike,
    //   variables: {
    //     input: hike
    //   },
    // }).then(
    //   console.log('Hike successfully placed in database')
    // ).catch(
    //   error => {console.log('Error: ', error)}
    // )
}


  const handleChange = (event) => {
    const { name, value } = event.target;
    setHike({ ...hike, [name]: value });
  }

  return (
    <BlurBackground>
      <EditHikeWrapper onSubmit={handleSubmit}>

        {/* HIKE PICTURE */}
        <EditHikePhotoWrapper>
          <Upload />
        </EditHikePhotoWrapper>

        {/* INFORMATION ABOUT THE HIKE */}
        <EditHikeInfoWrapper>

          <TitleAndDistance>
            <View label="Title">
              <TextAreaField
                name="title"
                value={hike.title}
                onChange={handleChange}
                placeholder="Title"
              />
            </View>
            <View label="Distance">
              <TextAreaField
                name="distance"
                value={hike.distance}
                onChange={handleChange}
                placeholder="Distance"
              />
            </View>
          </TitleAndDistance>

          <View label="Description">
            <TextAreaField
              name="description"
              value={hike.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </View>
        </EditHikeInfoWrapper>

        {/* SUBMIT BUTTON */}
        <SubmitButton type="submit">Post</SubmitButton>

      </EditHikeWrapper>

      {/* CLOSE BUTTON */}
      <CloseButton fontSize='large'/>

    </BlurBackground>
  );
}

export default EditHike;