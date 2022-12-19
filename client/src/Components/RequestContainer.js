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

    const myRequests = requests.filter((re) => re.chef_id === currentUser.id)

    const displayRequests = myRequests.map((re) => {
        return < RequestCard re={re} event={re.event} key={re.id} handleDelete={handleDelete} />
})
    
    return (
        <div>
            {displayRequests}
        </div>
    )
}

export default RequestContainer;