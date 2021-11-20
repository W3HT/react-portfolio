import React from 'react';
import DislplayPhoto from '../../images/profilePicture.jpg'
import MyResume from '../../images/resume.png'


export default function Resume() {
  return (
    <div>
      <div className="row mt-5  justify-content-center">
        {/* <div className="col-sm-12 col-lg-5 ">
          <div >
            <img src={DislplayPhoto} alt="My Profile picuture"
              style={{
                width: "200px",
                height: "auto",
                display: "block",
                marginLeft: "0",
                marginRigth: "0",
                border: "2px solid black",
                boxShadow: "20px whitesmoke"}}
              
                />
          </div>
        </div> */}
        
        <div className="col-sm-12 col-lg-5">
          <div >
            <img src={MyResume} alt="My Resume picuture"
              style={{
                width: "auto",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "200px",
                border: "2px solid black",
                boxShadow: "10px whitesmoke"}}
              
                />
          </div>
          
              
              
          </div>
        </div>
        </div>

)}
        

