import React from 'react';
import DislplayPhoto from '../../images/profilePicture.jpg'


export default function AboutMe() {
  return (
    <div>
      <div className="row flex-container mt-3 ml-3">
        
      {/* <div className="col-sm-12 col-lg-5 shadow-lg rounded">
          <div className="card m-1">
            <div className="card-body justify-content-start"> */}
        <div className="col-sm-12 col-lg-5">
          <div className="card-body justifty-content-center">
            <img src={DislplayPhoto} alt="My Profile picuture"
              style={{
                width: "400px",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRigth: "auto",
                border: "2px solid black",
                boxShadow: "10px whitesmoke"}}
              
                />
          </div>
        </div>
      {/* </div> */}
      
      
        <div className="col-sm-12 col-lg-5 shadow-lg rounded">
          <div className="card m-1">
            <div className="card-body justify-content-end">
              <h2 className="welcome-text text-center"> Hello, Welcome to my spot!</h2>
                <div className="welcome-text line-space">
                  <p><u>Before:</u></p>
                  <p>Purchaser @ BW SYSTEMS</p>
                  <p><u>Now:</u></p>
                  <p>Student University of Minnesota</p>
                  <p><u>Future:</u></p>
                  <p>Software Developer</p>
                  <p></p> <p></p>
                </div>
          </div>         
        </div>

        </div>
      </div>
     
    </div>

    
  );
}
