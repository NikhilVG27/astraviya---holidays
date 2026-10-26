import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">

        <div className="booking-container">

          {/* Tabs */}
          <div className="top-tabs">
            <span className="active">✈ Flights</span>
            <span>🏨 Hotels</span>
            <span>🚆 Trains</span>
            <span>🚌 Buses</span>
            <span>🚕 Cabs</span>
          </div>

          {/* Trip Type */}
          <div className="trip-options">
            <label><input type="radio" name="trip" defaultChecked /> One Way</label>
            <label><input type="radio" name="trip" /> Round Trip</label>
            <label><input type="radio" name="trip" /> Multi City</label>
          </div>

          {/* Booking Row */}
          <div className="booking-row">

            <div className="box">
              <p>From</p>
              <h2>Delhi</h2>
              <span>DEL, Delhi Airport</span>
            </div>

            <div className="box">
              <p>To</p>
              <h2>Bengaluru</h2>
              <span>BLR Airport</span>
            </div>

            <div className="box">
              <p>Departure</p>
              <h2>31 Mar'26</h2>
              <span>Tuesday</span>
            </div>

            <div className="box">
              <p>Return</p>
              <span>Add Return</span>
            </div>

            <div className="box">
              <p>Travellers</p>
              <h2>1 Traveller</h2>
              <span>Economy</span>
            </div>

          </div>

          {/* Fare Options */}
          <div className="fare-options">
            <span className="active">Regular</span>
            <span>Student</span>
            <span>Senior Citizen</span>
            <span>Armed Forces</span>
          </div>

          {/* Search */}
          <div className="search-wrapper">
            <button>SEARCH</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;