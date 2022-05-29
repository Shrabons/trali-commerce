import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, ButtonToolbar, Form } from 'rsuite'
import { Store } from '../../Store'
import './login.css'

const Login = () => {
    let navigate = useNavigate()
    let {state, dispatch} = useContext(Store)
    let {userInfo} = state
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    
    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[])

    const handleLoginSub = async () => {
         let {data} = await axios.post("http://localhost:8000/login", {
            email: email,
            password: password
        })
        // console.log(data.data)
        // console.log(data.msg)

        localStorage.setItem('userInfo', JSON.stringify(data.data))
        dispatch({type:'USER_LOGIN', payload: data.data})
        navigate('/')

        
    }

  return (
    <div className="login">
        <div className="container">
            <div className="login__form">
                <h2>Login</h2>
                <Form fluid>
                    <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" onChange={(e)=> setEmail(e)} />
                       
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" onChange={(e)=> setPassword(e)}  />
                    </Form.Group>
                  
                    <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleLoginSub} >login</Button>
                    </ButtonToolbar>
                    </Form.Group>
                    <Form.HelpText>do not your Account ? <Link to="/signup">SignUp</Link> </Form.HelpText>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Login