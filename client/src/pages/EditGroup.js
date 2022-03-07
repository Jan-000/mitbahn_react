import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const storedToken = localStorage.getItem('authToken')


export default function EditProject() {

	const [title, setTitle] = useState('');
	const [startStation, setStartStation] = useState('');
	const [endStation, setEndStation] = useState('');
	const [date, setDate] = useState('');

	const { id } = useParams()

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { title, startStation, endStation, date }
		axios.put(`/api/groups/${id}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(() => {
				// this redirects using react router
				navigate(`/groups/${id}`)
			})
			.catch(err => console.log(err))
	}

	const deleteGroup = () => {
		axios.delete(`/api/groups/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(() => {
				// redirect to the project list
				navigate('/groups')
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		axios.get(`/api/groups/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				const { title, startStation, endStation, date } = response.data
				setTitle(title)
				setStartStation(startStation)
				setEndStation(endStation)
				setDate(date)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<h1>Edit this project</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title to keep track JG: </label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="xD"
				/>
				<label htmlFor="title">From: </label>
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
				<label htmlFor="date">To: </label>
				<input
					id="date"
					type="text"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<button type="submit">Update this project</button>
			</form>
			<button onClick={deleteGroup}>Delete this project</button>
			<p>this is editproject.js page</p>
		</>

	)
}
