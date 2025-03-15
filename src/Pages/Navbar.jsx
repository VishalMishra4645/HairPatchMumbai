import React, { useState } from "react";
import "../style/Navbar.css";
import "../ResponsiveCSS/NavbarRps.css";
import img1 from "../images/Navbar/Hercovits_logo.webp";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("Home");
  const [box, setBox] = useState(false);

  const navContent = [
    "Home",
    "About us",
    "Services",
    "Gallery",
    "FAQ",
    "Blog",
    "Contact us",
  ];

  return (
    <>
      <div className="navbar_top">
        <img src={img1} />
        <a href="https://wa.me/8828257966" className="navbar_top_btn1" target="_blank">
          <button >
            <i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Us :
            +918828257966
          </button>
        </a>
        <a href="contact-us">
          <button className="navbar_top_btn2">Make an Appointment</button>
        </a>
      </div>
      <hr />

      <div className="navbar">
        <div className="content">
          {navContent.map((item, index) => {
            return (
              <NavLink
                key={index}
                className={color === item && "active"}
                onClick={() => setColor(item)}
                to={`/${item.toLowerCase().replace(/ /, "-")}`}
              >
                {item}
                {/* {item == "Services" && 
                <div className="dropdown">
                  <a href="">Home</a>
                  <a href="">About</a>
                  <a href="">Contact</a>
                  <a href="">Services</a>
                </div>} */}
              </NavLink>
            );
          })}
        </div>
        <div className="icons">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter-x"></i>
          <i class="bi bi-instagram"></i>
        </div>
      </div>

      <div className="RPS_navbar">
        <img src={img1} />
        <div className="menu">
          <button onClick={() => setBox(!box)}>&#9776;</button>
        </div>
      </div>
      <div className={`nav ${box ? "active1" : ""}`}>
        <ul>
          <li>
            <NavLink to="home" onClick={() => setBox(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about-us" onClick={() => setBox(!box)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="services" onClick={() => setBox(!box)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="gallery" onClick={() => setBox(!box)}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="faq" onClick={() => setBox(!box)}>
              FAQ
            </NavLink>
          </li>
          <li><NavLink to="blog" onClick={() => setBox(!box)}>Blog</NavLink></li>
          <li><NavLink to="contact-us" onClick={() => setBox(!box)}>Contact Us</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
