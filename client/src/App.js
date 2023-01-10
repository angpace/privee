import { useEffect, useState } from 'react';
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import { Routes, Route, useNavigate } from "react-router-dom"
import Events from './Components/Events';
import { useAlert } from 'react-alert';
import MyProfile from './Components/MyProfile';
import Gallery from './Components/Gallery';
import About from './Components/About';


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
    navigate("/")
  }

  return (
    <div>
      <div className='top-banner-text'><span className='top-banner'></span></div>
      {currentUser?
      
      <div className='wrapper'>
        {/* <img style={{height: "200px", width: "300px", float: "left"}} src={logo}></img> */}
      <ul className='nav'>
      <li><a href="/">Home</a></li> 
      <li><a href="/about">About</a></li> 
      <li><a href="/gallery">Gallery</a></li>
      <li className="dropbtn"><a href="/myprofile">My Account</a> 
          <div className="dropdown-content">
            <a href="/myprofile">My Profile</a>
            <a href="/myevents">My Events</a>
            <a href="/" onClick={handleLogOut}>Log out</a>
          </div>
        </li>
      </ul>
      </div>
      
      :

        <div className='wrapper'>
        {/* <img src={logo} style={{height: "200px", width: "300px", float: "left"}}></img> */}
        <ul className='nav'>
          <li><a href="/">Home</a></li> 
          <li><a href="/about">About</a></li> 
          <li><a href="/gallery">Gallery</a></li> 
          <li><a href="/signup">Sign In</a></li> 
        </ul>
        </div>

      }
    

      <Routes>
      <Route exact path="/myprofile" element={<MyProfile currentUser={currentUser} />} />
      <Route exact path="/myevents" element={<Events currentUser={currentUser} />} />
      <Route exact path="/" element={<Home/>} />
      <Route path="/signup" element={<CreateAccount onLogin={onLogin} currentUser={currentUser}/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/about" element={<About/>} />
      </Routes>

    
    </div>
  );
}

export default App;
