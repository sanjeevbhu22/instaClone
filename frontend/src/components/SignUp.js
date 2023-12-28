import React,{useEffect} from 'react'
import logo from '../img/logo.png'

import "./SignUp.css"
import { Link } from 'react-router-dom'

export default function SignUp() {
    const fetchData = async()=>{
            const response = await fetch("http://localhost:5000/");
            const data = await response.json();
            console.log(data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
    <div className='signUp'>
        <div className='form-container'>
            <div className='form'>
                    <img className='signUpLogo' src={logo} alt=''/>
            <p className='loginPara'>SignUp to see the photos and videos<br/> from your friends</p>
            <div>
                <input type='email' name='email' id='email' placeholder='email'/>
            </div>
            <div>
                <input type='text' name='fullname' id='fullName' placeholder='Full Name' />
            </div>
            <div>
                <input type='text' name='username' id='username' placeholder='Username'/>
            </div>
            <div>
                <input type='password' name='password' id='password' placeholder='Password'/>
            </div>
            <p className='loginPara' style={{fontSize:"12px"}}> By signing up, you agree our term <br/> privacy policy and cookies policy </p>
            <div>
                <input type='submit' name='submit' id='submit-btn' value="Sign Up"/>
            </div>
            </div>
            <div className='form2'>
                    Already have an account ?
                        <Link to={"/SignIn"}>
                        <span style={{color:'blue',cursor:'pointer'}}> Sign in</span>
                        </Link>
                        
            </div>
            
        </div>
    </div>
  )
}
