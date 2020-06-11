import React from "react";
import "../header.css";

//fixed header
function Header() {
  return (
    <div className="header">
      <h1>Two Veterans Knives</h1>
      <img
        className="logo"
        src="http://twoveteransknives.com/wp-content/uploads/2020/06/TVK-LOGO-white-300x149.jpg"
        alt="mil"
      />
      <img
        className="servLogos"
        src="http://twoveteransknives.com/wp-content/uploads/2020/06/armylogo.jpg"
        alt="mil"
      />
      <img
        className="servLogos"
        src="http://twoveteransknives.com/wp-content/uploads/2020/06/airforceloo.jpg"
        alt="mil"
      />
      <img
        className="servLogos"
        src="http://twoveteransknives.com/wp-content/uploads/2020/06/navylogo.jpg"
        alt="mil"
      />
      <img
        className="servLogos"
        src="http://twoveteransknives.com/wp-content/uploads/2020/06/marinecorplogo.jpg"
        alt="mil"
      />
      <img
        className="servLogos"
        src="http://twoveteransknives.com/wp-content/uploads/2020/06/coastguardlogo.jpg"
        alt="mil"
      />
    </div>
  );
}

export default Header;
