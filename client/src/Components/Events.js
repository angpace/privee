import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import EventCard from "./EventCard";
import { useAlert } from "react-alert";
import RequestContainer from "./RequestContainer";
import styled from "styled-components";

const StyledButton = styled.button`
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 10px 10px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  `
  const EventHeader = styled.h2`
  padding-top: 5px;
  margin: 10px auto;
  font-size:40px; color:#222; letter-spacing:1px;
  font-family:"Playfair Display", serif; font-weight:400;
  color: rgb(128, 106, 106);
  
  `

function Events({currentUser}) {
const [events, setEvents] = useState([])
const [clicked, setIsClicked] = useState(false)
const [newEvent, setNewEvent] = useState({
    title: "",
    amount_of_people: "",
    user_id: "",
    cuisine: "",
    description: "",
    date: "",
})
const alert = useAlert()
// const [requests, setRequests] = useState([])

useEffect(() => { 
    fetch("/events")
    .then(res => res.json())
    .then(events => setEvents(events))
 }, [])


    if (!currentUser) {
  
        return <img alt="fryingPan" className="loader" src="https://cdn.dribbble.com/users/2140642/screenshots/4301537/rodrigosloader.gif"></img>
    
     }

     if (events.length < 1) {

        return <img alt="fryingPan" className="loader" src="https://cdn.dribbble.com/users/2140642/screenshots/4301537/rodrigosloader.gif"></img>
     }

    const isAChef = currentUser.is_a_chef 

     function handleDelete(id) {
        const updatedEventsArray = events.filter((event) => event.id !== id);
        setEvents(updatedEventsArray);
      }
    
      function handleUpdate(updated) {
        const updatedEventsArray = events.map((event) => {
          if (event.id === updated.id) {
            return updated;
          } else {
            return event;
          }
        });
        setEvents(updatedEventsArray);
      }

  

function handleChange(e) {
    const { name, value } = e.target 
    setNewEvent({ ...newEvent, [name]: value })
}


 function handleSubmit(e) {
     e.preventDefault()
        fetch('/events', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
        title: newEvent.title,
        amount_of_people: newEvent.amount_of_people,
        user_id: currentUser.id,
        cuisine: newEvent.cuisine,
        description: newEvent.description,
        date: newEvent.date,
        })
     })
        .then(r => {
          if (r.status === 200){
            r.json()
            .then(data => console.log(data))
            alert.show("New Event Created")
        }
        else if (r.status === 422) {
            r.json()
            .then(data => alert.show(data.error))
        }}
         )
    }
    


     const userEvents = events.filter((event) => event.user_id === currentUser.id )
        //     return  <EventCard event={event} key={event.id} handleRenderingOfEditedEvents={handleRenderingOfEditedEvents}/>
        //    })

    const renderEvents = userEvents.map(event => {
        return  <EventCard event={event} setEvents={setEvents} events={events} key={event.id} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
})




return (

  <div> 
        {!isAChef ?

            <div>
               <EventHeader>Your Events</EventHeader>
               <button onClick={() => setIsClicked(!clicked)}>Create a New Event</button>
               {clicked? 

                <div>
                  <h3>Enter event details below.</h3>
                  <form onSubmit={handleSubmit}>
                          <input
                              onChange={handleChange}
                              placeholder="Event Name"
                              name="title"
                          />
                          <input
                              onChange={handleChange}
                              placeholder="Amount of Guests"
                              name="amount_of_people"
                          />
                          <input
                              onChange={handleChange}
                              placeholder="Preferred Cuisine"
                              name="cuisine"
                          />
                          <input
                              onChange={handleChange}
                              placeholder="Tell us about your Event. Please be sure to inclide your cuisine type."
                              name="description"
                          />
                          <input
                              onChange={handleChange}
                              placeholder="Date"
                              name="date"
                          />
                          <StyledButton type="submit">Create Event</StyledButton>
                      </form> 
                 </div>

                      :

                      <></>

               }
              
                        {renderEvents}
            </div>

            :

                    <RequestContainer currentUser={currentUser}/>
                    
        }
    </div>
    
    )}

export default Events;