import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ _id, startStation, endStation, numOfGuests, prices}) {
	console.log("group card quests")
	return (
		<div>
			<Link to={`/groups/${_id}`} style={{textDecoration: "none"}}>
				<div>
					<p>From: { startStation } &nbsp;&nbsp;
					to: { endStation }</p>
				</div>
				<div>
					<img alt='status' src={`/${numOfGuests}.png`}/>
				</div>
			</Link>
		</div>

	)
}
