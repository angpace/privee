import { useState } from "react"
import Events from "./Events"

function EventCard({event, handleDelete, handleUpdate}) {
    const [edited, setEdited]= useState(false)
    const [editContent, setEditContent] = useState(null)
    const [editForm, setEditForm] = useState({})

    function editEvent(e){
        console.log(e)
        setEdited(!edited) 
    }

    function handleChange(e) {
        const { name, value } = e.target 
        setEditForm({ ...editForm, [name]: value })
        console.log(editForm)
    }


        function handleEdit(e){
            e.preventDefault()
            console.log("please")
            fetch(`/events/${event.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( 
                editForm )})
        .then(r => r.json())
        .then(data => handleUpdate(data)) }

        function deleteEvent(e){
            e.preventDefault()
            fetch(`/events/${event.id}`, {
                method: "DELETE",

            })
            handleDelete(event.id)
        }



    return (
        <div>
            <h3>{event.title}</h3>
            <p>Attending: {event.amount_of_people}</p>
            <p>{event.description}</p>
            <button onClick={() => editEvent(event.id)}>Edit event</button>
            <button onClick={deleteEvent}>Delete Event</button>
            {edited?

            <>
                 <h2>Adjust Event Details</h2>
                 <form onSubmit={handleEdit}>
                           <input
                               onChange={handleChange}
                               placeholder="New Event Name"
                               name="title"
                           />
                           <input
                               onChange={handleChange}
                               placeholder="New Amount of Guests"
                               name="amount_of_people"
                           />
                           <input
                               onChange={handleChange}
                               placeholder="Add more details!"
                               name="description"
                           />
                           <button>Update Event</button>
                       </form>

            </>
                       :

                       <></>
            }
        </div>
    )
}

export default EventCard