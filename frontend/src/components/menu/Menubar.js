import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { FaBalanceScale, FaRegUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import { Store } from '../../Store';
import './menubar.css';


const Menubar = () => {

    let navigate = useNavigate()
    let {state, dispatch} = useContext(Store)

    // let {statData} = state.userinfo
    
    let[logo, setLogo] = useState({})

    useEffect(()=>{
        async function logoData() {
            let logo = await axios.get("http://localhost:8000/logo")
            setLogo(logo.data.img)
        }
        logoData()
        
    },[])
    // console.log('ami menu theke aseci ',state)

    const handleLogout = () => {
        dispatch({type:'USER_LOGOUT'})
        localStorage.removeItem('userInfo')
        navigate('/login')
    }

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
                            {!state.userInfo 
                            &&
                            
                            <li><Link className="nav__item__link" to="/login">{state.userInfo ? state.userInfo.username : "login"}</Link></li>
                            }
                        </ul>
                    </div>
                    <div className="navbar__icons">
                        <ul>
                            <li><Link className="icons__link " to="#">
                                {state.userInfo? 
                                    <Dropdown title={<FaRegUserCircle />}>
                                        <Dropdown.Item>{state.userInfo.username}</Dropdown.Item>
                                        <Dropdown.Item> 
                                        {state.userInfo.isVendor ?
                                            <Link to="/deshboard"> deshboard</Link>
                                        :
                                        
                                        <Link to="/vendor"> Become a vendor</Link>
                                        }
                                        
                                        </Dropdown.Item>
                                        <Dropdown.Item>Download As...</Dropdown.Item>
                                        <Dropdown.Item>Export PDF </Dropdown.Item>
                                        <Dropdown.Item>Export HTML</Dropdown.Item>
                                        <Dropdown.Item>Settings</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                                    </Dropdown>
                                :
                                ""
                                }
                            </Link></li>
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