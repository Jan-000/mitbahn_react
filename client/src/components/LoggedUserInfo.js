import GoToSearch from "../components/GoToSearch"

import React, { useContext } from 'react'
import { AuthContext } from "../context/auth"



export default function Home() {

	const {user}  = useContext(AuthContext)



	return (
	<> {user ?  <p>You are logged as:  {user.email} and this is redeployment nr 4
		</p> : <p>You are not logged in</p>
		}
		</>



	//	<GoToSearch />
)
}