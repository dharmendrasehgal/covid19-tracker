import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CovidTracker from './covid-tracker/covid-tracker';

function App() {
  return (
    <div className="App m-5">
      <header className="App-header">
        <img src={logo} hidden className="App-logo" alt="logo" />
        <h1>COVID 19, Coronavirus Tracker</h1>
        <CovidTracker></CovidTracker>
        <p>Data sources from <a href="https://github.com/mathdroid/covid-19-api" target="_blank">COVID-19 global data (from JHU CSSE for now) as-a-service</a></p>
      </header>
    </div>
  );
}

export default App;
