import { useState } from "react";
import { useAlert } from "react-alert";

function EventPreview ({event, currentUser, handleUpdate}) {
    const [clicked, isClicked] = useState(false)
    const alert = useAlert()
    const [newReview, setNewReview] = useState({
        title: "",
        description: "",
        rating: "",
    })

    function handleChange(e) {
        const { name, value } = e.target 
        setNewReview({ ...newReview, [name]: value })
    }

    const request = event.requests[0]

    function handleSubmit(e) {
        e.preventDefault()
           fetch('/reviews', {
           method: 'POST',
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify({
           title: newReview.title,
           client_id: currentUser.id,
           event_id: event.id,
           description: newReview.description,
           chef_id: request.chef_id,
           rating: newReview.rating
           })
        })
           .then(r => {
             if (r.status === 200){
               r.json()
               .then(data => handleUpdate(data))
               alert.show("New Review Created")
           }
           else if (r.status === 422) {
               r.json()
               .then(data => alert.show(data.error))
           }}
            )
    
       }



    return (
        <div>
        <div onClick={() => isClicked(!clicked)} className="card" style={{width: "200px", padding: "12px"}}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.amount_of_people}</p>
        </div>
        <div>
                   {clicked?
                
                <div>
                    <h2>Enter your review below.</h2>
                    <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                placeholder="Review Title"
                                name="title"
                            />
                            <input
                                onChange={handleChange}
                                placeholder="Leave a note for your Chef!"
                                name="description"
                            />
                            <input
                                onChange={handleChange}
                                placeholder="Rating 1-5"
                                name="rating"
                            />
                            <button>Submit Review</button>
                            </form>
                     </div>

                     :

                     <></>
            }
        </div>
        </div>
    )
}

export default EventPreview;