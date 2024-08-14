import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Playlists</Link></li>
      <li><Link to="/create">Create Playlist</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default NavBar;