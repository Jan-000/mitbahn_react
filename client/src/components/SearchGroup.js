import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import GroupsPage from './GroupsPage';

export default function SearchGroup(props) {
	const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState('');
	const [startStation, setStartStation] = useState('');
	const [endStation, setEndStation] = useState('');
	const [date, setDate] = useState('');
	const [allGroups, setAllGroups] = useState(null);

	const handleSearchGroup = e => {
		e.preventDefault()
		setVisible(true)
		console.log("xD check")
		// res.render(<GroupSearchResults />);

	}
	const storedToken = localStorage.getItem('authToken')
	const handleSubmit = e => {
		e.preventDefault()
		// send the data from the state as a post request to 
		// the backend
		axios.post('/api/groups', { title, startStation, endStation, date }, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				console.log('test');
			})
			.catch(err => console.log(err))
		// reset the form
		setTitle('')
		setStartStation('')
		setEndStation('')
		setDate('')
		// refresh the list of the projects in ProjectList
		props.refreshGroups()
	}

	useEffect(()=>{

		axios.get('/api/groups/groups')
		.then ((groups)=>{
			console.log("this is groups", groups)
			setAllGroups(groups)

		})
	},[])
	console.log("this is allGroups: ", allGroups)

	let dynamicSearch

	if (allGroups){
	dynamicSearch = allGroups.data.filter((group)=>{
	if  (group.title.includes(title))
	return group
})}

	if (allGroups){
		dynamicSearch = allGroups.data.filter((group)=>{
		if  (group.endStation.includes(endStation))
		return group
	})}
	
	if (allGroups){
		dynamicSearch = allGroups.data.filter((group)=>{
		if  (group.startStation.includes(startStation))
		return group
	})}


	if (allGroups){
		dynamicSearch = allGroups.data.filter((group)=>{
		if  (group.date.includes(date))
		return group
	})}



	
if (allGroups === null){
	return <>"Loading.."</>}

	return (
		<>
			
			<h1>Search for a train</h1>
			<form onSubmit= {handleSearchGroup}>
			<label htmlFor="title">Title to keep track JG </label>
				<input
					id="title"
					type="text"
					placeholder="xD"
					value= {title}
					onChange= {e => setTitle(e.target.value)
					}
				/><br></br><br></br>
			<label htmlFor="startStation">From: </label>
				<input
					id="startStation"
					type="text"
					placeholder="searchbar placeholder"
					value={startStation}
					onChange={e => setStartStation(e.target.value)
					}
				/><br></br><br></br>
			<label htmlFor="endStation">To: </label>
				<input
					id="endStation"
					type="text"
					placeholder="searchbar placeholder"
					value={endStation}
					onChange={e => setEndStation(e.target.value)
					}
				/><br></br><br></br>

			<label htmlFor="date">Date: </label>
				<input
					id="date"
					type="text"
					placeholder="date"
					value={date}
					onChange={e => setDate(e.target.value)
					}
				/>
				<button type="submit">Search</button>
				</form>
				{dynamicSearch.map((group)=>{
					return <h1>{group.title}</h1>
				})}
				{
					visible && (<h1>test</h1>)
				}
				{/* <GroupsPage /> */}
		</>
	)
}
