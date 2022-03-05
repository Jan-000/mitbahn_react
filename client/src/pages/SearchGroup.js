
import React from 'react'
import SearchGroup from '../components/SearchGroup ';
import ProductsPage from '../components/ProductsPage'

export default function SrcGroup() {
	return (
		<h1>This is the search group page
		</h1>

		
	)
}




// import React, { useState, useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { AuthContext } from '../context/auth'

// export default function SearchGroup() {

//     const [errorMessage, setErrorMessage] = useState(undefined);

// 	const navigate = useNavigate()

//     const handleSubmit = e => {
//         e.preventDefault()
//         //const requestBody = { startStation, endStation }
//         axios.post('/api/auth/searchgroup'/*, requestBody*/)
//             .then(response => {
//                 // redirect to projects
//                 console.log('search is executed')
                
//                 // redirect to projects
//                 navigate('/searchresults')
//             })
//             .catch(err => {
//                 const errorDescription = err.response.data.message
//                 setErrorMessage(errorDescription)
//             })
//     }

//     }