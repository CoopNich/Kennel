import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink className="nav-link" to="/ " activeClassName="selected" activeStyle={{ color: "lime" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/animals" activeClassName="selected" activeStyle={{ color: "lime" }}>
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/location" activeClassName="selected" activeStyle={{ color: "lime" }}>
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/employee" activeClassName="selected" activeStyle={{ color: "lime" }}>
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/owner" activeClassName="selected" activeStyle={{ color: "lime" }}>
              Owners
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);