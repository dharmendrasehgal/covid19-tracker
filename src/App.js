import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CovidTracker from './covid-tracker/covid-tracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} hidden className="App-logo" alt="logo" />
        <h1>COVID 19, Coronavirus Tracker</h1>
        <p></p>
        <CovidTracker></CovidTracker>
      </header>
    </div>
  );
}

export default App;
