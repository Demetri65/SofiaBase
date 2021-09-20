import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        Testing from the frontend
        <img src={logo} alt="Logo" />
        <p>Testing from the backend: time = {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;