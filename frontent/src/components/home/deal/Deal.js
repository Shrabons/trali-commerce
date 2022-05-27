import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Grid, Row } from 'rsuite'
import './deal.css'

const Deal = () => {

    let [deal, setDeal] = useState([])

    useEffect(()=>{
       async function dealFun(){
            let dealData = await axios.get("http://localhost:8000/deal")
            setDeal(dealData.data)
        }
        dealFun()
    },[])
  return (
    <div className='deal'>
        <div className="container">
            <Grid fluid>
                <Row gutter={24} className="show-grid">
                    {deal.map((dealIeam, i)=>(
                        <Col xs={12} key={i}>
                            <div className="deal__item" style={{background: `url(${dealIeam.img})`, backgroundSize: "cover"}}>
                                <h5>{dealIeam.subheading}</h5>
                                <h3>{dealIeam.heading}</h3>
                                <Link to="#" className={` deal__btn deal__btn${i}`}>{dealIeam.heroButton}</Link>
                            </div>
                        </Col>
                    ))}
                    
                </Row>
            </Grid>
        </div>
    </div>
  )
}

export default Deal