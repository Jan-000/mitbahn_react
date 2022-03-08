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
				console.log("this is response", response)

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

	console.log("this is group1", group)
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
{/* less than five, cant join the group, disable multiple participation */}
			{group && group.numOfGuests < 5 ? (
				<>
				<button onClick={joinGroup}>Join this group</button>
				</>
				) : 
				(<>
				</>)
				}

			{console.log("this is group2", group)}
			</>
	)
}
