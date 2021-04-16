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
        <a href="mailto: proznytyp@gmail.com">
          <li className="single-media-icon">
            <img src={email} alt="email icon"></img>
          </li>
        </a>
        <a
          href="https://www.instagram.com/proznytyp"
          rel="noreferrer"
          target="_blank"
        >
          <li className="single-media-icon">
            <img src={instagram} alt="instagram icon"></img>
          </li>
        </a>
        <a
          href="https://www.facebook.com/proznytyp/"
          rel="noreferrer"
          target="_blank"
        >
          <li className="single-media-icon">
            <img src={fb} alt="facebook icon"></img>
          </li>
        </a>
        <a
          href="https://open.spotify.com/artist/2aRfeF2WyFhLOLgzhOR0T4"
          rel="noreferrer"
          target="_blank"
        >
          <li className="single-media-icon">
            <img src={spotify} alt="spotify icon"></img>
          </li>
        </a>
        <a
          href="https://music.apple.com/us/artist/pr%C3%B3%C5%BCny-typ/1512618324"
          rel="noreferrer"
          target="_blank"
        >
          <li className="single-media-icon">
            <img src={apple} alt="apple icon"></img>
          </li>
        </a>
        <a
          href="https://www.youtube.com/channel/UCKm6ngdm2VcDKfc4M7LtJrA"
          rel="noreferrer"
          target="_blank"
        >
          <li className="single-media-icon">
            <img src={yt} alt="youtube icon"></img>
          </li>
        </a>
      </ul>
    </div>
  );
};
