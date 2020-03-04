import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/ ');
  }

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
          {props.hasUser
            ? <li>
              <NavLink className="nav-link" to="/animals" activeClassName="selected" activeStyle={{ color: "lime" }}>
                Animals
            </NavLink>
            </li>
            : null}
          <li>
            <NavLink className="nav-link" to="/location" activeClassName="selected" activeStyle={{ color: "lime" }}>
              Locations
            </NavLink>
          </li>
          {props.hasUser
            ? <li>
              <NavLink className="nav-link" to="/employee" activeClassName="selected" activeStyle={{ color: "lime" }}>
                Employees
            </NavLink>
            </li>
            : null}
          {props.hasUser
            ? <li>
              <NavLink className="nav-link" to="/owner" activeClassName="selected" activeStyle={{ color: "lime" }}>
                Owners
            </NavLink>
            </li>
            : null}
          {props.hasUser
            ? <li>
              <NavLink className="nav-link" to="/ " onClick={handleLogout} activeClassName="selected" >
                Logout
            </NavLink>
            </li>
            : <li>
            <NavLink className="nav-link" to="/login" activeClassName="selected" activeStyle={{ color: "lime" }}>
              Login
          </NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);