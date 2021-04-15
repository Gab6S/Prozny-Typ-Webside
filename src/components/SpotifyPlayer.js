import React from "react";
import "../scss/_spotify-player.scss";

export const SpotifyPlayer = () => {
  return (
    <div className="spotify">
      <iframe
        src="https://open.spotify.com/embed/playlist/0zy9NsZpCIrWsRPTfpHZAx"
        width="300"
        height="160"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};
