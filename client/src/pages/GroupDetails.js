import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import ChatCard from '../components/ChatCard';




export default function GroupDetails() {

	const { id } = useParams();

	const [group, setGroup] = useState(null);
	const [message, setMessage] = useState('');
	const [chat, setChat] = useState (null)

	const storedToken = localStorage.getItem('authToken')
	const {user} = useContext(AuthContext)
	const navigate =useNavigate()

	const author= user.name
	
	const joinGroup = () => {
		console.log(storedToken)
		axios.put(`/api/groups/joingroup/${id}`, { user }, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {

				setGroup(response.data)
			})
			.catch(err => console.log(err))

	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log("submit button received")
		console.log("group chat flag", group.chat)
		if (group.chat===false){
			axios.post('/api/groups/initialiseMessage', {  id}, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log('chat initialised')
			})
			.catch(err => console.log(err))
			
		} 
		
		axios.post('/api/groups/addMessage', { message,  author, id}, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				setMessage('')
				console.log('one before navigate', response)
				setChat(response.data)
				//navigate(`/groups/${id}`)
				//location.reload();
			})
			.catch(err => console.log(err))
		
			

	}

	const handleMessage = e => {
		setMessage(e.target.value)
		//console.log('log of group', group)
	}
	
	const getChat = () => {
		axios.get(`/api/groups/getMessages/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response =>{
				setChat(response.data)
		})
		.catch(err => console.log(err))
		//console.log('this is the chat from response', chat)
	}


	useEffect(() => {
		// request to the backend
		axios.get(`/api/groups/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				//console.log(response)
				setGroup(response.data)
			})
			.catch(err => console.log(err))
		
		getChat()
	}, [])

	//if (group){console.log("this is group1", group.guests)}
	return (
		<>
			{group === null ? <div>Loading ...</div> :
				<>
					{console.log(group)}
					<h1>GroupDetails</h1>
					<p>start station: {group.startStation}</p>
					<p>end station : {group.endStation}</p>
					<p>date : {group.date}</p>
					<p>You're travelling with :</p>
					{group.guests.map(guest=>{ 
						return(
							<p>{guest.name}</p>
						)
					 })}
					<p>here is page GroupDetails.js</p>
					<Link to={`/groups/edit/${group._id}`}>
						<button>Edit this group</button>
					</Link>
				</>
			}
			{group && group.numOfGuests < 5 && !group.guests.includes(user._id) && !group.owner.includes(user._id) ? (
				<>
				<button onClick={joinGroup}>Join this group</button>
				</>
				) : 
				(<>
				</>)
			}
			<h3>Message Board</h3>
			
		    
			{chat === null ? <div>Loading ...</div> :
				<>
					{chat.messages.map(chatMessage => <ChatCard key={chatMessage._id} {...chatMessage} />) }
 			</>
			}
			
			<form onSubmit={handleSubmit}>
				<label htmlFor="message">Your message</label>
				<br></br>
				<textarea value={message} onChange={handleMessage} id="message" name="message" rows="4" cols="50" 
				placeholder="use this field for additional information: meeting point, schedule, questions">
  				</textarea>
				<br></br>
				<button type="submit">Submit</button>
			</form>


			</>
	)
}
