import "./navbar.css";
import logo from "./../../asset/logo.png";

import Drawer from "@mui/material/Drawer";

import React, { Fragment } from "react";
import menuIcon from "./../../asset/sidebar-icon.png";

const Navbar = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const onClose = () => {
    setOpenSideBar(false);
  };
  const onOpen = () => {
    setOpenSideBar(true);
  };
  return (
    <Fragment>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-row">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-list">
              <a href="#ourservices">Our Services</a>

              <a href="#whyus">Why Us</a>

              <a href="#testimonial">Testimonial</a>

              <a href="#faq">FAQ</a>
            </div>
            <button onClick={onOpen} className="nav-button">
              <img className="menu-icon" src={menuIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <Drawer anchor={"right"} open={openSideBar} onClose={onClose}>
        <div>
          <h3>BCR</h3>
          <h3 onClick={onClose}>X</h3>
        </div>
        <div>
          <p>
            <a href="#ourservices">Our Services</a>
          </p>
          <p>
            <a href="#whyus">Why us</a>
          </p>
          <p>
            <a href="#testimonial">Testimonial</a>
          </p>
          <p>
            <a href="#faq">FAQ</a>
          </p>
        </div>
      </Drawer>
    </Fragment>
  );
};

export default Navbar;
