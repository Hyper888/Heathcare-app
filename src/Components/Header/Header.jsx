import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo-image.png';
import User from '../../assets/images/avatar.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <div>
            <img className='logo-header' src={Logo} alt="Logo"/>
            </div>
            <ul className='header-nav'>
                <li className='active'>For Owners</li>
                <li>For Workers</li>
                {/* <li style={{display:"flex", alignItems:"center", marginLeft:"5rem"}}>
                    <img className='user-image' src={User} alt="User Image"/> 
                    <span style={{fontSize:"2rem", fontFamily:"GilroyBold", color:"#10274F"}}>
                        Username</span></li> */}
            </ul>
            <div className='user-section'>
                          
            <img className='user-image' src={User} alt="User Image"/> 
                    <span style={{fontSize:"2rem", fontFamily:"GilroyBold", color:"#10274F"}}>
                        Username</span>
            </div>
    </div>
  )
}
