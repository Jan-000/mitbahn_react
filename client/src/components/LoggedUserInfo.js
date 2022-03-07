import React, { useContext } from 'react'
import { AuthContext } from "../context/auth"


export default function LoggedUserInfo() {

    const {user} = useContext(AuthContext);

	return (<>

	    You are logged as : 
        {user.email}

		</>
	)
}
