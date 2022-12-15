import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import EventCard from "./EventCard";

function Events({currentUser}) {
const [events, setEvents] = useState([])

useEffect(() => {
    fetch(`/events`)
    .then (res => res.json())
    .then(data => setEvents(data))
    }
    ,[])
     
    console.log(currentUser.id)

    const userEvents = events.filter((e) => e.user_id === currentUser.id)

    console.log(userEvents)



return (
  <div></div>
)
}

export default Events;