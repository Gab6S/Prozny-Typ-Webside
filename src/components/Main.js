import React from "react";
import { Navigation } from "./Navigation";
import { ArtistName } from "./ArtistName";
import "../scss/_main-desktop.scss";
import { MediaIconsBar } from "./MediaIconsBar";
import { Footer } from "./Footer";
import { SpotifyPlayer } from "./SpotifyPlayer";

export const Main = () => {
  return (
    <div class="full-screen-bg">
      <Navigation />
      <ArtistName />
      {/* <SpotifyPlayer /> */}
      <MediaIconsBar />
      {/* <Footer /> */}
    </div>
  );
};
