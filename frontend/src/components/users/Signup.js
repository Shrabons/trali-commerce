import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, ButtonToolbar, Form } from 'rsuite'
import { Store } from '../../Store'
import './signup.css'

const Signup = () => {
    let navigate = useNavigate()
    let {state} = useContext(Store)
    let {userInfo} = state
   
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[])

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