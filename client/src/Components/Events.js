import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import EventCard from "./EventCard";
import { useAlert } from "react-alert";
import RequestContainer from "./RequestContainer";

function Events({currentUser}) {
const [events, setEvents] = useState([])
const [newEvent, setNewEvent] = useState({
    title: "",
    amount_of_people: "",
    user_id: "",
    description: "",
})
const alert = useAlert()
// const [requests, setRequests] = useState([])

useEffect(() => { 
    fetch("/events")
    .then(res => res.json())
    .then(events => setEvents(events))
 }, [])


    if (!currentUser) {
  
        return <div>Loading...</div>
    
     }

     if (events.length < 1) {

        return <div>Loading...</div>
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
        description: newEvent.description,
        })
     })
        .then(r => r.json())
        .then(data => setEvents([...events, data]))
        alert.show("New Event Created")
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
                        {renderEvents}
            </div>

            :

                    <RequestContainer currentUser={currentUser}/>
                    
        }
    </div>
    
    )}

export default Events;