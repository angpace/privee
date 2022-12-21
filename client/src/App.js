import { useEffect, useState } from 'react';
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Events from './Components/Events';
import { useAlert } from 'react-alert';
import MyProfile from './Components/MyProfile';
import logo from "./logo.png"


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
      <img className="logo" src={logo} alt="logo"/>
      {currentUser?
      
      <div className='nav'>
        <Link className='navlink' to="/">Home </Link>
        <Link className='navlink' to="/myevents">My Events</Link>
        <Link className='navlink' to="/myprofile">My Profile</Link>
        <Link className='navlink' onClick={handleLogOut}>Log out</Link>
      </div>
      
      :
        <div className='nav'>
        <Link className='navlink' to="/">Home </Link>
        <Link className='navlink' to="/signup">Sign In</Link> 
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
