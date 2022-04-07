import React, { useState } from 'react';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = ({account}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p><b>BLOCKRAGE</b></p>
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Account:</p>
        <button type="button"> <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + account}>{account.substring(0,6)}...{account.substring(38,42)}</a></button>
      </div>
    </div>
  );
};

export default Navbar;
