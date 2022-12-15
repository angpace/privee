import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import EventCard from "./EventCard";

function Events({currentUser}) {
const [user, setUser] = useState()
const [events, setEvents] = useState([])
const [newEvent, setNewEvent] = useState({
    title: "",
    amount_of_people: "",
    user_id: "",
    description: "",
})

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
        description: newEvent.description,
        })
     })
        .then(r => r.json())
        .then(data => setEvents([...events, data])) }
    

    useEffect(() => {
    fetch(`/events`)
    .then (res => res.json())
    .then(data => setEvents(data))
    }
    ,[])

     
    // fetch(`/events`)
    // .then (res => res.json())
    // .then(data => setEvents(data))

//    const userEvents = events.filter((event) => {
//     if (event.user_id === currentUser.id)
//     return  <EventCard e={event} key={event.id} />
//    }

        const allEvents = events.map((e) => { 
        return <EventCard e={e} key={e.id} currentUser={currentUser}/>})





    



    



return (

  <div>
    <div>{allEvents}</div>
    <h2>Post a new event!</h2>
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
                  placeholder="Tell us about your Event. Please be sure to inclide your cuisine type."
                  name="description"
              />
              <button type="submit">Create Event</button>
          </form>
</div>
)}

export default Events;