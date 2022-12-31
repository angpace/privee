import Login from "./Login";
import { useState } from "react";

function CreateAccount ({onLogin, currentUser}) {
    // for new client
    const [isChefClicked, setIsChefClicked] = useState(false)
    const [isClientClicked, setIsClientClicked] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [newClient, setNewClient] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        image: "",
    })
    // for new Chef
    const [newChef, setNewChef] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        image: "",
        cuisine: "",
        last_job: "",
    })
  
    function handleChange(e) {
        const { name, value } = e.target 
        if ( isChefClicked ) {
        setNewChef({ ...newChef, [name]: value })
        } else if ( isClientClicked ) {
            setNewClient({...newClient, [name]: value})
        }
    }
  
    function handleSubmit(e) {
        e.preventDefault()
    
        if ( isChefClicked ) {
        fetch('/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                name: newChef.name,
                email: newChef.email,
                password: newChef.password,
                phone: newChef.phone,
                image: newChef.image,
                is_a_chef: true,
                cuisine: newChef.cuisine,
                last_job: newChef.last_job
            })
        })
            .then(r => r.json())
            .then(data => console.log(data)) }

        else if ( isClientClicked ) {
            fetch('/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    name: newClient.name,
                    email: newClient.email,
                    password: newClient.password,
                    phone: newClient.phone,
                    image: newClient.image,
                    is_a_chef: false,
                })
            })
                .then(r => r.json())
                .then(data => console.log(data))
        }
    }

        function handleRadioChoice(e){
            if (e.target.value === "chef") {
                setIsChefClicked(!isChefClicked) 
                setIsClientClicked(false)
            } else if (e.target.value === "client") {
                setIsClientClicked(!isClientClicked)
                setIsChefClicked(false)
            }
        }



    return (
    
        <div className={`logincontainer${isSignUp ? " right-panel-active" : ""}`}>
            <Login onLogin={onLogin}/>

            <div class="form-container sign-up-container" >
                <form>
                    <div onClick={handleRadioChoice}>
                    <strong>Select an Account Type</strong>
                                <input type="radio" name="user" value="chef" />Chef
                                <input type="radio" name="user" value="client" />Client
                    </div>
                    
    
            {isChefClicked? 

            <div>
          <form onSubmit={handleSubmit}>
              <input
                  onChange={handleChange}
                  placeholder="Name"
                  name="name"
              />
              <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  name="email"
              />
              <input
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  name="password"
              />
              <input
                  onChange={handleChange}
                  type="integer"
                  placeholder="Phone Number"
                  name="phone"
              />
              <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Image"
                  name="image"
              />
              <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Specialized Cuisine"
                  name="cuisine"
              />
              <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Job in Hospitality"
                  name="last_job"
              />
              <button type="submit">Create Account</button>
            </form>
          </div>
                
                :
       
                <div></div>
        }
            {isClientClicked? 

             <div>
                    <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    placeholder="Name"
                    name="name"
                />
                <input
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                />
                <input
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <input
                    onChange={handleChange}
                    type="integer"
                    placeholder="Phone Number"
                    name="phone"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Image"
                    name="image"
                />
                <button type="submit">Create Account</button>
            </form>
         </div>
                    
                    :

                    <div></div>

         }
         </form>
         </div>
        <div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome In!</h1>
				<p>We're so glad to have you. Login in now.</p>
				<button class="ghost" onClick={() => setIsSignUp(!isSignUp)} id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Foodie!</h1>
				<p>Create an account and make every meal your best.</p>
				<button class="ghost" onClick={() => setIsSignUp(!isSignUp)} id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
    </div>
    
    
    
    )}


export default CreateAccount;