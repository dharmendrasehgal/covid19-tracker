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
        <blockquote class="blockquote sticky-top">
          <footer class="blockquote-footer">Designed by <cite title="Dharmendra Sehgal">Dharmendra Sehgal</cite></footer>
        </blockquote>
        <Router>
            <Switch>
              <Route exact path="/">
                <CovidTracker />
              </Route>
              <Route exact path="/covid19-tracker">
                <CovidTracker />
              </Route>
              <Route path="/indian-states">
                <StatesTracker />
              </Route>
            </Switch>
        </Router>
        <p>Data sources from <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">COVID-19 global data (from JHU CSSE for now) as-a-service</a></p>
      </header>
    </div>
  );
}

export default App;
