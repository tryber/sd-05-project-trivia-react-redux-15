import React from 'react';
import logo from './trivia.png';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SUA VEZ
        </p>
      </header>
    </div>
  );
}
