import React, { useState } from "react";
import { albums } from "./songs-data.json";

function Albums() {
  const [songAlbums] = useState(albums);
  return (
    <React.Fragment>
      {songAlbums.map((album, index) => {
        return (
          <div key={index} className="playlist__albumContainer">
            <div className="playlist__albumCoverContainer">
              <img
                className="playlist__albumCover"
                src={album.imageHref}
                alt="albumCovericon"
              />
            </div>
            <div className="playlist__albumInfo">
              <p className="playlist__albumYear">{album.released}</p>
              <p className="playlist__albumName">{album.name}</p>
              <div className="playlist__tracksCount">
                {album.trackCount} Tracks
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Albums;
