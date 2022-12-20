function MyProfile({currentUser}) {

    if (!currentUser) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h3>Welcome {currentUser.name}!</h3>
            <img src={currentUser.image} alt="profile"/>
            <h3>My contact information:</h3>
            <p>{currentUser.email}</p>
            <p>{currentUser.phone}</p>
        </div>
    )
}

export default MyProfile;