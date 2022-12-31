import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import styled from "styled-components";

const EventHeader = styled.h2`
padding-top: 5px;
margin: 2px auto;
font-size:30px; color:#222; letter-spacing:1px;
font-family:"Playfair Display", serif; font-weight:400;
color: rgb(128, 106, 106);

`

function RequestContainer ({currentUser}) {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        fetch("/requests")
        .then(res => res.json())
        .then(data => setRequests(data))
    }, [])

    if (!currentUser) {
        <div>Loading...</div>
    } 

    function handleDelete(id) {
        const updatedRequests = requests.filter((re) => re.id !== id);
        setRequests(updatedRequests);
      }

      function handleUpdate(updated){
        const updatedRequestsArray = requests.map((re) => {
            if (re.id === updated.id) {
              return updated;
            } else {
              return re;
            }
          });
          setRequests(updatedRequestsArray);
        }


    const myRequests = requests.filter((re) => re.chef_id === currentUser.id && re.accepted === false)

    // if (myRequests.length !== 0) 
    
    const displayRequests = myRequests.map((re) => {
        return < RequestCard re={re} event={re.event} key={re.id} handleDelete={handleDelete} handleUpdate={handleUpdate} EventHeader={EventHeader}/>
}) 


    const acceptedRequests = requests.filter((re) => re.chef_id === currentUser.id && re.accepted === true)

    const displayAccepted = acceptedRequests.map((re) => {
        return <RequestCard re={re} key={re.id} event={re.event} handleDelete={handleDelete} handleUpdate={handleUpdate} EventHeader={EventHeader} /> 
    })

    if (displayAccepted.length === 0 && displayRequests.length > 0) {
        return (      
            <div className="event"> 
            <EventHeader>You have been requested for the following events:</EventHeader>
            {displayRequests}
            </div> 
        )
    } else if (displayRequests.length === 0 && displayAccepted.length === 0) {
        return (
        <div className="event">
            <EventHeader>You currently have no upcoming events.</EventHeader>
        </div>
        )
    } else if (displayRequests.length === 0 && displayAccepted.length > 0 ) {
        return (      
            <div className="event"> 
                <div className="container">
                     <EventHeader>You currently have no requested events.</EventHeader>
                </div>
                <div className="container">
                <EventHeader>Here are your upcoming events:</EventHeader>
                 {displayAccepted}
                </div>
            </div> 
        )
    }
    
    return (
        <div className="event">
            <div className="container">
            <EventHeader>You have been requested for the following events:</EventHeader>
            {displayRequests}
            </div>
            <div className="container">
            <EventHeader>Here are your upcoming events:</EventHeader>
            {displayAccepted}
            </div>
        </div>
    )
}

export default RequestContainer;