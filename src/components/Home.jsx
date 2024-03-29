import React from "react";
import "./home.css";


const Home = () => {
  return (
    <div className="home-container">
    
      <div className="home-upper-conatiner">
        <h1>
          Minimize your tabs. <br />
          Find the trends!
        </h1>
        <p>
          Don’t let your computer memories consumes all of those browser tabs.{" "}
          <br />
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <div className="btn-research-conatiner"> 
          <div>
            {" "}
            <button className="get-started-btn"> <h3>Get Started 🔥
                </h3> </button>{" "}
          </div>
          <div>
            <img className="All-research-img" src="img-hero.png" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
