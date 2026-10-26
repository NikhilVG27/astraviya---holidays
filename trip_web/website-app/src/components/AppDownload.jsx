import React from "react";
import "./AppDownload.css";
import logo from "../assets/AstraViya Holidays1.jpg";

const AppDownload = () => {
  return (
    <div className="app-download-container">

      {/* LEFT SIDE */}
      <div className="app-download-left">

        {/* TOP SECTION */}
        <div className="top-section">
          <img src={logo} alt="logo" className="logo-img" />

          <div className="text-section">
            <h2 className="main-title">Download App Now !</h2>
            <p className="offer-text">
              Use code <b>WELCOME</b> and get <b>FLAT 12% OFF*</b> on your first booking
            </p>
          </div>
        </div>

        {/* INPUT */}
        <div className="input-box">
          <span className="country-code">+91</span>
          <input type="text" placeholder="Enter Mobile number" />
          <button>GET APP LINK</button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="app-download-right">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="store-btn"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="store-btn"
        />
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=DownloadApp"
          alt="QR Code"
          className="qr-code"
        />
      </div>

    </div>
  );
};

export default AppDownload;