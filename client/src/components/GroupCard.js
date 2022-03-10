import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ _id, startStation, endStation, numOfGuests, prices}) {
	console.log("group card quests")
	return (
		<div className='groups-cards'>
			<Link to={`/groups/${_id}`} style={{textDecoration: "none"}}>
				<div>
					<p className='from'>From: { startStation } &nbsp;&nbsp;
					</p>
					<p className='to'>
					To: { endStation }</p>
				</div>
				<div className='group-bar'>
					<img alt='status' src={`/${numOfGuests}.png`}/>
				</div>
			</Link>
		</div>

	)
}
