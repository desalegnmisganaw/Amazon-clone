import React from 'react';
import "./Login.css"
import { Link, useHistory} from "react-router-dom";
import { useState } from 'react';
import {auth} from "./Firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");
        })
        .catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            
            if(auth) {
                history.push("/");
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className="login">  
        <Link to="/">
            <img className="login_logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            alt=""
            
            />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={signIn} className="login_signInButton">Sign In</button>
            </form>
            <p>
                By signing-in you agree to The AMAZON FAKE CLONE Conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

            </p>
            <button onClick={register} className="login_registerButton">Create Amazon Account</button>

        </div>
      
    </div>
  )
}

export default Login;
