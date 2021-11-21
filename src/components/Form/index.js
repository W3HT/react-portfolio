import React, { useState } from 'react';
import validateEmail from '../../../src/utils/helpers';
import ContactPic from '../../images/contact.jpg';

export default function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => { 

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else {
            setMessage(inputValue);
          }
    }
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
          setErrorMessage('Please enter a valid Email');
          return;
        }
    }
    return (
        <div className="row mt-5 d-flex justify-content-center mb-5">
        <div className="col-sm-12 col-lg-5">
          <div className="card m-1">
            <div className="card-body">


            <div className="row mt-3">
          
          
          <div className="col-sm-12 col-lg-12 justift-content-center">
            <h3 className="welcome-text text-center">
                Let's Link up!</h3>
              <div className="row d-flex">
              <img src={ContactPic} alt="My Profile picuture"
                style={{
                  width: "750px",
                  height: "auto",
                  display: "block",
                  marginLeft: "20",
                  marginRigth: "0",
                  border: ".5px solid black",
                  boxShadow: "10px whitesmoke"}}
                
                  />
                   <h3 className="welcome-text text-center">
                      Drop me a message down below: </h3>            
                  </div>
                  </div>
          </div>
        </div>
    </div>


        <div className="justify-content-center mb-5">
          
          <form className="form">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="name@example.com"
            />
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Name"
            />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Enter Message"
              row='3'
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        </div>
          </div>
      
      

      
      );
    }
    
    // export default Form;
