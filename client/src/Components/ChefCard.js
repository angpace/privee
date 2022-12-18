import { useAlert } from 'react-alert'

function ChefCard({chef, event}){

  const alert = useAlert()

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
            .then(r => {
                if(r.ok) {
                    console.log(r)
                }else {
                    alert.show("You have already sent a request for this event.")
                }})
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