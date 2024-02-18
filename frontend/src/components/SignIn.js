import React,{useState,useContext} from 'react'
import "./SignIn.css"
import logo from '../img/logo.png'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginContext } from '../context/LoginContext'; 

export default function SignIn() {
  const {setUserLogin}=useContext(loginContext);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //Toast function 
  const notifyA = (msg)=>toast.error(msg);
  const notifyB = (msg)=>toast.success(msg);
  //Regex for email finding
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

  const postData = ()=>{
    if(!emailRegex.test(email)){
        notifyA("Invalid Email");
        return;
    }
    //sending the data to the server
    fetch("https://instaclonebackend-scdj.onrender.com/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            notifyA(data.error);
        }
        else{
            notifyB("Signed In Successfully");
            console.log(data)
            localStorage.setItem("jwt",data)
            setUserLogin(true);
            navigate("/");
        }        
        console.log(data)});
}
  return (
    <div className='signIn'>
      <div className='form-containere '>
      <div className='loginForm'>
            <img className='signUpLogo' src={logo} alt=''/>
            <p className='loginPara'> Login to see the photo and videos from your friends</p>
            <div>
            <input type='email' name='email' id='email' value={email} placeholder='email' onChange={(e)=>{
                    setemail(e.target.value)
                }}/>
            </div>
            <div>
            <input type='password' name='password' id='password' placeholder='Password' value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                }}/>
            </div>
            <div>
              <input type='submit' id='login-btn' onClick={()=>{
                postData()
              }} value="Sign In"/>
            </div>
      </div>
      <div className='loginForm2'>
            Don't have an account 
            <Link to="/SignUp"><span style={{color:'blue',cursor:'pointer'}}>SignUp</span></Link>
      </div>
      </div>
    </div>
  )
}
