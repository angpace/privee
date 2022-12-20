import { useEffect, useState } from 'react';
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Events from './Components/Events';
import { useAlert } from 'react-alert';
import MyProfile from './Components/MyProfile';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  let navigate = useNavigate()
  const alert = useAlert()

  useEffect(() => {
    fetch(`/me`)
    .then (r =>{
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setCurrentUser(null)
        console.log(currentUser)
        navigate("/")
        alert.show("You've been logged out. Enjoy your day!")
      }
    })
  }

  function onLogin(user) {
    setCurrentUser(user)
    console.log(user)
    navigate("/")
  }

  return (
    <div>

      {currentUser?
      
      <div className='navbar'>
        <Link to="/">Home </Link>
        <Link to="/myevents">My Events</Link>
        <Link to="/myprofile">My Profile</Link>
        <Link onClick={handleLogOut}>Log out</Link>
      </div>
      
      :
        <div className='navbar'>
        <Link to="/">Home </Link>
        <Link to="/signup">Sign In</Link> 
      </div>

      }
    

      <Routes>
      <Route exact path="/myprofile" element={<MyProfile currentUser={currentUser} />} />
      <Route exact path="/myevents" element={<Events currentUser={currentUser} />} />
      <Route exact path="/" element={<Home/>} />
      <Route path="/signup" element={<CreateAccount onLogin={onLogin} currentUser={currentUser}/>} />
      </Routes>

    
    </div>
  );
}

export default App;
