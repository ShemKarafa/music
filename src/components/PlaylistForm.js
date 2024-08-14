import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaylistForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/playlists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Playlist Name"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PlaylistForm;