import React from "react";
import HtmlPortfolio from "../../images/htmlPortfolio.png";
import PasswordGenerator from "../../images/passGen.png";
import Planner from "../../images/workdayPlanner.png";
import Unicorn from "../../images/unicornbooks.png";
import Fitness from "../../images/fitnessTracker.png";
import Budget from "../../images/budgetTracker.png";

export default function Portfolio() {
  return (
    <div className="m-5">
      {/* <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-lg-5">
          <div className="card m-5">
            <h1 className="text-center">READ ME</h1>
          </div>
        </div>
      </div> */}

      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-lg-5">
          <div className="card m-1">
            <div className="card-body">
              <h3 className="welcome-text text-center">My Projects!</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">

        {/* <div className="col-sm-12 col-lg-10"> */}
          <div className="card m-5 col-sm-10  col-lg-6 ">
            <img
              src={HtmlPortfolio}
              atl="picture of my HTML Portfolio website"
            />
            <div className="card-body">
            <a href="https://w3ht.github.io/Portfolio/">
              <h4 className="welcome-text text-center card-title">
                {" "}
                HTML Portfolio{" "}
              </h4></a>
              <ul className="card-text">
              <li>HTML</li>
                <li>Git</li>
                <li>Advance Css:</li>
                <li>Media Query, Flexbox, Advance Box Styling, CSS Selectors, Responsive Design</li>
              </ul>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="col-sm-12 col-lg-10"> */}
          <div className="card m-5 col-sm-10  col-lg-6 ">
            <img
              src={PasswordGenerator}
              atl="picture of my Password Generator app"
            />
            <div className="card-body">
              <a href="https://w3ht.github.io/password_generator/">
              <h4 className="welcome-text text-center card-title">
                {" "}
                Password Generator{" "}
              </h4></a>
              <ul className="card-text">
                <li>HTML</li>
                <li>Git</li>
                <li>CSS</li>
                <li>JavaScript, Media Query, Flexbox, Advance Box Styling, CSS Selectors, Responsive Design</li>
              </ul>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="col-sm-12 col-lg-10"> */}
          <div className="card m-5 col-sm-10  col-lg-6 ">
            <img src={Planner} atl="picture of my Workday Planner app" />
            <div className="card-body">
              <a href="https://w3ht.github.io/planner/">
                <h4 className="welcome-text text-center card-title">
                {" "}
                Workday Planner{" "}
              </h4></a>
              <ul className="card-text">
                <li>HTML</li>
                <li>Git</li>
                <li>CSS</li>
                <li>JavaScript, Scripts, Variables, Arrays, Methods, Objects, Iterations, Functions, Scoping</li>
              </ul>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="col-sm-12 col-lg-10"> */}
          <div className="card m-5 col-sm-10  col-lg-6 ">
            <img src={Unicorn} atl="picture of my group project unicornbooks " />
            <div className="card-body">
              <a href="https://unicornbooks.herokuapp.com/">
                <h4 className="welcome-text text-center card-title">
                {" "}
                Unicorn Books{" "}
              </h4></a>
              <ul className="card-text">
                <li>HTML</li>
                <li>Git</li>
                <li>CSS</li>
                <li>Javascript, Handlebars, Middleware, REST, Cookies, NodeJS, OOP, Express, SQL, ORM, MVC, Modularization, NPM, Inquirer, Arrow Functions, Asyncrhonous JavaScript, </li>
              </ul>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="col-sm-12 col-lg-10"> */}
          <div className="card m-5 col-sm-10  col-lg-6 ">
            <img src={Fitness} atl="picture of my Fitness Tracker app" />
            <div className="card-body">
              <a href="https://w3ht-workout-tracker.herokuapp.com/">
                <h4 className="welcome-text text-center card-title">
                {" "}
                Fitness Tracker{" "}
              </h4></a>
              <ul className="card-text">
                <li>HTML</li>
                <li>Git</li>
                <li>CSS</li>
                <li>JavaScript, NoSQL, MongoDB, Object-document mapping, Mongoose.js, CRUD
                </li>
              </ul>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="col-sm-12 col-lg-10"> */}
          <div className="card m-5 col-sm-10  col-lg-6 card-bottom">
            <img src={Budget} atl=" picture of my Budget Planner app" />
            <div className="card-body">
              <a href="https://w3ht-budget-tracker.herokuapp.com/">
                <h4 className="welcome-text text-center card-title">
                {" "}
                Offline Budget Planner{" "}
              </h4></a>
              <ul className="card-text">
                <li>HTML</li>
                <li>Git</li>
                <li>CSS</li>
                <li>JavaScript, Lighthouse, PWAs, Webpack, Mongo Atlas</li>
                
              </ul>
            </div>
          </div>
        {/* </div> */}
        
      </div>
    </div>
  );
}
