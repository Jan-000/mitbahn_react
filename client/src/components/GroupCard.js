import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ _id, startStation, endStation}) {
	return (
		<div style={{backGroundColor: "blue", margin: "auto"}}>
			<Link to={`/groups/${_id}`} style={{textDecoration: "none"}}>
			<div>
			<p>From: {startStation}</p>
			<p>to: {endStation}</p>
			</div>
			</Link>
		</div>

	)
}
