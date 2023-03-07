/**
 * Discover component
 */

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BodyNarrow, HikesWrapper } from './Body.styles';
import HikeCard from './HikeCard';
import { listHikes } from '../graphql/queries';
import { API } from 'aws-amplify';
import Loading from './Loading';
import UserContext from '../UserContext';


function Discover() {

  /**
   * State management pulled from UserContext
   */
  const {userInfo} = useContext(UserContext);
  
  /**
   * @type {Array} Array of all hikes
   */
  const [hikes, setHikes] = useState([
    // {
    //   "id": "c9bb9141-94d4-49af-8c18-7b69a73c429e",
    //   "userId": '49309afc-1b0a-4609-9976-b3eebc65b75a',
    //   "createdAt": "2023-02-09T06:14:17.026Z",
    //   "description": "This scenic hike takes you through a redwood forest and ends at a stunning waterfall.",
    //   "distance": "5",
    //   "imagePath": "my/path",
    //   "likes": "0",
    //   "title": "Redwood Falls Trail",
    //   "updatedAt": "2023-02-09T06:14:17.026Z",
    //   "username": "lsmoenning"
    //   },
    //   {
    //   "id": "c9bb9141-94d4-49af-8c18-7b69a85c429e",
    //   "userId": '49309afc-1b0a-4609-9976-b3eebc65b75a',
    //   "createdAt": "2023-02-09T06:14:17.026Z",
    //   "description": "This challenging hike takes you up a mountain peak with panoramic views of the surrounding valley.",
    //   "distance": "8",
    //   "imagePath": "my/path",
    //   "likes": "0",
    //   "title": "Eagle's Nest Peak Trail",
    //   "updatedAt": "2023-02-09T06:14:17.026Z",
    //   "username": "lsmoenning"
    //   },
    //   {
    //   "id": "c9bb2141-94d4-49af-8c18-7b69a85f429e",
    //   "userId": '49309afc-1b0a-2709-9976-b3eebc65b75a',
    //   "createdAt": "2023-02-09T06:14:17.026Z",
    //   "description": "This leisurely hike follows a river and passes by several picturesque swimming holes.",
    //   "distance": "3",
    //   "imagePath": "my/path",
    //   "likes": "0",
    //   "title": "River's Edge Trail",
    //   "updatedAt": "2023-02-09T06:14:17.026Z",
    //   "username": "annabel hendrickson"
    //   }
  ] );


  // COMMENTED OUT FOR DEVELOPMENT PURPOSES
  // ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****
  /**
   * Fetches all hikes from the database
   */
  useEffect(() => {
    async function fetchData() {
      const hikes = await fetchHikes();
      setHikes(hikes);
    }
    fetchData();
  }, []);
  // ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****

  /**
   * @returns {Array} Array of all hikes
   */
  const fetchHikes = async () => {
    try {
      const hikes = await API.graphql({
        query: listHikes,
        variables: {
          filter: { userId: { ne: userInfo.userId } }
        } 
      });
      return hikes.data.listHikes.items;
    } catch (error) {
      console.log('error fetching user hikes: ', error);
    }
  }
  

  return (
    <BodyNarrow>
      <HikesWrapper>
        {hikes ? (hikes?.map((hike) => {
          return <HikeCard key={hike.id+'discover'} hike={hike} />
        })) : <Loading />}
      </HikesWrapper>
    </BodyNarrow>
  );
};

export default Discover;