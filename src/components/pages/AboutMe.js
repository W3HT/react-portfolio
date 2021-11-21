import React from 'react';
import DislplayPhoto from '../../images/profilePicture.jpg'


export default function AboutMe() {
  return (
    <div>
      <div className="row flex-container mt-3 ml-3">
        
      {/* <div className="col-sm-12 col-lg-5 shadow-lg rounded">
          <div className="card m-1">
            <div className="card-body justify-content-start"> */}
        <div className="col-sm-12 col-lg-5 justify-content-center">
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
              <h2 className="welcome-text text-center"> Welcome to my spot!</h2>
                <div className="welcome-text">
                <p></p><p></p><p></p>
                  <p className="text-center">
                    
                   -- PAST -- PRESENT -- FUTURE --                
                    
                  </p>
                  <p className="blog-text"> 
                  Hello, I am Matthew P. Yang. I have been busy. In my resume, you find that I have years of experience in Customer Service, Business Management, IT Support, Healthcare, Administrative, Production, Automation and I even spent some time owning a restaurant. After all the craziness of 2020, I decided to take leap and change my career.
                  </p>
                  <p className="blog-text"> 
                  I am currently finishing a Full Stack Software Developer Bootcamp with the University of Minnesota. I am excited to graduate and move into this new sector of work - equipped with the skill sets profited from this cohort.
                  </p>
                  <p className="blog-text"> 
                  Technology is changing at an exponential rate. I want to a part of this by being a Software Developer. It provides job security, versatility of roles, and best all - it is really gratifying to provide solutions to the meet challenges in the world we live in.
                  </p>
                </div>
          </div>         
        </div>

        </div>
      </div>
     
    </div>

    
  );
}
