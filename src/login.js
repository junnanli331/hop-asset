import React, { useState} from 'react';
import './login.css'
import hoptek from './hoptek.png'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    

    const handleUsername = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
     
    const navigate = useNavigate();
    const Submit = (e, name, password) => {
        e.preventDefault()
        setName("")
        setPassword("")
       if (name !== "junnan" || password !== "junnan") {
         alert("invalid username or password")
        // console.log("changed")
       } else {
        navigate('/dashboard')
        //console.log('xxx')
       }
    }
   
    return (
        <div>
            <form className = "LoginFrame" width = "50" height = "80">
                <div className = "in">
                <img src = {hoptek}/>
                <label className = "name" >Username:  </label>
                <input className = "nameInput"placeholder='Please enter your username' value={name} onChange={handleUsername}></input> 
                <br/>
        
                <label className = "password">Password:  </label>
                <input className = "passwordInput" type = "password" placeholder='Password' value = {password} onChange = {handlePassword} ></input> <br/>
                <button className = "submit" onClick={(e)=> Submit(e, name, password)}>Login</button>
               
                <label className = "greeting" type = "sumbmit">Welcome to Hop-Asset</label>
                </div>
            </form>
            
        </div>
    )
}

export default Login