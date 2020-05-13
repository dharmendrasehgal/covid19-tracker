import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CovidTracker from './covid-tracker/covid-tracker';
import StatesTracker from './covid-tracker/states-tracker';

function App() {
  return (
    <div className="App m-5">
      <header className="App-header">
        <Router>
            <Switch>
              <Route exact path="/">
                <CovidTracker />
              </Route>
              <Route exact path="/covid19-tracker">
                <CovidTracker />
              </Route>
              <Route path="/world-tracker">
                <StatesTracker />
              </Route>
            </Switch>
        </Router>
      </header>
      <nav class="navbar fixed-bottom navbar-light bg-light">
       <span className="navbar-brand">Data sources from <a className="navbar-item" href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">COVID-19 global data (from JHU CSSE for now) as-a-service</a></span>
      </nav>
    </div>
  );
}

export default App;
