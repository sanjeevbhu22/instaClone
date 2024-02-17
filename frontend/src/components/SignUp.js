import React,{useEffect,useState} from 'react'
import logo from '../img/logo.png'

import "./SignUp.css"
import { Link , useNavigate} from 'react-router-dom'

import { toast } from 'react-toastify';

export default function SignUp() {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    //toast function 
    const notifyA = (msg)=>toast.error(msg);
    const notifyB = (msg)=>toast.success(msg);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const postData = ()=>{
        if(!emailRegex.test(email)){
            notifyA("Invalid Email");
            return;
        }
        else if(!passRegex.test(password)){
            notifyA("Password must contain at least 8 character , 1 numeric, 1 upper case,1 lower case and one special character");
            return;
        }

        //sending the data to the server
        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                userName:userName,
                email:email,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                notifyA(data.error);
            }
            else{
                notifyB(data.message);
                navigate("/SignIn");
            }
            
            console.log(data)});
    }

    return (
    <div className='signUp'>
        <div className='form-container'>
            <div className='form'>
                    <img className='signUpLogo' src={logo} alt=''/>
            <p className='loginPara'>SignUp to see the photos and videos<br/> from your friends</p>
            <div>
                <input type='email' name='email' id='email' value={email} placeholder='email' onChange={(e)=>{
                    setemail(e.target.value)
                }}/>
            </div>
            <div>
                <input type='text' name='name' id='name' placeholder='Full Name' value={name} onChange={(e)=>{
                    setname(e.target.value)
                }} />
            </div>
            <div>
                <input type='text' name='userName' id='userName' placeholder='Username' value={userName} onChange={(e)=>{
                    setuserName(e.target.value)
                }}/>
            </div>
            <div>
                <input type='password' name='password' id='password' placeholder='Password' value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                }}/>
            </div>
            <p className='loginPara' style={{fontSize:"12px"}}> By signing up, you agree our term <br/> privacy policy and cookies policy </p>
            <div>
                <input type='submit' name='submit' id='submit-btn' value="Sign Up" onClick={()=>{postData()}}/>
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
