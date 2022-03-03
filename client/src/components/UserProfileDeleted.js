import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from '../context/auth'

export default function UserProfileDeleted() {

  const storedToken = localStorage.getItem('authToken')
  // const [user, setUser] = useState(null) 
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext)
  // const id = user.id
	

  useEffect(() => {
    axios.post(`/api/user/${user._id}
    `, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				
			})
			.catch(err => console.log(err))
  }, [])
}