/**
 * Form for creating a new hike and posting it in the database
 */


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { View, TextAreaField, Button } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { createHike } from '../graphql/mutations';
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
  const [hike, setHike] = useState({ 
    id: uuidv4(),
    userId: '', 
    title: '', 
    distance: '', 
    description: '', 
    imagePath: 'my/path', 
    likes: '15'
  });

  useEffect(() => {
    // console.log(hike)
  }, [hike.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    setHike({ ...hike, id: id, userId: userId });
    // console.log(userId)
    console.log(hike)
    // console.log(hike.userId)
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