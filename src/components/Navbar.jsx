import React from "react";
import logo from "../assets/logo_main-48JSqkPZ.png";
import MenuBars from "../assets/bars-Zozji123.png";

import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg Nav_main">
        <div className="container nav_small">
          <a className="logo" href="#">
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={MenuBars} alt="" />
          </button>
          <div
            className="navbar-collapse py-3 py-md-0 collapse"
            id="navbarSupportedContent"
            style=""
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-2 py-md-3 py-lg-0">
              <li
                className="nav-item aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li
                className="nav-item aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li
                className="nav-item aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>{" "}
              <li
                className="nav-item aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Memberships
                </a>
              </li>{" "}
              <li
                className="nav-item aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
            </ul>
            <form className="d-flex ms-lg-4" role="search">
              <button
                type="button"
                className="btn1 aos-init aos-animate"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
