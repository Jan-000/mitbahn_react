import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GroupCard from '../components/GroupCard';
import AddGroup from '../components/AddGroup';
import GoToSearch from '../components/GoToSearch'



export default function GroupList() {

	const [groups, setGroups] = useState([])
	console.log(groups)

	const storedToken = localStorage.getItem('authToken')

	// get all the groups from the backend / server
	const getAllGroups = () => {
		// request 'api/groups'
		// for every request to a project route we need to also send the token
		axios.get('/api/groups/groups', { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response.data)
				// set the state of groups
				setGroups(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		getAllGroups()
	}, [])

	return (
		<>
			<h1>Available rides</h1>
			<p>dit is page GroupList.js</p>
			{groups.map(group => <GroupCard key={group._id} {...group} />)}
			<AddGroup refreshGroups={getAllGroups} />
			<GoToSearch />
		</>
	)
}
