import { alert } from 'react-alert'

function ChefCard({chef, event}){

    function handleRequest(e){
        e.preventDefault()
        console.log(chef)
        console.log(event)
        fetch('/requests', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
            event_id: event.id,
            client_id: event.user_id,
            chef_id: chef.id
            })
         })
            .then(r => r.json())
            .then(data => console.log(data))
            alert("Your request has been submitted!")
        }
    

    return (
        <div>
            <h3>{chef.name}</h3>
            <p>Specializes in: {chef.cuisine} <br/>
                Expierence recently from: {chef.last_job}
            </p>
           <button onClick={handleRequest}>Send Event Request</button>
        </div>
    )
}

export default ChefCard;