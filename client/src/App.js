import { useEffect, useState } from 'react';
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import { Routes, Route, useNavigate } from "react-router-dom"
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
      <div className='top-banner-text'><span className='top-banner'></span></div>
      {currentUser?
      
      <div className='wrapper'>
      <ul className='nav'>
      <h1 className='logo'>Privée</h1>
      <li><a href="/">Home</a></li> 
      <li><a href="/myevents">My Events</a></li> 
      <li><a href="/myprofile">My Profile</a></li> 
      <li><a href="/" onClick={handleLogOut}>Log out</a></li> 
      </ul>
      </div>
      
      :
      //   <div className='nav'>
      //   <Link className='navlink' to="/">Home </Link>
      //   <Link className='navlink' to="/signup">Sign In</Link> 
      // </div>

        <div className='wrapper'>
        <ul className='nav'>
        <h1 className='logo'>Privée</h1>
          <li><a href="/">Home</a></li> 
          <li><a href="/signup">Sign In</a></li> 
        </ul>
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
