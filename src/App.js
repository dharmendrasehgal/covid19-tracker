import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CovidTracker from './covid-tracker/covid-tracker';
import StatesTracker from './covid-tracker/states-tracker';

function App() {
  return (
    <div className="App m-5">
      <header className="App-header">
        <img src={logo} hidden className="App-logo" alt="logo" />
        <CovidTracker />
        <StatesTracker />
        <p>Data sources from <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">COVID-19 global data (from JHU CSSE for now) as-a-service</a></p>
      </header>
    </div>
  );
}

export default App;
