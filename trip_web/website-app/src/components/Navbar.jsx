import React, { useState } from "react";
import "./Navbar.css";

import logo from "../assets/logo.png";

import { FaHome, FaSuitcase, FaHeart, FaUserCircle } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo Image */}
        <div className="logo">
          <img src={logo} alt="AstraViya" />
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <span><FaHome /> Home</span>
          <span><MdBusinessCenter /> MyBiz</span>
          <span><FaHeart /> Wishlist</span>
          <span><FaSuitcase /> My Trips</span>
          <span><IoCall /> Contact</span>

          <div className="profile">
            <FaUserCircle />
            Profile
          </div>
        </div>

      </div>
    </nav>
  );
}