import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Credits.css';
import '../Navbar/Navbar.css'

export const Credits: React.FC = () => {
  const { darkMode, fontSize } = useContext(ThemeContext);

  const getFontSizeStyle = () => {
    return {
      fontSize: `${fontSize}px`,
    };
  };

  return (
    <div className={`d-flex align-items-center p-4 credits ${darkMode ? 'dark' : 'light'}`} style={getFontSizeStyle()}>
      <h1> 
        Thank you for visiting All About Music, your ultimate destination for everything related to music. We would like to acknowledge and express our gratitude to the following individuals and organizations for their contributions and support in making this website possible:

        Creative Direction:

        John Smith
        Mary Johnson
        Design and User Interface:

        Emily Davis
        Michael Thompson
        Development Team:

        David Wilson
        Sarah Roberts
        James Anderson
        Content Writers:

        Jessica Brown
        Mark Miller
        Emma Davis
        Photography and Visuals:

        Robert Johnson
        Jennifer Adams
        Music Recommendations:

        Rachel Turner
        Matthew Collins
        Social Media Management:

        Samantha White
        Jonathan Green
        Marketing and Promotion:

        Emma Lee
        Christopher Harris
        Quality Assurance:

        Laura Robinson
        Benjamin Reed
        Special Thanks:

        All the music artists, bands, and record labels for their incredible talent and music.
        Our loyal audience for their continuous support and love for music.
        We are grateful to each and every individual who has played a part in making All About Music a vibrant and informative platform for music enthusiasts worldwide. Your contributions have helped us in creating a unique and enjoyable experience for our visitors.
        <br></br>
        <br></br>
        Thank you,
        The All About Music Team.
      </h1>
    </div>
  );
};
