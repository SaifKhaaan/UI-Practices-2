import React from 'react'
import './pageheader.css';

const PagerHeader = () => {
  return (
    <div>
    <nav className="navbar">
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
      <div className="sign-up">
        <span>Login</span>
        <button>Register</button>
      </div>
    </nav>
    </div>
  )
}

export default PagerHeader
