import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox } from 'rsuite'
import { Store } from '../../Store'

const Vendor = () => {

  let navigate = useNavigate()
  let {state,dispatch} = useContext(Store)
  let {userInfo} = state
  console.log( Boolean(userInfo))

  useEffect(()=>{
    if(!userInfo){
      navigate('/login')
    }
  },[])
 


  let [agree, setAgree] = useState("")




  const handleVendor = async () => {
    let {data} = await axios.put(`http://localhost:8000/vendor/${userInfo._id}`)
    dispatch({type: 'USER_LOGIN',payload: data})
    localStorage.removeItem('userInfo')
    localStorage.setItem('userInfo',JSON.stringify(data))
  }


  return (
    <div className="vendor">
        <div className="container">
            <p>It's essentially a contract between you and your customers.</p>
            <ol type='1'>
                <li>You make services available to your customers.</li>
                <li>In return for using these services, your customers promise they'll follow the rules you set out in your Terms and Conditions.</li>
            </ol>
            <p>Think of a Terms and Conditions agreement as a "one stop shop" for all the key information that customers need before they use your services or make a purchase.</p>
            <ol>
                <li>Withdraw and cancel services</li>
                <li>Disable user accounts</li>
                <li>Manage customer expectations</li>
                <li>Set rules for user behavior</li>
            </ol>
            <Checkbox onClick={()=> setAgree(!agree )}> you have a all agreement !</Checkbox>
            <br />
            {agree ?
            
            <Button color="green" appearance="primary" onClick={handleVendor}>Create a Vendor</Button>
            :
            <Button color="green" appearance="primary" disabled>Create a Vendor</Button>
            
            }
        </div>


    </div>
  )
}

export default Vendor