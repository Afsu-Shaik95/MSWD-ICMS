import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function SignUp() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState(false);

    const validateEmail = (email) => {
        // Regular expression for a basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setError(true);
        return emailRegex.test(email);
        
    }

    async function submit(e){
        e.preventDefault();

       
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            setError(true);
            return;
        }


        try{

            await axios.post("http://localhost:9000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                    setError(true);
                }
                else if(res.data=="notexist"){
                    history("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                setError(true);
                console.log(e);
            })

        }
        catch(e){
            console.log(e);
            setError(true);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value);   setError(false);}} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value);  setError(false); }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login</Link>

        </div>
    )
}

export default SignUp