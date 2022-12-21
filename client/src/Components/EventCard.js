import { useEffect, useState } from "react"
import { useAlert } from "react-alert"
import ChefCard from "./ChefCard"


function EventCard({event, handleDelete, handleUpdate}) {
    const [edited, setEdited]= useState(false)
    const [editForm, setEditForm] = useState({})
    const [chefs, setChefs] = useState([])
    const [showChefs, setShowChefs] = useState(false)
    const alert = useAlert()

    useEffect(() => {
        fetch("/chefs")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    function editEvent(e){
        setEdited(!edited) 
    }

    function handleChange(e) {
        const { name, value } = e.target 
        setEditForm({ ...editForm, [name]: value })
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
            alert.show("Your event has been deleted.")
        }

        function displayChefs(e){
            e.preventDefault()
           setShowChefs(!showChefs)
        }

        const desc = event.description.toLowerCase().split(" ")

        const chefsForRequests = chefs.filter((chef) => chef.cuisine.toLowerCase().includes(desc))
        const displayChefMatch = chefsForRequests.map((chef) => { 
            return <ChefCard chef={chef} key={chef.id} event={event}/> }
        )


    return (
        <div>
            <h3>{event.title}</h3>
            <p>Attending: {event.amount_of_people} Date: {event.date}</p>
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
                            <input
                               onChange={handleChange}
                               placeholder="Date"
                               name="date"
                           />
                           <button>Update Event</button>
                       </form>

            </>
                       :

                       <></>
            }
            <button onClick={displayChefs}>View Matches</button>
            {showChefs? 

            <div>
            {displayChefMatch}
            </div>
            :
            <></>

            }
        </div>
    )
}

export default EventCard