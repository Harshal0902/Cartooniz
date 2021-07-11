import React from 'react'
import { useState } from 'react'
import {BrowserRouter as Router,Route, Link} from "react-router-dom"
import img from "../images/Viper.png"
import './SignUp.css'

const SignUp = () => {
    
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="signup-section">
            <h1 className="signup">Welcome</h1>
            <div >
                <form>
                    <div className="Username">
                        <label className="Username-label">Username</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={e => {
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div className="Email">
                        <label className="Email-label">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={e => {
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className="Password">
                        <label className="Password-label">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={e => {
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <div className="form-btn">
                        <button className="btn-login" type="submit" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>
                <div className="text">
                    <p>Already have a account? <Link to="/login">Login</Link></p>
                </div>
            </div>
            </div>
            <div className="image-section">
                <h1>Cartooniz</h1>
                <div className="image">
                    <img src={img} height="520px" />
                </div>
            </div>
        </div>
    )
}

export default SignUp
