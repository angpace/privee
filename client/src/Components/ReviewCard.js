function ReviewCard ({r, currentUser, handleDelete}) {

    if (!currentUser) {
        return <img alt="fryingPan" className="loader" src="https://cdn.dribbble.com/users/2140642/screenshots/4301537/rodrigosloader.gif"></img>
    }

    function deleteReview(e) {
        e.preventDefault()
        fetch(`/reviews/${r.id}`, {
                method: "DELETE",
            })
            handleDelete(r.id)
        }
    

    const isAChef = currentUser.is_a_chef 

    if (isAChef === false) {
        return (
            <div>
            <div className="reviewCard">
                <p><strong>{r.title}</strong>
                <br></br>
                <br></br>Rating: {r.rating}
                <br></br>Event: {r.event.title}
                <br></br>{r.description}</p>
                <button onClick={deleteReview}>delete</button>
            </div>
            </div>
    ) }


    return ( 
        <div className="reviewCard">
            <p>You were given the following feedback for <strong>{r.event.title}.</strong>
                <br></br>
                <br></br><strong>{r.title}</strong>
                <br></br>Rating: {r.rating}/5
                <br></br>{r.description}</p>
        </div>
    )
}

export default ReviewCard