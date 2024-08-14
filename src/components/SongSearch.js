import React, { useState } from 'react';

const SongSearch = ({ onAddSong }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchSongs = () => {
    fetch(`https://itunes.apple.com/search?term=${query}&entity=song`)
      .then(response => response.json())
      .then(data => setResults(data.results));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs"
      />
      <button onClick={searchSongs}>Search</button>
      <ul>
        {results.map(song => (
          <li key={song.trackId}>
            {song.trackName} - {song.artistName}
            <button onClick={() => onAddSong(song)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongSearch;