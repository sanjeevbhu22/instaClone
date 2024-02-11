import React,{useEffect,useState} from 'react'
import logo from '../img/profileImage1.jpg'
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  const [data, setData] = useState([])
  useEffect(() => {
       const token = localStorage.getItem("jwt");
       if(!token){
        navigate("./signup");
       }
      //  fetching all the posts from backend
      fetch("http://localhost:5000/allPosts",{
        headers:{
          "Authorization":"Bearer " + localStorage.getItem("jwt")
        }
      }).then(res=>res.json())
      .then(result =>setData(result))
      .catch(err=>console.log(err))
  }, [])
  

  return (
    <div>
      {/*card */}
      {data.map((posts)=>{
        // console.log(posts)
        return(
          <div className="card">
        {/* card header */}
        <div className="card-header">
          {/* card pics */}
          <div className="card-pic">
          <img src={logo} alt=''/>
          </div>
          <h5>{posts.postedBy.name}</h5>
        </div>
        {/*card image */}
        <div className="card-image">
          <img src={posts.photo} alt=''/>
        </div>

        {/* Card content */}
        <div className="card-content">
        <span className="material-symbols-outlined">
            favorite
        </span>
        <p>1 likes</p>
        <p>{posts.body}</p>
        </div>
        {/* add comment */}
        <div className="add-comment">
        <span className="material-symbols-outlined">
            mood
        </span>
        <input type="text" placeholder='Add your comment....' />
        <button className='comment'>Post</button>
        </div>
      </div>
        )
      })}
      
      
    </div>
  )
}
