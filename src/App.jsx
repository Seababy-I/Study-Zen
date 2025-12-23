import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TodoList from './Components/TodoList';
import Timer from './Components/Timer';
import Quote from './Components/Quote';
import About from './Components/About';
import Contact from './Components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={
          <main className="container">
            <Hero />
            <div className="grid">
              <TodoList />
              <Timer />
            </div>
            <Quote />
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}