import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Add new contact</button>
        </Link>
      </div>
    </nav>
  );
};
