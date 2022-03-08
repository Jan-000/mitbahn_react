import GoToSearch from "../components/GoToSearch"

import React, { useContext } from 'react'
import { AuthContext } from "../context/auth"


export default function Home() {
	const {user} = useContext(AuthContext);
	return (<>
		<p>You are logged as : 
        
		</p>
		<GoToSearch />
		{/* {user.email} */}
		
		</>
	)
}

