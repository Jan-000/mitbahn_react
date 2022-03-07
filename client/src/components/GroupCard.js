import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ title, _id}) {
	return (
		<div>
			<Link to={`/groups/${_id}`}>
				<h3>{title}</h3>
				
			</Link>
			{/* JG comment below */}
				{/* <h3>{startStation}</h3>
				<h3>{endStation}</h3>
				<h3>{date}</h3> */}

			<p>marker to recognize GroupCard.js component</p>
		</div>
	)
}
