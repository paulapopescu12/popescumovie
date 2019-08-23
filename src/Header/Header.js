import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { API_key } from "../constants.js";

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo-image" src={props.logoImage} alt="" />
      </div>
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="list-item" key={item.link}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
