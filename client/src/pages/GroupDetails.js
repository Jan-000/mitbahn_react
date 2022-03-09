import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';




export default function GroupDetails() {

	const { id } = useParams();
	let joinButtonValidation = true
	const [group, setGroup] = useState(null);
	const [editButtonValidation, setEditButtonValidation] = useState(false)
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
// if(1==1){

// 	return joinButtonValidation = true}

// 	group.guests.map(
// 		guest => {
// 			for (let i=0; i<group.guests.map.length; i++){
// 				if (1==1){
// 							return guest}}})

			
		


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
					{ group?.owner === user._id  &&  <Link to={`/groups/edit/${group._id}`}>
                        <button>Edit this group</button>
                    	</Link>}
			

					{joinButtonValidation && <button onClick={joinGroup}>Join this group</button>}


			</>}
		</>
	)
}
