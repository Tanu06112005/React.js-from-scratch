import React from 'react'
import UserContext from './UserContext.js'
import { useState } from 'react'

const UserContectProvider = ({children}) => {
    const [user,setUser]=useState(null)
 
    return (
    <UserContext.Provider  value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContectProvider 