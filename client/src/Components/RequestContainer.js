import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";

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
        return < RequestCard re={re} event={re.event} key={re.id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
}) 


    const acceptedRequests = requests.filter((re) => re.chef_id === currentUser.id && re.accepted === true)

    const displayAccepted = acceptedRequests.map((re) => {
        return <RequestCard re={re} key={re.id} event={re.event} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    })

    if (displayAccepted.length === 0 && displayRequests.length > 0) {
        return (      
            <div> 
            <h2>You have been requested for the following events:</h2>
            {displayRequests}
            </div> 
        )
    } else if (displayRequests.length === 0 && displayAccepted.length === 0) {
        return (
        <div>
            <h2>You currently have no upcoming events.</h2>
        </div>
        )
    } else if (displayRequests.length === 0 && displayAccepted.length > 0 ) {
        return (      
            <div> 
            <h2>You currently have no requested events.</h2>
            <h2>Here are your upcoming events:</h2>
            {displayAccepted}
            </div> 
        )
    }
    
    return (
        <div>
            <h2>You have been requested for the following events:</h2>
            {displayRequests}
            <h2>Here are your upcoming events:</h2>
            {displayAccepted}
        </div>
    )
}

export default RequestContainer;