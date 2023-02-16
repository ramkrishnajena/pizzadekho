import React from "react";
import Menu from "../elements/Menu";

const Navbar = () => {
  return (
    <header>
      <div className="header__logo">
        <h1>
          Pizza<span>D</span>ekho
        </h1>
      </div>
      <Menu />
    </header>
  );
};

export default Navbar;
