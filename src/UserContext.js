/**
 * Context for managing the state of the current signed in user
 */

import { createContext, useState } from 'react';


const UserContext = createContext();

export function UserProvider({ children }) {

  /**
   * User ID and Username of the current signed in user
   */
  const [userInfo, setUserInfo] = useState({
    // userId: '49309afc-1b0a-4609-9966-b3eebc65b75a', // SHOULD BE SET TO NULL
    // username: 'lsm', // SHOULD BE SET TO NULL
    userId: null,
    username: null,
  }); 


  /**
   * State for the EditHike form: whether it should be displayed and which hike to display
   */
  const [editHikeInfo, setEditHikeInfo] = useState({
    display: false,
    hike: null,
  });

  /**
   * The hikes associated with the current signed in user
   */
  const [userHikes, setUserHikes] = useState(
    [
      // {
      //   "id": "f3f20f28-119a-4944-a785-08d0ac5fdcbe",
      //   "userId": '49309afc-1b0a-4609-9966-b3eebc65b75a',
      //   "createdAt": "2023-02-09T06:14:17.026Z",
      //   "description": "Discover a hidden waterfall on this 2 mile hike through dense forest.",
      //   "distance": 2,
      //   "imagePath": "my/path",
      //   "likes": 0,
      //   "title": "Hidden Falls Trail",
      //   "updatedAt": "2023-02-09T06:14:17.026Z",
      //   "username": "lsm"
      //   },
      //   {
      //   "id": "f3f25f28-119a-4944-a785-08d0ac5fdcbe",
      //   "userId": '49309afc-1b0a-4609-9966-b3eebc65b75a',
      //   "createdAt": "2023-02-09T06:14:17.026Z",
      //   "description": "Take in breathtaking mountain views on this challenging 4 mile hike with steep inclines.",
      //   "distance": 4,
      //   "imagePath": "my/path",
      //   "likes": 0,
      //   "title": "Mountain Vista Trail",
      //   "updatedAt": "2023-02-09T06:14:17.026Z",
      //   "username": "lsm"
      //   }        
      //   ,
      //   {
      //   "id": "f3f2fg28-119a-4944-a785-08d0ac5fdcbe",
      //   "userId": '49309afc-1b0a-4609-9966-b3eebc65b75a',
      //   "createdAt": "2023-02-09T06:14:17.026Z",
      //   "description": "Take in breathtaking mountain views on this challenging 4 mile hike with steep inclines.",
      //   "distance": 4,
      //   "imagePath": "my/path",
      //   "likes": 0,
      //   "title": "Mountain Vista Trail",
      //   "updatedAt": "2023-02-09T06:14:17.026Z",
      //   "username": "lsm"
      //   }        
      //   ,
      //   {
      //   "id": "f3f25368-119a-4944-a785-08d0ac5fdcbe",
      //   "userId": '49309afc-1b0a-4609-9966-b3eebc65b75a',
      //   "createdAt": "2023-02-09T06:14:17.026Z",
      //   "description": "Take in breathtaking mountain views on this challenging 4 mile hike with steep inclines.",
      //   "distance": 4,
      //   "imagePath": "my/path",
      //   "likes": 0,
      //   "title": "Mountain Vista Trail",
      //   "updatedAt": "2023-02-09T06:14:17.026Z",
      //   "username": "lsm"
      //   }        
    ] 
  );


  /**
   * Changes the hike displayed in the EditHike component
   * @param {*} newHike the new hike to display 
   */
  const changeEditHike = (newHike) => {
    setEditHikeInfo({...editHikeInfo, hike: newHike}); 
  };

  /**
   * Change the state of the EditHike form
   * @param {boolean} newDisplay true to display, false to not display
   */
  const changeEditHikeDisplay = (newDisplay) => {
    setEditHikeInfo({...editHikeInfo, display: newDisplay})
  };

  return (
    <UserContext.Provider value={{ 
      userInfo,  
      setUserInfo,
      userHikes,
      setUserHikes,
      editHikeInfo,
      changeEditHike,
      changeEditHikeDisplay, 
      }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;