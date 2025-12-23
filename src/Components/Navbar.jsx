import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar" style={{borderBottom: '1px solid var(--border)', padding: '15px 0'}}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{color: 'var(--primary)'}}>StudyZen</h1>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
          <button onClick={() => setDarkMode(!darkMode)} style={{background: 'none', border: 'none', cursor: 'pointer', color: 'inherit'}}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}