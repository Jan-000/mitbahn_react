import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function Navbar() {
	const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

	return (
		<nav className="nav">
			<div className="nav-left">
		<img id="brand-logo" src="/mitBahn-logo.png" alt="brand logo"/>
		<img id="brand-text" src="/mitBahnTexttrans.png" alt="brand-text" />
			</div>
			<Link to="/">
				<button className="btn">Home</button>
			</Link>

			{isLoggedIn ? (
				<>
					<Link to="/groups">
						<button>Rides</button>
					</Link>
					<button onClick={logoutUser} to='/'>Logout</button>
					<Link to="/userProfile">
						<button>Profile</button>
					</Link>
				</>
			) : (
				<>
					<Link to="/signup">
						<button>Signup</button>
					</Link>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</>
			)}
		</nav>
	);
}
