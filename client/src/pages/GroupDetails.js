import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


export default function GroupDetails() {

	const { id } = useParams()

	const [group, setGroup] = useState(null);
	const storedToken = localStorage.getItem('authToken')
		
	const joinGroup = () => {
		console.log(storedToken)
		axios.put(`/api/groups/joingroup/${id}`, {}, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				setGroup(response.data)
			})
			.catch(err => console.log(err))
	}
	

	useEffect(() => {
		// request to the backend
		axios.get(`/api/groups/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				setGroup(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			{group === null ? <div>Loading ...</div> :
				<>
					<h1>GroupDetails</h1>
					<p>start station: {group.startStation}</p>
					<p>end station : {group.endStation}</p>
					<p>date : {group.date}</p>
					<p>here is page GroupDetails.js</p>
					<Link to={`/groups/edit/${group._id}`}>
						<button>Edit this group</button>
					</Link>
				</>
			}

			<button onClick={joinGroup}>Join this group</button>
			
			</>
	)
}
