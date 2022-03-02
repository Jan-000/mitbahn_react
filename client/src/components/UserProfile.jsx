import React from 'react'
import { AuthProviderWrapper } from '../context/auth'

export default function UserProfile() {
  return (
    <div>UserProfile
   {/* {console.log(user)} */}
        <div>{user.name} </div>
    {/* {.user} */}

    <button id='profile-edit' >EditProfile</button>
    <button id='profile.delete' >Delete Profile</button>
    </div>
  )
}
