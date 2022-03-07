import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


export default function SearchButton() {



	return (
		<nav>
			<Link to='/SearchGroup'>
				<button>Search for a ride instead</button>
			</Link>
				<p>this is GoToSearch.js component</p>
		</nav>
	)
}
