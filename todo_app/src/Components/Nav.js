import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

export default function Nav() {
  return (
    <div>
      <nav id="navbar">
        <h2>Todo Manager</h2>
        <ul>
          <li>
            <Link id="pod" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="pod" to="/add">
              Add Todo
            </Link>
          </li>
          <li>
            <Link id="pod" to="/edit">
              Edit Todo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
