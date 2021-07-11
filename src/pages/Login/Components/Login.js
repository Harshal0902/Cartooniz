import React, {useState} from 'react'
import './SignUp.css'
import {BrowserRouter as Router,Route, Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import img from "../images/Viper.png"

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const history = useHistory();

    return (
        <Router>
        <Route path="/login">
        <div className="container">
            <div className="signup-section">
            <h1 className="signup">Login</h1>
            <div>
                <form >
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
                        <button className="btn-login" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                </form>
                <div className="text">
                    <p>Don't have a account? <span onClick={() => history.goBack()}>Sign Up</span></p>
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
        </Route>
        </Router>
    )
}

export default Login
