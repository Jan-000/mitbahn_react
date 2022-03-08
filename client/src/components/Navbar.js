import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function Navbar() {

	const { isLoggedIn, user, logoutUser } = useContext(AuthContext)

	return (
		<nav>
			<Link to='/'>
				<button>Home</button>
			</Link>
			{isLoggedIn ?
				(
					<>
						<Link to='/groups'>
							<button>Rides</button>
						</Link>
						<button onClick={logoutUser}>Logout</button>
						<Link to='/userProfile'>
							<button>Profile</button>
						</Link>
					</>
				) : (
					<>
						<Link to='/signup'>
							<button>Signup</button>
						</Link>
						<Link to='/login'>
							<button>Login</button>
						</Link>

					</>
				)}
			<p>this is navbar.js component</p>
		</nav>
	)
}
