import React from "react";
import ContactPic from "../../images/contact.jpg";

function ContactPhoto() {
  return (
    <div className=" mt-5mb-15">
      <div className="row mt-3">
        <div className="col-sm-12 col-lg-5">
          <div>
            <img
              src={ContactPic}
              alt="My Profile picuture"
              style={{
                width: "600px",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRigth: "auto",
                border: "2px solid black",
                boxShadow: "10px whitesmoke",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPhoto;
