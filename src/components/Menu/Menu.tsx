import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Menu.css';
import '../Navbar/Navbar.css'
//importare video

export const Menu: React.FC = () => {
  const { darkMode, fontSize } = useContext(ThemeContext);

  const getFontSizeStyle = () => {
    return {
      fontSize: `${fontSize}px`,
    };
  };

  return (
    <div className={`video-container menu ${darkMode ? 'dark' : 'light'}`} style={getFontSizeStyle()}>
      <video className="video-background" /* controls */ autoPlay loop muted>
        <source src={require('../../assets/video.mp4')} type="video/mp4"/>
      </video>
    </div>
  );
};
