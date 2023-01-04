import { useEffect, useState } from "react";
import MyReviews from "./MyReviews";


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
            <h3>Welcome {currentUser.name}!</h3>
            <img style={{width: "100%"}} src={currentUser.image} alt="profile"/>
            <h3>My contact information</h3>
            <p>{currentUser.email}</p>
            <p>{currentUser.phone}</p>
            </div>

        </div>
        <div>
            <MyReviews userEvents={userEvents} currentUser={currentUser}/>
        </div>
        </div>
    )
}

export default MyProfile;