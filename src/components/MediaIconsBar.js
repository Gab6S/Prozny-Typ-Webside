import React from "react";
import apple from "../assets/apple.svg";
import email from "../assets/emailme.svg";
import instagram from "../assets/insta.svg";
import fb from "../assets/fb.svg";
import spotify from "../assets/spotify.svg";
import yt from "../assets/yt.svg";
import "../scss/_media-icons-bar.scss";

export const MediaIconsBar = () => {
  return (
    <div>
      <ul className="media-icons-bar">
        <li className="single-media-icon">
          <img src={email}></img>
        </li>
        <li className="single-media-icon">
          <img src={instagram}></img>
        </li>
        <li className="single-media-icon">
          <img src={fb}></img>
        </li>
        <li className="single-media-icon">
          <img src={spotify}></img>
        </li>
        <li className="single-media-icon">
          <img src={apple}></img>
        </li>
        <li className="single-media-icon">
          <img src={yt}></img>
        </li>
      </ul>
    </div>
  );
};
