import React from 'react'
import logo from '../img/profileImage1.jpg'
import './Home.css';

export default function Home() {
  return (
    <div>
      {/*card */}
      <div className="card">
        {/* card header */}
        <div className="card-header">
          {/* card pics */}
          <div className="card-pic">
          <img src={logo} alt=''/>
          </div>
          <h5>Anchor_name</h5>
        </div>
        {/*card image */}
        <div className="card-image">
          <img src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        </div>

        {/* Card content */}
        <div className="card-content">
        <span className="material-symbols-outlined">
            favorite
        </span>
        <p>1 likes</p>
        <p>Post created by user</p>
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
      <div className="card">
        {/* card header */}
        <div className="card-header">
          {/* card pics */}
          <div className="card-pic">
          <img src={logo} alt=''/>
          </div>
          <h5>Anchor_name</h5>
        </div>
        {/*card image */}
        <div className="card-image">
          <img src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        </div>

        {/* Card content */}
        <div className="card-content">
        <span className="material-symbols-outlined">
            favorite
        </span>
        <p>1 likes</p>
        <p>Post created by user</p>
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
    </div>
  )
}
