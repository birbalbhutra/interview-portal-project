import React from "react";
import "../navbar/Navbar.css";

function Navbar({ changeView }) {
  return (
    <header className="nav-links">
      <div className="title">Interview Portal</div>
      <ul>
        <li>
          <a href="#" onClick={() => changeView("whiteboard")}>
            ScratchPad
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeView("compiler")}>
            Compiler
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
