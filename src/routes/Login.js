import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "./AuthContext";
import "./LoginStyles.css";


function Login() {
     
    const {isLoggedIn,login}=useAuth();

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    
    const validateEmail = (email) => {
        // Regular expression for a basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email);
    }

    async function submit(e){
        e.preventDefault();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        try{

            await axios.post("http://localhost:9000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                    login();
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup</Link>

        </div>
    )
}

export default Login