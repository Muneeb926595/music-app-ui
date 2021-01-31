import React from 'react';
import './App.css';
import Header from './Header';
import Playlist from './Playlist';

function App() {
  return (
    <div className="app">
      <div className="app__musicPlayer">
        <Header />
        <div className="app__bottom">
          <div className="app__singerName">Cody 90</div>
          <div className="app__playerContainer">
            <img className="app__songPauseButton" src={require('./pause.png')} alt="pauseIcon" />
            <div className="app__songIno">
              <p className="app__songName">Ownl Vision</p>
              <p className="app__albumName">Temple Of Shadows</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app__musicPlaylist">
        <Playlist />
      </div>
    </div>
  );
}

export default App;
