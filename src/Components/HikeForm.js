/**
 * Form for creating a new hike and posting it in the database
 */


import React, { useState } from 'react';
import styled from 'styled-components';
import { View, TextAreaField, Button } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { createHike } from '../graphql/mutations';
import { getUser } from '../graphql/queries';
import { v4 as uuidv4 } from 'uuid';


const HikeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 400px;
  padding: 10px;
  background: tan;
`;

const FormItem = styled.div`

`;

const FormInput = styled.input`

`;

const SubmitButton = styled.button`

`;

function HikeForm({ userId }) {
  const [hike, setHike] = useState({ id: '', user: '5', title: '', distance: '', description: '', imagePath: '', likes: 0});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a unique id for the hike
    setHike({ ...hike, id: uuidv4()})

    // Set the user the hike is associated with
    setHike({ ...hike, user: await API.graphql({
      query: getUser,
      variables: {
        input: userId
      },
    })})

    const postHike = await API.graphql({
      query: createHike,
      variables: {
        input: hike
      },
    }).then(
      console.log('Hike successfully placed in database')
    ).catch(
      error => {console.log('Error: ', error)}
    )

    // try {
    //   // Add code to send hike data to backend here
    //   console.log(hike);
    // } catch (err) {
    //   console.log('Error submitting form', err);
    // }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHike({ ...hike, [name]: value });
  }

  return (
      <HikeFormWrapper onSubmit={handleSubmit}>
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
          <View label="Description">
            <TextAreaField
              name="description"
              value={hike.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </View>
        <Button type="submit">Create Hike</Button>
      </HikeFormWrapper>
  );
}

export default HikeForm;