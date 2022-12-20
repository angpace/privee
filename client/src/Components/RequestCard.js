import { useAlert } from "react-alert";

function RequestCard ({re, event, handleDelete, handleUpdate}){
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
        <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={deleteRequest}>Reject</button>

        </div>

    )
}

export default RequestCard;