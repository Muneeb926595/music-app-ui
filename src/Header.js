import React from 'react';
import logo from './logo.png';
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="appLogo" />
            <div className="header__linksContainer">
                <ul className="header__links">
                    <li>Music</li>
                    <li>Charts</li>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Live</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;