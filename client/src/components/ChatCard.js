import React from 'react';
import { Link } from 'react-router-dom';



export default function ChatCard({message, author }) {
	return (
		<div>
			{author } wrote:
            <div>
                {message}
            </div>
		</div>

	)
}