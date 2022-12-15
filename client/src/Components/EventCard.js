function EventCard({e, currentUser}) {



    return (
        <div>
            <h3>{e.title}</h3>
            <p>Attending: {e.amount_of_people}</p>
            <p>{e.description}</p>
            <button>Edit event</button>
        </div>
    )
}

export default EventCard