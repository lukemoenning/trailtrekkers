/**
 * Discover component
 */

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BodyNarrow } from './Body.styles';
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
  const [hikes, setHikes] = useState([]);

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
      {hikes ? (hikes?.map((hike) => {
        return <HikeCard key={hike.id+'discover'} hike={hike} />
      })) : <Loading />}
    </BodyNarrow>
  );
};

export default Discover;