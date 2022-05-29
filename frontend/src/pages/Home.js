import React from 'react'
import Hero from '../components/Hero/Hero'
import Deal from '../components/home/deal/Deal'
import Freeshop from '../components/home/freeshop/Freeshop'
import TopProduct from '../components/home/products/TopProduct'

const Home = () => {
  return (
   <>
     <Hero />
     <Deal />
     <TopProduct />
     <Freeshop />
   </>
  )
}

export default Home