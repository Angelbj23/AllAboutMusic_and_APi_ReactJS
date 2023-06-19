import React, { useState, useContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './Navbar.css';
import { ThemeContext } from '../../context/ThemeContext';
import { Menu } from '../Menu/Menu';
import { Rock } from '../Artists/Rock/Rock';
import { Metal } from '../Artists/Metal/Metal';
import { Pop } from '../Artists/Pop/Pop';
import { Credits } from '../Credits/Credits';
import { All } from '../Artists/All/All';

export const Navbar = () => {
  const { darkMode, toggleDarkMode, increaseFontSize, decreaseFontSize } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const modeButtonText = darkMode ? 'Light Mode 🔆 ' : 'Dark Mode 🌙';

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <h1 className="navbar-brand">AllAboutMusic®</h1>
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
            <ul className="navbar-nav d-flex flex-row flex-wrap align-items-center d-lg-flex ml-4 pb-3 p-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/artists/rock">Rock</Link>
              </li>
              <li className="nav-item">
                <Link to="/artists/metal">Metal</Link>
              </li>
              <li className="nav-item">
                <Link to="/artists/pop">Pop</Link>
              </li>
              <li className="nav-item">
                <Link to="/artists/all">All</Link>
              </li>
              <li className="nav-item">
                <Link to="/credits">Credits</Link>
              </li>
            </ul>
          </div>

          <div>
            <button onClick={toggleDarkMode}>{modeButtonText} </button>
            <button className='btn-navbar' onClick={increaseFontSize}>+</button>
            <button className='btn-navbar' onClick={decreaseFontSize}>-</button>
          </div>

          <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/artists/all" element={<All />} />
        <Route path="/artists/rock" element={<Rock />} />
        <Route path="/artists/metal" element={<Metal />} />
        <Route path="/artists/pop" element={<Pop />} />
        <Route path="/credits" element={<Credits />} />
        <Route></Route>
      </Routes>
    </>
  );
};
