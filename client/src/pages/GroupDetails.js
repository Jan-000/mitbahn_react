import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';




export default function GroupDetails() {

	const { id } = useParams()
	const [group, setGroup] = useState(null);
	const storedToken = localStorage.getItem('authToken')
	const {user} = useContext(AuthContext)
		
	const joinGroup = () => {
		console.log(storedToken)
		axios.put(`/api/groups/joingroup/${id}`, { user }, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {

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

	if (group){console.log("this is group1", group.guests)}
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
			{group && group.numOfGuests < 5 && !group.guests.includes(user._id)  ? (
				<>
				<button onClick={joinGroup}>Join this group</button>
				</>
				) : 
				(<>
				</>)
				}



			</>
	)
}
