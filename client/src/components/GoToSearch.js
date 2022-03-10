import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


export default function SearchButton() {



	return (
		<nav className='go-to-search'>
			<Link to='/SearchGroup'>
				<button id='ride-instead-btn'>Search for a ride instead</button>
			</Link>
			
				{/* <p>this is GoToSearch.js component</p> */}
		</nav>
	)
}
