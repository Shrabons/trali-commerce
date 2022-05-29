import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Grid, Row } from 'rsuite'
import CartProdect from './CardProdect'
import './topproduct.css'
const TopProduct = () => {

    let [product, setProduct] = useState([])

    useEffect(()=>{
        async function productData() {
            let {data} = await axios.get("http://localhost:8000/product")
            setProduct(data)
            
        }
        productData()
    },[])
  return (
    <div className='top__product'>
        <div className="container">
            <Grid fluid>
                <Row gutter={30}>
                    <Col xs={12}>
                        <div className="topProduct__heading">
                            <h2>Top Products</h2>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="mix__menu">
                            <ul>
                                <li><Link className='mix__link' to="">All</Link></li>
                                <li><Link className='mix__link' to="">Boys Collection</Link></li>
                                <li><Link className='mix__link' to="">Girl Collection</Link></li>
                                <li><Link className='mix__link' to="">Shose Collection</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
        <div className="container">
            <Grid fluid>
                <Row gutter={30}>
                {product.map((itemProduct, i)=>(
                    <Col xs={6} key={i}>
                        <CartProdect img={itemProduct.img} productName={itemProduct.name} reting={itemProduct.reting} brand={itemProduct.brand} colors={itemProduct.color} productSizes={itemProduct.sizes} productPrice={itemProduct.price} />
                    </Col>
                ))}
                </Row>
            </Grid>
        </div>
    </div>
  )
}

export default TopProduct