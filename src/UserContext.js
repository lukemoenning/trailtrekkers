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
    userId: null,
    username: null,
  }); // SHOULD BE SET TO NULL


  /**
   * State for the EditHike form: whether it should be displayed and which hike to display
   */
  const [editHikeInfo, setEditHikeInfo] = useState({
    display: false,
    hike: null,
  });


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
      editHikeInfo,
      changeEditHike,
      changeEditHikeDisplay, 
      }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;