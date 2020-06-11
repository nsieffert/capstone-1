import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <Link to="/home">
          <li>Products</li>
        </Link>
        <Link to="/cart">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
