import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlaylistDetails = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/playlists/${id}`)
      .then(response => response.json())
      .then(data => setPlaylist(data));
  }, [id]);

  return playlist ? (
    <div>
      <h2>{playlist.name}</h2>
      <ul>
        {playlist.songs && playlist.songs.map(song => (
          <li key={song.id}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PlaylistDetails;