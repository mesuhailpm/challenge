import React from "react";
import logo from "../assets/images/logo.png";
import fbLogo from "../assets/images/fbvector.png";
import twitterLogo from "../assets/images/twittervector.png";
import linkedinLogo from "../assets/images/linkedinvector.png";

const Navbar = () => {
  return (
    <nav className=" font-ralway w-full">
      <div className="nav-inner-container flex justify-between items-center">
        <img src={logo} alt="logo" width={116} height={78} />
        <div className="sections flex gap-3">
          <button><h4>About us</h4></button>
          <button><h4>Contact-us</h4></button>
          <button><h4>Community</h4></button>
          <button><h4>Courses</h4></button>
        </div>
        <div className="social flex items-center">
          <a href="#" className="link-button">
            <img src={fbLogo} alt="facebook logo" srcset="" />
          </a>
          <a href="#" className="link-button">
            <img src={twitterLogo} alt="facebook logo" srcset="" />
          </a>
          <a href="#" className="link-button">
            <img src={linkedinLogo} alt="facebook logo" srcset="" />
          </a>
        </div>

        <button className="register bg-orange-500 text-white px-5 py-3 flex flex-col items-center justify-center">
          REGISTER
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
