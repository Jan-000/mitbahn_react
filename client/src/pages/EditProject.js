import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const storedToken = localStorage.getItem('authToken')


export default function EditProject() {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const { id } = useParams()

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { title, description }
		axios.put(`/api/projects/${id}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(() => {
				// this redirects using react router
				navigate(`/projects/${id}`)
			})
			.catch(err => console.log(err))
	}

	const deleteProject = () => {
		axios.delete(`/api/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(() => {
				// redirect to the project list
				navigate('/projects')
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		axios.get(`/api/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				const { title, description } = response.data
				setTitle(title)
				setDescription(description)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<h1>Edit this project</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label htmlFor="title">Description: </label>
				<input
					id="description"
					type="text"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button type="submit">Update this project</button>
			</form>
			<button onClick={deleteProject}>Delete this project</button>
		</>

	)
}
