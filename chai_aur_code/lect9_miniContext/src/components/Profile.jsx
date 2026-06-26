import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

// yaha pe hamara goal h ki jo data container me add kraya h use access krke use krna(consume)

const Profile = () => {
  const {user}=useContext(UserContext)

  if(user==null) return ( <div>Please Login</div>)

  return (
    <div>welcome {user.username}</div>
  )
}

export default Profile