import React from "react";
import { Link } from "react-router-dom";
import "../scss/_navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation-bar">
      <ul className="single-nav">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/nowości"
            style={{ textDecoration: "none", color: "black" }}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to="/koncerty"
            style={{ textDecoration: "none", color: "black" }}
          >
            Koncerty
          </Link>
        </li>
        <li>
          <Link to="/muzyka" style={{ textDecoration: "none", color: "black" }}>
            Muzyka
          </Link>
        </li>
        <li>
          <Link to="/wideo" style={{ textDecoration: "none", color: "black" }}>
            Wideo
          </Link>
        </li>
        <li>
          <Link
            to="/dlaprasy"
            style={{ textDecoration: "none", color: "black" }}
          >
            Dla prasy
          </Link>
        </li>
        <li>
          <Link to="/omnie" style={{ textDecoration: "none", color: "black" }}>
            O mnie
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            style={{ textDecoration: "none", color: "black" }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};
