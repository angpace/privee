import { useEffect, useState } from 'react';
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Events from './Components/Events';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    fetch(`/me`)
    .then (r =>{
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  // // useEffect(() => {
  // //   fetch('/clients')
  // //   .then (r =>{
  // //     if (r.ok) {
  // //       r.json().then(user => setCurrentUser(user))
  // //     }
  // //   })
  // // }, [])


  // // useEffect(() => {
  // //   fetch('/client')
  // //   .then (r =>{
  // //     if (r.ok) {
  // //       r.json().then(user => setUser(user))
  // //     }
  // //   })
  // // }, []) 

  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setCurrentUser(null)
        console.log(currentUser)
        navigate("/")
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
      <Link to="/">Home </Link>

      {currentUser?
      
      <Link to="/myevents">My Events</Link>
      
      :

      <div></div>

      }

      {currentUser?
      
      <Link onClick={handleLogOut}>Log out</Link>
      :
      <Link to="/signup">Sign In</Link>

      }
    

      <Routes>
      <Route exact path="/myevents" element={<Events currentUser={currentUser} />} />
      <Route exact path="/" element={<Home/>} />
      <Route path="/signup" element={<CreateAccount onLogin={onLogin} currentUser={currentUser}/>} />
      </Routes>

    
    </div>
  );
}

export default App;
