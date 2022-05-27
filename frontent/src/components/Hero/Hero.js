import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'rsuite'
import './hero.css'

const Hero = () => {

  let [hero, setHero] = useState([])

  useEffect(()=>{
    async function heroData() {
      let hero = await axios.get("http://localhost:8000/hero")
      setHero(hero.data)
    }
    heroData()
  },[])


  return (
      <>

      <Carousel className="custom-slider">
      {hero.map((item, i) => (
        <div key={i} className="hero" >
          <div className="bg__img" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="container">
              <div className="hero__item" >
                <h4>{item.subheading}</h4>
                <h1>{item.heading} <span className='parsents'>{item.percent}</span></h1>
                <Link className='hero__button' to="#">{item.heroButton}</Link>
              </div>
            </div>
          </div>
       </div>
      ))}
       
    </Carousel>
  
    </>
  )
}

export default Hero