import React from "react";
import "./opentab.css";

const Opentab = () => {
  return (
    <div className="open-tab-container">
      <h1>Open new tabs is sh*t </h1>
      <div className="box-container">  
      <div className="left-img">
        <div className="left-arrow-img">
        {/* <img  src="lefta.png" alt="left-text" /> */}
        <img
  src="lefta.png"
  srcset=" leftaa.png 768w, lefta.png 1024w"
  sizes=" (max-width: 768px) 100vw, 100vw"
  alt="Ima description"
  style={{ height: '35px', width: '29px' }}
/>

        </div>
<div>
  <p>solution for <br /> discover a trend</p>
</div>
      </div>
        
        <div className="open-tab-box">
        <div  className="box ">
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
        </div>
        <div className="right-img" >
        <div>
        <p>You just need <br /> one tab now</p>
      </div>

          <div className="right-arrow-img">
          <img
  src="righta.png"
  srcset=" rightaa.png 768w, righta.png 1024w"
  sizes=" (max-width: 768px) 100vw, 100vw"
  alt="Ima description"
  style={{ height: '45px', width: '40px' }}
/>
          </div>
     
        </div>
       
      </div>
      <div id="solution-text">
      <p >A solution for your browser tabs and don’t make your device get slower over time. Get <br />ease and faster to discover a trend with just one tab.</p>
      </div>
      
    </div>
  );
};

export default Opentab;
