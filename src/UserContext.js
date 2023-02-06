/**
 * Context for managing the state of the current signed in user
 */

import { createContext, useState } from 'react';


const UserContext = createContext();

export function UserProvider({ children }) {

  const [userId, setUserId] = useState('be9d531a-84b8-4611-b356-f22a472b2737'); // SHOULD BE SET TO NULL

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;