import React from 'react';
import { Link } from 'react-router-dom';



export default function ChatCard({message, author }) {
	return (
		<div>
			<br></br>
			{author } wrote:
            <div>
                {message}
            </div>
			<br></br>
		</div>

	)
}