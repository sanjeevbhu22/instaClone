import React,{useState,useEffect} from 'react'
import logo from '../img/profileImage1.jpg'
import './Createpost.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Createpost() {

    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const navigate = useNavigate()
    //Toast function 
  const notifyA = (msg)=>toast.error(msg);
  const notifyB = (msg)=>toast.success(msg);

    useEffect(() => {
        // upload the url on mongodb
        if(url){
            fetch("http://localhost:5000/createPost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
                
            },
            body:JSON.stringify({
                body,
                pic:url
            })

        }).then(res=>res.json())
        .then(data => {
            if(data.error){
                notifyA(data.error);
            }
            else{
                notifyB("Successfylly posted");
                navigate("/");
            }
        })
        .catch(err=>console.log(err))

        }
        
    }, [url]);
    

    // posting the image in cloudnary.
    const postDetails=()=>{
        console.log(body,image);
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","instaClone")
        data.append("cloud_name","insta1cloud")
        fetch("https://api.cloudinary.com/v1_1/insta1cloud/image/upload",
        {
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data =>setUrl(data.url)) 
        .catch(err => console.log(err))
    }

    const loadfile =(event)=>{
        var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src);}
    }
  return (
    <div className='createPost'>
        <div className="post-header">
            <h4 style={{margin:"3px auto"}}>Create new Post here</h4>
            <button id='post-btn' onClick={()=>{postDetails()}}>Share</button>
        </div>
        <div className="main-div">
            <img id="output" src='https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png' />
            <input type="file" accept="image/*" onChange={(event)=>{loadfile(event); setImage(event.target.files[0]);
            }} />
        </div>
        {/*details */}
        <div className="details">
            <div className="card-header">
                <div className="card-pic">
                    <img src={logo} alt=''/>
                </div>
                <h5>Insta user</h5>
            </div>
            <textarea value={body} onChange={(e)=>{
                setBody(e.target.value)
            }} type="text" placeholder='write a caption'></textarea>
        </div>
    </div>
  )
}
