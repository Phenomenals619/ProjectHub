import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// You can add other pages as needed

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* More routes */}
    </Routes>
  );
}
