import React from 'react'
import logo from '../img/profileImage1.jpg'
import './profile.css';

function Profile() {
  return (
    <div className='profile'>
      {/*profile frame */}
      <div className="profile-frame">
        {/*profile pic */}
        <div className="profile-pic">
          <img src={logo} alt=''/>
        </div>
        {/*profile data */}
        <div className="profile-data">
          <h1>Insta user</h1>
          <div className="profile-info" style={{display:'flex'}}>
            <p>10 posts  </p>
            <p>40 followings </p>
            <p>40 followers </p>
          </div>
        </div>
      </div>
      <hr style={{width:'90%',margin:'auto',opacity:'0.8'}}/>
      {/* Gallery  */}
      <div className="gallery">
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>
      <img src={logo} alt=''/>      
      </div>
    </div>
  )
}

export default Profile
