/**
 * Form for creating a new hike and posting it in the database
 */


import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input, TextArea, ImagePicker, Button } from 'aws-amplify-react';


const HikeFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 500px;
  background: tan;
`;

function HikeForm() {
  const [hike, setHike] = useState({ title: '', distance: '', description: '', image: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add code to send hike data to backend here
      console.log(hike);
    } catch (err) {
      console.log('Error submitting form', err);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHike({ ...hike, [name]: value });
  }

  const handleImageChange = (data) => {
    setHike({ ...hike, image: data });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="title"
          value={hike.title}
          onChange={handleChange}
          placeholder="Title"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="distance"
          value={hike.distance}
          onChange={handleChange}
          placeholder="Distance"
        />
      </FormGroup>
      <FormGroup>
        <TextArea
          name="description"
          value={hike.description}
          onChange={handleChange}
          placeholder="Description"
        />
      </FormGroup>
      <FormGroup>
        <ImagePicker
          onpick={handleImageChange}
        />
        </FormGroup>
      <Button type="submit">Create Hike</Button>
    </Form>
  );
}

export default HikeForm;