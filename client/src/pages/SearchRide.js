
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

export default function SearchRide() {

    const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        //const requestBody = { startStation, endStation }
        axios.post('/api/auth/searchride'/*, requestBody*/)
            .then(response => {
                // redirect to projects
                console.log('search is executed')
                
                // redirect to projects
                navigate('/searchresults')
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    }