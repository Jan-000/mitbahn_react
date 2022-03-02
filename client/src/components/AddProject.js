import React, { useState } from 'react'
import axios from 'axios';

export default function AddProject(props) {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const storedToken = localStorage.getItem('authToken')
	const handleSubmit = e => {
		e.preventDefault()
		// send the data from the state as a post request to 
		// the backend
		axios.post('/api/projects', { title, description }, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				console.log('test');
			})
			.catch(err => console.log(err))
		// reset the form
		setTitle('')
		setDescription('')
		// refresh the list of the projects in ProjectList
		props.refreshProjects()
	}

	return (
		<>
			<h1>AddProject</h1>
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
				<button type="submit">Add this project</button>
			</form>
		</>
	)
}
