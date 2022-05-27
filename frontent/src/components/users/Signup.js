import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonToolbar, Form } from 'rsuite'
import './signup.css'

const Signup = () => {

    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const handleSignupSub = () => {
        console.log("signup hyce")
        axios.post('http://localhost:8000/signup',{
            username:username,
            email: email,
            password: password
        })
    }

  return (
    <div className="signup">
        <div className="container">
       
            <div className="signup__form">
                <h2>Sign Up</h2>
                <Form fluid>
                    <Form.Group controlId="name">
                        <Form.ControlLabel>Username</Form.ControlLabel>
                        <Form.Control name="name" type="text" onChange={(e)=> setUsername(e)} />
                        {/* <Form.HelpText>Username is required</Form.HelpText> */}
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" onChange={(e)=> setEmail(e)} />
                        {/* <Form.HelpText tooltip>Email is required</Form.HelpText> */}
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" onChange={(e)=> setPassword(e)} />
                    </Form.Group>

                    
                    <Form.Group>
                        <ButtonToolbar>
                            <Button onClick={handleSignupSub} appearance="primary">Submit</Button>
                        </ButtonToolbar>
                    </Form.Group>
                    <Form.HelpText>You have a  Account ? <Link to="/login">Login</Link> </Form.HelpText>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Signup