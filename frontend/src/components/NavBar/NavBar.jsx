import React from "react";
import { MdAddBox } from "react-icons/md";
import { BsChatLeftQuote } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header className="header grid">
      <div className="container center">
        <nav className="nav flex ">
          <div className="logo flex pointer">
            <BsChatLeftQuote className="logo__img" />
            <Link to="/">Quotes </Link>
          </div>
          <ul className="nav__list flex">
            <li className="nav__list-item flex">
              <Link to="/add">Add</Link>
              <MdAddBox className="nav__list-icon" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
