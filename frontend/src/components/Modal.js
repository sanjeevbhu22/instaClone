import React from 'react'
import {RiCloseLine} from 'react-icons/ri'
import './Modal.css';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
export default function Modal({setModalOpen}) {
    const navigate = useNavigate();
  return (
    <div className="darkBg" onClick={()=>{setModalOpen(false)}}>
        <div className='centered'>
        <div className="modal">
        {/* Modal Header */}
        <div className="modalHeader">
            <h5 className='heading'>Confirm</h5>
        </div>
        <button className="closeBtn">
            <RiCloseLine></RiCloseLine>
        </button>
        {/* modal content */}
        <div className="modalContent">Are you really want to log out ?</div>
        <div className="modalActions">
            <div className="actionsContainer">
                <button className="logOutBtn" onClick={()=>{
                    setModalOpen(false);
                    localStorage.clear();
                    navigate(SignIn);
                }}>Log Out</button>
                <button className="cancelBtn" onClick={()=>{setModalOpen(false)}}>Cancel</button>
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}

