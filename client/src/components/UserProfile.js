import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from '../context/auth'

export default function UserProfile() {

  const storedToken = localStorage.getItem('authToken')
  const [user, setUser] = useState(null) 
  const { isLoggedIn, logoutUser } = useContext(AuthContext)
  // const id = user.id
	

  useEffect(() => {
    axios.get(`/api/user/${user._id}`
    , { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				// setUser(response.data)
			})
			.catch(err => console.log(err))
  }, [])

  return (
    <div>User Profile of {user.name}
   {console.log(user)}
      <div>
      <h3>Name: {user.name}</h3>
      <h3>Mail: {user.email}</h3>
      <h3>Password: ********</h3>
</div>
    	<Link to={`../userprofileedit/${user._id}`}>
    <button id='profile-edit' >EditProfile</button>
    </Link>
    </div>
  )
}



// UserProfile.js:24 
// {_id: '621f4e88287d7770d59b7415', email: 'vr@mail.de', name: '123456', iat: 1646308510, exp: 1646351710}
// email: "vr@mail.de"
// exp: 1646351710
// iat: 1646308510
// name: "123456"
// _id: "621f4e88287d7770d59b7415"
// [[Prototype]]: Object
