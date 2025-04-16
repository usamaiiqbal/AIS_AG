import React from "react";
import { FiMenu } from "react-icons/fi";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <button className="header__toggle" onClick={onToggleSidebar}>
        <FiMenu />
      </button>
      <h1 className="header__title">A.I.S AG</h1>
    </header>
  );
};

export default Header;
