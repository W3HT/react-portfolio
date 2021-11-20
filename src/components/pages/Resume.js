import React from 'react';
import DislplayPhoto from '../../images/profilePicture.jpg'


export default function Resume() {
  return (
    <div>
      <div className="row mt-3">
        
        
        <div className="col-sm-12 col-lg-5 ">
          <div >
            <img src={DislplayPhoto} alt="My Profile picuture"
              style={{
                width: "200px",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRigth: "auto",
                border: "2px solid black",
                boxShadow: "10px whitesmoke"}}
              
                />
          </div>
        </div>
        </div>
        </div>

)}
        

