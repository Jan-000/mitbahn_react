import React, { useState , useContext} from 'react'
import axios from 'axios';
import {AuthContext} from '../context/auth'

export default function AddGroup(props) {


	const [startStation, setStartStation] = useState('');
	const [endStation, setEndStation] = useState('');
	const [date, setDate] = useState('');
	const { user } = useContext(AuthContext)
	
	const storedToken = localStorage.getItem('authToken')
	const handleSubmit = e => {
		e.preventDefault()
		// send the data from the state as a post request to 
		// the backend
		const owner=user._id
		const ownerName = user.name
		axios.post('/api/groups', { startStation, endStation, date, owner, ownerName }, { headers: { Authorization: `Bearer ${storedToken}` } })

			.then(response => {
				console.log(response)
				console.log('test');
			})
			.catch(err => console.log(err))
		// reset the form

		setStartStation('')
		setEndStation('')
		setDate('')
		// refresh the list of the groups in GroupList
		props.refreshGroups()
	}

	return (
		<>
			<h1>Add your own ride</h1>
			<p>marker to recognize addgroup.js component</p>
			<form onSubmit={handleSubmit} className='add-ride'>
				
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
					type="date"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<div>
				<button id='submit-btn' type="submit">Add this ride</button>
				</div>
			</form>
		</>
	)
}
