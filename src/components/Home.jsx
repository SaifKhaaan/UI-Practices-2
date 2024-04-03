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
        <p id="home-parah">
          Don’t let your computer memories consumes all of those browser tabs.{" "}
          <br />
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <div className="btn-research-conatiner">
          <div >
            {" "}
            <button className="get-started-btn">
              {" "}
              <h3>Get Started 🔥</h3>{" "}
            </button>{" "}
          </div>
          <div className="All-research-img" > 
          <div>
            <p>All research <br /> start from here</p>
          </div>
          <div>
          <img src="Ar3.png" alt="" />
          </div>
            
          </div>
        </div>
      </div>

      <div className="home-box-container"> 
        <div id="one" className="box first">
          <div className="box-text">
            <div >
              <img src="twitter.png" alt="" />
            </div>
            <p>Cryptopunk - </p>
            <div className="gradientl">
 <p>Search</p>
            </div>
           

            <div className="gradientx">
            <p> x</p>
          </div>
          </div>
          
        </div>


        <div id="two" className="box second">
          <div className="box-text">
            <div >
              <img src="pin.png" alt="" />
            </div>
            <p>Popular Design - </p>
            <div className="gradientl">
 <p>Se</p>
            </div>
           

            <div className="gradientx">
            <p> x</p>
          </div>
          </div>
          
        </div>




        <div id="three" className="box first">
          <div className="box-text">
            <div >
              <img src="fb.png" alt="" />
            </div>
            <p>Product Design - </p>
            <div className="gradientl">
 <p>Se</p>
            </div>
           

            <div className="gradientx">
            <p> x</p>
          </div>
          </div>
          
        </div>


        <div id="four" className="box second">
          <div className="box-text">
            <div id="balll" >
              <img src="ball.png" alt="" />
            </div>
            <p>Elon Musk - </p>
            <div className="gradientl">
 <p>Search</p>
            </div>
           

            <div className="gradientx">
            <p> x</p>
          </div>
          </div>
          
        </div>



      </div>
    </div>
  );
};

export default Home;
