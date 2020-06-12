import React from "react";
import { Link } from "react-router-dom";
import "../nav.css";

function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Checkout</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
