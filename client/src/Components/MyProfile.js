function MyProfile({currentUser}) {

    if (!currentUser) {
        return <img className="loader" src="https://cdn.dribbble.com/users/2140642/screenshots/4301537/rodrigosloader.gif"></img>
    }

    return (
        <div>
            <h3>Welcome {currentUser.name}!</h3>
            <img style={{width: "600px"}}src={currentUser.image} alt="profile"/>
            <h3>My contact information:</h3>
            <p>{currentUser.email}</p>
            <p>{currentUser.phone}</p>
        </div>
    )
}

export default MyProfile;