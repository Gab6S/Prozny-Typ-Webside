import React from "react";
import copyright from "../assets/copyright.svg";
import "../scss/_footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={copyright} alt="copyright"></img>
      <p>Gabriela Strzelec</p>
    </div>
  );
};
