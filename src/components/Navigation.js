import React from "react";
import "../scss/_navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation-bar">
      <ul className="single-nav">
        <li>Home</li>
        <li>News</li>
        <li>Koncerty</li>
        <li>Muzyka</li>
        <li>Wideo</li>
        <li>Dla prasy</li>
        <li>O mnie</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
};
