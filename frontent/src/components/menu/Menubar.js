import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { FaBalanceScale, FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './menubar.css';


const Menubar = () => {

    let[logo, setLogo] = useState({})

    useEffect(()=>{
        async function logoData() {
            let logo = await axios.get("http://localhost:8000/logo")
            setLogo(logo.data.img)
        }
        logoData()
        
    },[])


  return (
      <>
        <div className="navbar">
            <div className="container">
                <nav className="navbar__main">
                    <div className="navbar__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navbar__items">
                        <ul>
                            <li ><Link className="nav__item__link current__page" to="#">home</Link></li>
                            <li><Link className="nav__item__link" to="#">pages</Link></li>
                            <li><Link className="nav__item__link" to="#">blog</Link></li>
                            <li><Link className="nav__item__link" to="#">contacts</Link></li>
                            <li><Link className="nav__item__link" to="/login">signup / login</Link></li>
                        </ul>
                    </div>
                    <div className="navbar__icons">
                        <ul>
                            <li><Link className="icons__link " to="#"><FaRegUserCircle /></Link></li>
                            <li><Link className="icons__link" to="#"><BsHeart /></Link></li>
                            <li><Link className="icons__link" to="#"><FaBalanceScale /></Link></li>
                            <li className="order__place"><Link className="icons__link" to="#"><BsCart3 /></Link>
                            <span className="order__number">15</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
      </>
  )
}

export default Menubar