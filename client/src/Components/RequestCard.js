import { useAlert } from "react-alert";

function RequestCard ({re, event, handleDelete, handleUpdate, EventHeader}){
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

        if (re.accepted === true ) {
            return (
                <div >
                    <div className="event-content">
                            <EventHeader>{event.title}</EventHeader>
                            <p><strong>Requested Cuisine:</strong> {event.cuisine}<br/>
                            <strong>Event Details:</strong> {event.description}<br/>
                            {event.date}</p>
                                <button onClick={deleteRequest}>Cancel</button>
                     </div>
                  </div>
              )
        }

//   console.log(event)

    return (
        <div >
            <div className="event-content">
                <EventHeader>{event.title}</EventHeader>
                <p><strong>Requested Cuisine:</strong> {event.cuisine}<br/>
                <strong>Event Details:</strong> {event.description}<br/>
                {event.date}</p>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={deleteRequest}>Reject</button>
            </div>
        </div>

    )
}

export default RequestCard;