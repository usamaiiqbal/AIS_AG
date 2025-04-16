import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onLinkClick }) => (
  <aside className={`sidebar ${isOpen ? "open" : ""}`}>
    <nav>
      <ul>
        <li>
          <NavLink to="/" end onClick={onLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={onLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={onLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
