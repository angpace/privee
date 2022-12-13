import { useState } from 'react';
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import { Routes, Route, Link } from "react-router-dom"


function App() {
  const [user, setUser] = useState(null)

  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setUser(null)
        console.log(user)
      }
    })
  }

  function onLogin(user) {
    setUser(user)
    console.log(user)
  }

  return (
    <div>
      <Link to="/">Home </Link>
      {user?
      
      <button onClick={handleLogOut}>Log out</button>
      :
      <Link to="/signup">Sign In</Link>

      }
    

      <Routes>

      <Route exact path="/" element={<Home/>} />

      <Route path="/signup" element={<CreateAccount onLogin={onLogin} user={user}/>} />

      </Routes>
      
    </div>
  );
}

export default App;
