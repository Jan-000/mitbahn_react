import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth'

export default function UserProfileEdit() {

    const storedToken = localStorage.getItem('authToken')
    const { user, setUser } = useContext(AuthContext)
 // const deleteUser = userId => {

    //     const filteredUser = user.filter(user => {
    //       return user._id !== userId;
    //  });
    //  setUser(filteredUser);

    // };

    useEffect(() => {
        axios.post(`/api/user/${user._id}
    `, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(response => {
                Link('/userprofileedit')
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div>User Profile of {user.name}
                {console.log(user)}
            </div>

            <div><label>Name:</label>
                <input type='text' placeholder='Name' name='Name' value=''
            ></input> </div>
            <div><label>Email:</label>
                <input type='email' placeholder='Email' email='email' ></input> </div>
            <div> <label>Password:</label>
                <input type='password' placeholder='password' name='Password'></input> </div>
            <br></br>
            <button type='submit'>Update Profile</button>

            <div id='delete-button'>
                <button id='profile.delete' >Delete Profile</button>
            </div>
            {/* <button onClick={() => deleteUser(user._id)} className="btn-delete"> */}

              {/* Delete 

            </button> */}
        </>

    )
}
