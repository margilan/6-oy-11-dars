import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="wrapper">
        <div className="uls">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="logo">
          <span>Landing</span>
        </div>
        <div className="btn">
          <button>Buy now</button>
        </div>
      </div>
    </>
  );
}

export default Header;
