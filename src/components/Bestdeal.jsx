import React from "react";
import "./bestdeal.css";

const Bestdeal = () => {
  return (
    <div className="best-deal-container">
      <h1 id="best-deal-heading">Get your best deal</h1>
      <div className="best-deal-monthly">
        <h2>Monthly</h2>
        <div></div>
        <h2>Yearly</h2>
      </div>
      <div className="cards-container"> 
        <div className="card white">
          <div className="card-heading">
            <h2>Personal</h2>
            <h4>Special First packet for all</h4>
          </div>
          <div className="card-bottom">
          <div>
          <div className="card-bottom-heading">
              <h1>$8</h1>
              <p>/Month</p>
            </div>
            <div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Up to 5 page each group</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Up to 10 group page</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>5 Days group page saved</p>
                </div>
              </div>
          </div>
            <div className="description-button">
             

             
            </div>
            <div className="btn-container">
                <button className="green-btn">Start Free Trial </button>
              </div>
          </div>
        </div>
        <div className="card green">
          <div className="card-heading">
          <h2>Regular</h2>
            <h4>Recommended for personal pro</h4>
          </div>
          <div className="card-bottom">
          <div>
          <div className="card-bottom-heading">
          <h1>$20</h1>
              <p>/Month</p>
            </div>
            <div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Up to 15 page each group</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Download page up to 20 page</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Up to 10 group page</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>15 Days group page saved</p>
                </div>
              </div>
          </div>
            <div className="description-button">
             

             
            </div>
            <div className="btn-container">
                <button className="black-btn">Start Free Trial </button>
              </div>
          </div>
        </div>


        <div className="card white">
          <div className="card-heading">
            <h2>Premium</h2>
            <h4>Packet for Startup & Company</h4>
          </div>
          <div className="card-bottom">
          <div>
          <div className="card-bottom-heading">
              <h1>$48</h1>
              <p>/Month</p>
            </div>
            <div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Unlimited group pages</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Unlimited download page</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Unlimited page each group</p>
                </div>
                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Customize sorting group pages</p>
                </div>

                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>Customize group page name</p>
                </div>


                <div className="card-description">
                  <img src="971.png" alt="" />
                  <p>30 Days group page saved</p>
                </div>

              </div>
          </div>
            <div className="description-button">
             

             
            </div>
            <div className="btn-container">
                <button className="green-btn">Start Free Trial </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
