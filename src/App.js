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
        <blockquote className="blockquote sticky-top">
          <footer className="blockquote-footer">Designed by <cite title="Dharmendra Sehgal">Dharmendra Sehgal</cite></footer>
        </blockquote>
        <Router>
            <Switch>
              <Route exact path="/">
                <StatesTracker />
              </Route>
              <Route exact path="/indian-states">
                <StatesTracker />
              </Route>
              <Route path="/covid19-tracker">
                <CovidTracker />
              </Route>
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
