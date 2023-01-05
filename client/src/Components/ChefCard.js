import { useAlert } from 'react-alert'

function ChefCard({chef, event, StyledButton}){

  const alert = useAlert()

    function handleRequest(e){
        e.preventDefault()
        console.log(chef)
        console.log(event)
        fetch('/requests', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
            accepted: false,
            event_id: event.id,
            client_id: event.user_id,
            chef_id: chef.id,
            })
         })
            .then(r => {
                if(r.ok) {
                    alert.show("Request Sent")
                }else {
                    alert.show("You have already sent a request for this event.")
                }})
        }
    

    return (
        <div className='card'>
            <div className='cardContainer'>
            <h3>{chef.name}</h3>
            <img src={chef.image} alt="Chef" style={{width: "100%"}}/>
            <p><strong>Specializes in</strong><br/> {chef.cuisine} <br/>
                Expierence recently from: {chef.last_job}
            </p>
           <StyledButton onClick={handleRequest}>Send Event Request</StyledButton>
           </div>
        </div>
    )
}

export default ChefCard;