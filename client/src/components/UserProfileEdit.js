import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/auth'

export default function UserProfileEdit() {

    const storedToken = localStorage.getItem('authToken')
    const { user, setUser } = useContext(AuthContext)
    const { logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const { id } = useParams()
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    // useEffect(() => {
    //     axios.post(`/api/user/${user._id}
    // `, { headers: { Authorization: `Bearer ${storedToken}` } })
    //         .then(response => {
    //             Link('/userprofileedit')
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const requestBody = { name, email, password }
        axios.put(`/api/auth/userprofileedit/${id}`, requestBody)
            .then(response => {
                console.log(response, 'response')
                // setUser(response.data.user)
                // logoutUser()
                navigate('/userprofile')

            })
            .catch(err => console.log(err))
    }

    const handleEmail = e => setEmail(e.target.value)
    const handleName = e => setName(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const [errorMessage, setErrorMessage] = useState(undefined);

	const deleteUser = () => {
		axios.delete(`/api/auth/userprofileedit/${user._id}`)
			.then(() => {
				// redirect to the main page
				navigate('/')
			})
			.catch(err => console.log(err))
	}

	// useEffect(() => {
	// 	axios.get('/api/userprofileedit/:id')
	// 		.then(response => {
	// 			const { id, name, email, password } = response.data
	// 			setTitle(title)
	// 			setDescription(description)
	// 		})
	// 		.catch(err => console.log(err))
	// }, [])

    return (
        <>
            <form className='edit-form' onSubmit={handleSubmit}>
                <div><h3>User profile of {user.name}
                    {/* {console.log(id)}
                    {console.log(user._id)} */}
                    </h3></div>
                <label>Name:</label>
                <input type='text' placeholder={name} name='Name' value={name} onChange={handleName} />
                <label>Email:</label>
                <input type='email' placeholder={email} email='email' value={email} onChange={handleEmail} />
                <label>Password:</label>
                <input type='password' placeholder={"********"} name='Password' value={password} onChange={handlePassword} />
               <div className='spacer-editpage'></div>
                <div className="btn-editpage">
                <button type='submit'>Update Profile</button>
                </div>
                {errorMessage && <h5>{errorMessage}</h5>}
            </form>
        <div className="btn-editpage">
            <button onClick={deleteUser} >Delete Profile</button>
            </div>
            {/* Delete 
            </button> */}
        </>
    )
}