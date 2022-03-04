import React, { useState } from 'react'
import axios from 'axios';

export default function AddProject(props) {

	const [title, setTitle] = useState('');
	const [startStation, setStartStation] = useState('');
	const [endStation, setEndStation] = useState('');
	const [date, setDate] = useState('');
	
	const storedToken = localStorage.getItem('authToken')
	const handleSubmit = e => {
		e.preventDefault()
		// send the data from the state as a post request to 
		// the backend
		axios.post('/api/projects', { title, startStation, endStation, date }, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				console.log('test');
			})
			.catch(err => console.log(err))
		// reset the form
		setTitle('')
		setStartStation('')
		setEndStation('')
		setDate('')
		// refresh the list of the projects in ProjectList
		props.refreshProjects()
	}

	return (
		<>
			<h1>Add your own ride</h1>
			<p>marker to recognize addproject.js component</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label htmlFor="startStation">From: </label>
				<input
					id="startStation"
					type="text"
					value={startStation}
					onChange={e => setStartStation(e.target.value)}
				/>
				
				<label htmlFor="endStation">To: </label>
				<input

					id="endStation"
					type="text"
					value={endStation}
					onChange={e => setEndStation(e.target.value)}
				/>
				<label htmlFor="date">Date: </label>
				<input
					id="date"
					type="text"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<button type="submit">Add this ride</button>
			</form>
			

		</>
	)
}
