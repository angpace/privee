import { useAlert } from "react-alert";

function RequestCard ({re, event, handleDelete, handleUpdate, EventHeader, accepted}){
const alert = useAlert()

// if (!event) {
//    return "You currently have 0 requests"
// }

function deleteRequest(e){
    e.preventDefault()
    fetch(`/requests/${re.id}`, {
            method: "DELETE",
        })
        handleDelete(re.id)
        alert.show("You have rejected this event.")
    }


    function handleAccept(e) {
        e.preventDefault()
        fetch(`/requests/${re.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                accepted: true
            } )})       
        .then(r => r.json())
        .then(data => handleUpdate(data))}

  console.log(event)

    return (
        <div className="event">
            <div className="container">
                <EventHeader>{event.title}</EventHeader>
                <p>{event.cuisine}</p>
                <p>{event.description}</p>
                <p>{event.date}</p>
             {accepted? 

                <div>
                    <button onClick={deleteRequest}>Cancel</button>
                </div>

            :

                <div>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={deleteRequest}>Reject</button>
                </div>

             }
    
            </div>
        </div>

    )
}

export default RequestCard;