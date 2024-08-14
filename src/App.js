import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlaylistList from './components/PlaylistList';
import PlaylistForm from './components/PlaylistForm';
import PlaylistDetails from './components/PlaylistDetails';
import About from './components/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PlaylistList />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<PlaylistForm />} />
        <Route path="/playlist/:id" element={<PlaylistDetails />} />
      </Routes>
    </Router>
  );
}

export default App;