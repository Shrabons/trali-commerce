import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './freeshop.css'

const Freeshop = () => {
    let [freeshop , setFreeshop] = useState([])

    useEffect(()=>{
        async function shopfree() {
            let shopFreeData = await axios.get("http://localhost:8000/freeshop")
            setFreeshop(shopFreeData.data)
        }
        shopfree()
    },[])
    console.log(freeshop)
  return (
      <>
        {freeshop.map((item, i)=>(
            <div key={i} className='free__shop' style={{background: `url(${item.bgImg}) no-repeat`}} >
                <div className="container">
                    <h2>{item.heading}</h2>
                    <Link className='free__button' to="#">{item.button}</Link>
                </div>
            </div>
        ))}
      </>
   
  )
}

export default Freeshop