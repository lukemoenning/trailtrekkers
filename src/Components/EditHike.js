/**
 * Form for creating a new hike and posting it in the database
 */


import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { View, TextAreaField, Button } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { createHike } from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
import { palette, styles } from './assets/constants';
import { Close, Upload } from '@mui/icons-material';
import UserContext from '../UserContext';


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

  /**
   * The information that correlates to the current hike displayed
   */
  const [hike, setHike] = useState({ 
    id: uuidv4(),
    userId: '', 
    title: '', 
    distance: '', 
    description: '', 
    imagePath: 'my/path', 
    likes: '15'
  });

  /**
   * State management pulled from UserContext
   */
  const { userId, editHikeInfo, changeEditHikeDisplay } = useContext(UserContext);

  /**
   * Set a UUID and userId for the hike, then post it to the Hike Table in Dynamo
   * @param {*} event EditForm submit event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = uuidv4(); // Generate a UUID
    setHike({ ...hike, [id]: id}); // Set the UUID and userId of the hike
    setHike({ ...hike, [userId]: userId }); // Set the UUID and userId of the hike
    const postHike = await API.graphql({ // Post the hike in the Hike Table
      query: createHike,
      variables: {
        input: hike
      },
    }).then(
      console.log('Hike successfully placed in database'),
      changeEditHikeDisplay(false) // Set the display of the EditHike form to false
    ).catch(
      error => {console.log('Error: ', error)}
    )
  }

  /**
   * Update the text displayed in the input fields of the form on change
   * @param {*} event change to the input fields
   */
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
      <CloseButton onClick={() => changeEditHikeDisplay(false)} fontSize='large'/>

    </BlurBackground>
  );
}

export default EditHike;