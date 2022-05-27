import React from 'react';
import { BsHandbag, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Panel } from 'rsuite';
import './card.css';

const CartProdect = (props) => {
  return (
    <div className='prodect__cart'>
         <Panel  bodyFill style={{ display: 'inline-block', width: "100%" }}>
          <img src={props.img} style={{ display: 'inline-block', width: "100%" }} alt='product images'/>

          <div className="product__reting__brand">
            <div className="product__reting">
              {props.reting >= 1 ? <BsStarFill  className='icon-color'/> : props.reting >= .5 ? <BsStarHalf className='icon-color' /> : <BsStar className='icon-color' /> }
              {props.reting >= 2 ? <BsStarFill  className='icon-color'/> : props.reting >= 1.5 ? <BsStarHalf className='icon-color' /> : <BsStar className='icon-color' />}
              {props.reting >= 3 ? <BsStarFill  className='icon-color'/> : props.reting >= 2.5 ? <BsStarHalf className='icon-color' /> : <BsStar className='icon-color' />}
              {props.reting >= 4 ? <BsStarFill  className='icon-color'/> : props.reting >= 3.5 ? <BsStarHalf className='icon-color' /> : <BsStar className='icon-color' />}
              {props.reting >= 5 ? <BsStarFill  className='icon-color'/> : props.reting >= 4.5 ? <BsStarHalf className='icon-color' /> : <BsStar className='icon-color' />}
            </div>
            <div className="product__brand">
              <span className="brand">{props.brand}</span>
            </div>
          </div>
          <Panel  header={props.productName}></Panel>
          <div className="product__colors_sizes">
            <div className="product__color">
            {props.colors.map((item, i)=>(
              <span key={i} className="productColor active" style={{background: `#${item}`}}></span>
            ))}
            </div>
            <div className="product__size">
              {props.productSizes.map((item, i)=>(
                <span key={i} className='productSize'>{item}</span>
              ))}
            </div>
          </div>
          <div className="product__price">
            <div className="product__icons">
              <BsHandbag className="order-price" />
            </div>
            <div className="product__p">
              <span>${props.productPrice}</span>
            </div>
          </div>
      </Panel>
    </div>
  )
}       

export default CartProdect