import { useState } from "react";

function Login({onLogin}) {
    const [login, setLogin] = useState({
        email: "",
        password: "",
      })

      function handleChange(e) {
        const { name, value } = e.target
        setLogin({
          ...login, [name]: value
        })
      }

      function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: login.email,
            password: login.password
          })
        })
        .then(res => res.json())
        .then(data => onLogin(data))}

    return (
        <div>
        <h2>Login below</h2>
        <div>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    )

}

export default Login;