import { useEffect, useState } from "react"
import { useAlert } from "react-alert"
import ChefCard from "./ChefCard"
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 15px;
  color: rgb(128, 106, 106);
  border-radius: 2px;
  float: right;
  padding: 5px;
  border-color: white;
  border-width:  thin;
  `

const EventHeader = styled.h2`
padding-top: 5px;
margin: 2px auto;
font-size:30px; color:#222; letter-spacing:1px;
font-family:"Playfair Display", serif; font-weight:400;
color: rgb(128, 106, 106);

`


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


        const cuisine = event.cuisine.toLowerCase().split(" ")

        const chefsForRequests = chefs.filter((chef) => chef.cuisine.toLowerCase().includes(cuisine))
        const displayChefMatch = chefsForRequests.map((chef) => { 
            return <ChefCard chef={chef} key={chef.id} event={event} StyledButton={StyledButton}/> }
        )


    return (
        <div className="event">
            <div className="container">
            <EventHeader>{event.title}</EventHeader>
            <p>Attending: {event.amount_of_people}</p>
            <p>Date: {event.date}</p>
            <p>Cuisine: {event.cuisine}</p>
            <p>Details: {event.description}</p>
            <StyledButton className="con_button" onClick={displayChefs}>{showChefs? "Hide Matches" : "View Matches"}</StyledButton>
            <StyledButton onClick={deleteEvent}>Delete</StyledButton>
            <StyledButton onClick={() => editEvent(event.id)}>Edit</StyledButton>
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
                               placeholder="Cuisine"
                               name="cuisine"
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
                           <StyledButton>Update Event</StyledButton>
                       </form>

            </>
                       :

                       <></>
            }
            {showChefs? 

            <div className="container">
                <h3 style={{ color: "lightcoral", padding: "2px"}}>Here are your Chef Matches:</h3>
            {displayChefMatch}
            </div>
            :
            <></>

            }
             </div>
        </div>
    )
}

export default EventCard