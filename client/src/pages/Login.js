// pages/Login.js
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

	const { storeToken, verifyStoredToken } = useContext(AuthContext)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		axios.post('/api/auth/login', requestBody)
			.then(response => {
				// redirect to projects
				console.log('i have a token mothafukkas')
				const token = response.data.authToken
				// Change: this only stores the token
				storeToken(token)
				// Change: we also call verify
				// Change because verifyStoredToken return a promise now we can chain  
				// a .then and wait for the response
				verifyStoredToken()
					.then(() => {
						// redirect to projects
						navigate('/')
					})
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email: </label>
				<input type="text" value={email} onChange={handleEmail} />
				<label htmlFor="password">Password: </label>
				<input type="password" value={password} onChange={handlePassword} />
				<button type="submit">Log In</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}
			{/* JG comment below: */}
			<p>marking of the src/pages/login.js which is a big function</p>
			<h3>Don't have an account?</h3>
			<button><Link to='/signup'>Signup</Link></button>
		</>
	)
}