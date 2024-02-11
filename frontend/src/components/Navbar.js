import React from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/logo192.jpg'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar({login}) {
   const loginStatus  =()=>{
      const token = localStorage.getItem("jwt");
         // console.log(token);
      if(login || token){
         return[
            <>
               <Link to="/">
                  <li>Home</li>
               </Link>
               <Link to="/profile">
                  <li>profile</li>
               </Link>
               <Link to="/createPost">
                  <li>Create post </li>
               </Link>
            </>
         ]
      }
      else{
         return[
            <>
               <Link to="/">
                  <li>Home</li>
               </Link>
               <Link to="/SignUp">
                  <li>SignUp</li>
               </Link>
               <Link to="/SignIn">
                  <li>SignIn</li>
               </Link>
            </>
         ]
      }
   };
  return (
    <div className='navbar'>
        <img src={logo1} alt='InstaLogo'/>
        <img src={logo} alt='InstaLogo'/>
        <ul>
         {loginStatus()}       
        </ul>
    </div>
  )
}
