import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ _id}) {
	return (
		<div>
			<Link to={`/groups/${_id}`}>
				<h3>{_id}</h3>
				
			</Link>
			
			<p>marker to recognize GroupCard.js component</p>
		</div>
	)
}
