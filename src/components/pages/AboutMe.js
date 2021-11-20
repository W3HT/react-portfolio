import React from 'react';
import DislplayPhoto from '../../images/profilePicture.jpg'


export default function AboutMe() {
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
      
      
      
        <div className="col-sm-12 col-lg-7">
          <div className="card m-1">
            <div className="card-body justify-content-start">
              <h2 className="welcome-text text-center"> Hello, Welcome to my spot!</h2>
                <div className="welcome-text line-space">
                  <p><u>Before:</u></p>
                  <p>Purchaser @ BW SYSTEMS</p>
                  <p><u>Now:</u></p>
                  <p>Student University of Minnesota</p>
                  <p><u>Future:</u></p>
                  <p>Software Developer</p>
                </div>
          </div>         
        </div>

        </div>
      </div>
     
    </div>

    
  );
}
