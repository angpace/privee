import { useAlert } from "react-alert";

function RequestCard ({re, event, handleDelete}){
const alert = useAlert()


function deleteRequest(e){
    e.preventDefault()
    fetch(`/requests/${re.id}`, {
            method: "DELETE",
        })
        handleDelete(re.id)
        alert.show("You have rejected this event.")
    }
    
    return (
        <div>
            <h3>You have been requested for the following events:</h3>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <button onClick={() => alert.show("Request Accepted")}>Accept</button>
            <button onClick={deleteRequest}>Reject</button>

        </div>

    )
}

export default RequestCard;