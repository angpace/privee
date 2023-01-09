import { useEffect, useState } from "react";
import MyReviews from "./MyReviews";
import styled from "styled-components";

const EventHeader = styled.h2`
padding-top: 5px;
margin: 2px auto;
font-size:30px; color:#222; letter-spacing:1px;
font-family:"Playfair Display", serif; font-weight:400;
color: rgb(128, 106, 106);

`

function MyProfile({currentUser}) {
    const [events, setEvents] = useState([])

    useEffect(() => { 
        fetch("/events")
        .then(res => res.json())
        .then(events => setEvents(events))
     }, [])

    if (!currentUser) {
        return <img alt="fryingPan" className="loader" src="https://cdn.dribbble.com/users/2140642/screenshots/4301537/rodrigosloader.gif"></img>
    }

    const userEvents = events.filter((event) => event.user_id === currentUser.id && event.requests.length !== 0)



    return (
        <div className="profile">
        <div className="card">
            <div className="cardContainer">
            <EventHeader>Welcome, {currentUser.name}!</EventHeader>
            <img style={{width: "100%"}} src={currentUser.image} alt="profile"/>
            <h3>My contact information</h3>
            <p><strong>Email</strong><br/>{currentUser.email}</p>
            <p><strong>Phone</strong><br/>{currentUser.phone}</p>
            </div>

        </div>
        <div>
            <MyReviews userEvents={userEvents} currentUser={currentUser}/>
        </div>
        </div>
    )
}

export default MyProfile;