import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlaylistList = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/playlists')
      .then(response => response.json())
      .then(data => setPlaylists(data));
  }, []);

  const deletePlaylist = (id) => {
    fetch(`http://localhost:3001/playlists/${id}`, { method: 'DELETE' })
      .then(() => setPlaylists(playlists.filter(playlist => playlist.id !== id)));
  };

  return (
    <div>
      <h2>Playlists</h2>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            <button onClick={() => deletePlaylist(playlist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;