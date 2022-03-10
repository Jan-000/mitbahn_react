import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';




export default function GroupDetails() {

	const { id } = useParams();
	let joinButtonValidation = true
	let editButtonValidation = false
	const [group, setGroup] = useState(null);
	const storedToken = localStorage.getItem('authToken')
	const {user} = useContext(AuthContext)
	const joinGroup = () => {
		console.log(storedToken)
		axios.put(`/api/groups/joingroup/${id}`, { user }, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {

				setGroup(response.data)
				//navigate to page to be added here
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

console.log("this is group.guests", group?.guests)

//conditions for join edit buttons display
	if (group){

		for (let i=0; i<group.guests.length; i++){
	
		if (group.guests[i]._id === user._id ){
				joinButtonValidation = false}
			}}

	if (group?.owner === user._id){ joinButtonValidation = false }
	if (group?.guests.length >= 5){ joinButtonValidation = false }

	if (group){
		if (group.owner === user._id){ editButtonValidation = true}
	}
			

	return (
		<>
			{ group === null ? <div>Loading ...</div> :
				<>
					<h1>GroupDetails</h1>
					<p>start station: {group.startStation}</p>
					<p>end station : {group.endStation}</p>
					<p>date : {group.date}</p>
					<p>You're travelling with :</p>
					{group.guests.map(guest=>{ 
						return(
							<p>{guest.email}</p>
						)
					 })}
					<p>here is page GroupDetails.js and {user._id}, {group.owner}</p>
				</>
			}
			{<>
					{ editButtonValidation  &&  <Link to={`/groups/edit/${group._id}`}>
                        <button>Edit this group</button>
                    	</Link>}
			

					{joinButtonValidation && <button onClick={joinGroup}>Join this group</button>}


			</>}
		</>
	)
}
