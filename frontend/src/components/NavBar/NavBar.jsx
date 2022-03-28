import React from "react";
import { MdAddBox, MdViewSidebar } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header className="header grid">
      <div className="container center">
        <nav className="nav flex ">
          <div className="logo flex pointer">
            <FaLaptopHouse className="logo__img" />
            <Link to="/">Keja</Link>
          </div>
          <ul className="nav__list flex">
            <li className="nav__list-item flex">
              <Link to="/add">Add</Link>
              <MdAddBox className="nav__list-icon" />
            </li>
            {/* <li className="nav__list-item flex">
              <Link to="/all">View All</Link>
              <MdViewSidebar className="nav__list-icon" />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
