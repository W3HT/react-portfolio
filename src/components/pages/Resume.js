import React from "react";
import MyResume from "../../images/resume.png";

export default function Resume() {
  return (
    <div>
      <div className="mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-lg-12">
            <div>
              <img
                className="file-image"
                src={MyResume}
                alt="My Resume picuture"
                style={{
                  width: "auto",
                  height: "auto",
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  // marginBottom: "200px",
                  border: "2px solid black",
                  boxShadow: "10px whitesmoke",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row d-flex justifty-content-center m-5">
          <div
            className="col-sm-5 col-lg-5 text-center bg-light p-3 shadow-lg"
            style={{
              width: "auto",
              height: "auto",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "200px",
              border: "2px solid black",
              boxShadow: "10px whitesmoke",
            }}
          >
            <a href="https://drive.google.com/file/d/1vVXl1YRGgRODMTg0nuJ7wfu144BEvox3/view?usp=sharing">
              Download Expanded Resume Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
