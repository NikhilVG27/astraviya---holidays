import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Contact */}
        <div className="footer-section">
          <h3>CONTACT</h3>
          <p>📍 near Ramamurthy Nagar, Bengaluru, Karnataka 560043</p>
          <p>📞 (080)-4122 3100</p>
          <p>✉️ Astraviya@gmail.com</p>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h3>EXPLORE</h3>
          <p>Vacations</p>
          <p>City Breaks</p>
          <p>Cruises</p>
          <p>Destinations</p>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>COMPANY</h3>
          <p>Traveling</p>
          <p>About</p>
          <p>Success</p>
          <p>Information</p>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3>HELP CENTER</h3>
          <p>Contact</p>
          <p>Feedback</p>
          <p>Support</p>
          <p>Terms</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <h2 className="logo">TOURDAILY</h2>

        <div className="social-icons">
  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" />
  <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="instagram" />
  <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="linkedin" />
   <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube" />
</div>
      </div>

      <div className="footer-copy">
        © 2026 Travel Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;