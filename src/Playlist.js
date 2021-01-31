import React, { useState } from "react";
import trackIcon from "./tracksIcon.png";
import albumIcon from "./albumIcon.png";
import Tracks from "./Tracks";
import Albums from "./Albums";

function Playlist() {
  const [tracksList] = useState([{}]);
  const [searchInput, setSearchInput] = useState("");
  const [isTracksActive, setIsTracksActive] = useState(true);

  if (!tracksList) return <h1>Loading</h1>;
  else
    return (
      <div className="playlist">
        <div className="playlist__topContainer">
          <input
            type="text"
            className="playlist__searchBox"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="playlist__buttonsContainer">
          <button
            onClick={() => setIsTracksActive(true)}
            className={`playlist__trackButton ${
              isTracksActive ? "playlist__buttnSelected" : ""
            }`}
          >
            <img src={albumIcon} alt="trackIcon" />
            <p>Albums</p>
          </button>
          <button
            onClick={() => setIsTracksActive(false)}
            className={`playlist__albumsButton ${
              isTracksActive ? "" : "playlist__buttnSelected"
            }`}
          >
            <img src={trackIcon} alt="albumIcon" />
            <p>Tracks</p>
          </button>
        </div>
        {isTracksActive ? <Albums /> : <Tracks />}
      </div>
    );
}

export default Playlist;
