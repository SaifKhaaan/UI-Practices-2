import React from 'react';
import './pageheader.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const PagerHeader = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <nav className="nav"  ref={navRef}>
        <div className="logo">
          <img src="Logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">How it Works</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Solution</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </ul>
          {/* Responsive Navbar Toggle Button */}
        
          <button onClick={showNav} className="nav-btn nav-close-btn">
              <FaTimes />
            </button>
        <div className="sign-up">
          <span>Login</span>
          <button>Register</button>
        </div>

      


      </nav>
      <div className="header-button-container">
        <button className="nav-btn" onClick={showNav}>
          Menu
          <FaBars />{" "}
        </button></div>
      {/* Update your CSS to style the toggle button and responsive behavior */}
    </div>
  );
};

export default PagerHeader;
















// import React from 'react'
// import './pageheader.css';

// const PagerHeader = () => {
//   return (
//     <div>
//     <nav className="navbar">
//       <div className="logo">
//         <img src="Logo.png" alt="logo" />
//       </div>
//       <ul className="nav-links">
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">How it Works</a>
//         </li>
//         <li>
//           <a href="#">Pricing</a>
//         </li>
//         <li>
//           <a href="#">Solution</a>
//         </li>
//         <li>
//           <a href="#">Features</a>
//         </li>
//       </ul>
//       <div className="sign-up">
//         <span>Login</span>
//         <button>Register</button>
//       </div>
//     </nav>
//     </div>
//   )
// }

// export default PagerHeader
