import React, {createContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {

axios.get('http://localhost:5000/artists/rock')
.then(response => {
  console.log(response.data);
  return response.data;
})
.catch(error => {
  console.error('Errore durante la richiesta:', error);
});

axios.get('http://localhost:5000/artists/metal')
.then(response => {
  console.log(response.data);
  return response.data;
})
.catch(error => {
  console.error('Errore durante la richiesta:', error);
});

axios.get('http://localhost:5000/artists/pop')
.then(response => {
  console.log(response.data);
  return response.data;
})
.catch(error => {
  console.error('Errore durante la richiesta:', error);
});

  return (
    <div className='app'>
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </BrowserRouter>
    </div>
  );
};

export default App;