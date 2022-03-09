import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ _id, startStation, endStation, numOfGuests, prices, guests}) {
	console.log("group card quests", guests)
	return (
		<div>
			<Link to={`/groups/${_id}`} style={{textDecoration: "none"}}>
				<div>
					<p>From: { startStation } <br></br>
					to: { endStation }</p>
					<p>participants : </p>
					{guests.map(guest=>{ 
						return(
							<p>{guest.email}</p>
						)
					 })}
				</div>
				<div>
					<img alt='status' src={`/${numOfGuests}.png`}/>
				</div>
			</Link>
		</div>

	)
}
