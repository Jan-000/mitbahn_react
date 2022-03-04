import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


export default function ProjectDetails() {

	const { id } = useParams()

	const [project, setProject] = useState(null);
	const storedToken = localStorage.getItem('authToken')

	useEffect(() => {
		// request to the backend
		axios.get(`/api/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				setProject(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			{project === null ? <div>Loading ...</div> :
				<>
					<h1>ProjectDetails</h1>
					<h3>title : {project.title}</h3>
					<p>start station: {project.startStation}</p>
					<p>end station : {project.endStation}</p>
					<p>date : {project.date}</p>
					<p>here is page ProjectDetails.js</p>
					<Link to={`/projects/edit/${project._id}`}>
						<button>Edit this project</button>
					</Link>
				</>
			}</>
	)
}
