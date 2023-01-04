import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import EventPreview from "./EventPreview";


function MyReviews ({currentUser, userEvents}) {
    const [reviews, setReviews] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        fetch("/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    if (!currentUser) {
        return <img alt="fryingPan" className="loader" src="https://cdn.dribbble.com/users/2140642/screenshots/4301537/rodrigosloader.gif"></img>
    }

    const isAChef = currentUser.is_a_chef 

    const displayClientEvents = userEvents.map((event) => {
        return <EventPreview currentUser={currentUser} event={event} key={event.id} handleUpdate={handleUpdate}/>
    })


    function handleDelete(id) {
        const updatedReviewsArray = reviews.filter((r) => r.id !== id);
        setReviews(updatedReviewsArray);
      }

      function handleUpdate(newReview) {
        console.log(newReview)
        setReviews([...reviews, newReview]);
      }


   
    const filterReviews = reviews.filter((r) => r.client_id === currentUser.id || r.chef_id === currentUser.id)


    const displayReviews = filterReviews.map((r) => {
        return <ReviewCard handleDelete={handleDelete} currentUser={currentUser} r={r} key={r.id} />
    })
    
    if (isAChef === false) { 
        return <div>
             <button onClick={() => setClicked(!clicked)}>Review an Event!</button>

             {clicked? 
                <div>
                    <div>
                        <h3>Which of your events would you like to review?</h3>
                        {displayClientEvents}
                    </div>
                 </div>
                :

                <></>

             }
             {displayReviews.length > 0 ?
             <div>
                    <h2>Posted Notes and Reviews</h2>
                                {displayReviews}
             </div>
             :

             <h3>You currently have no reviews</h3>
    }
         </div>
    }

    return (
        <div>
            <h2>Notes and Reviews</h2>
            {displayReviews}
        </div>
    )
}

export default MyReviews;