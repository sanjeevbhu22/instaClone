import React from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/logo192.jpg'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo1} alt='InstaLogo'/>
        <img src={logo} alt='InstaLogo'/>
        <ul>
            <Link to="/SignUp">
               <li>SignUp</li>
            </Link>
            <Link to="/SignIn">
               <li>SignIn</li>
            </Link>
            <Link to="/profile">
               <li>profile</li>
            </Link>
        </ul>
    </div>
  )
}
