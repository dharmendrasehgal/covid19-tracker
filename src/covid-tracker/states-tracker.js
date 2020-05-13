import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../logo.svg';
import { Item } from '../item/item';

class CovidTracker extends React.Component {
  state = {
    feeds: null,
    nationwide: null,
    worldwide: null
  }
  componentDidMount() {
    axios.get(`https://covid19.mathdro.id/api/confirmed`)
    .then(res => {
        const feeds = res.data;
        this.setState({feeds: feeds});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
    axios.get(`https://covid19.mathdro.id/api/countries/IN`)
    .then(res => {
        const nationwide = res.data;
        this.setState({nationwide: nationwide});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
    axios.get(`https://covid19.mathdro.id/api`)
    .then(res => {
        const worldwide = res.data;
        this.setState({worldwide: worldwide});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
  }
  render() {
    return <div className="covid-wrapper">
           {!this.state.feeds ? <img src={logo} className="App-logo" alt="logo" /> :
           <section>
              <h5>COVID 19, Coronavirus Tracker</h5>
              <nav className="navbar sticky-top navbar-light bg-light">
                 <Link to="/covid19-tracker" className="navbar-brand">
                 <u>Indian Cases</u></Link>
                 <blockquote className="blockquote sticky-top">
                    <footer className="blockquote-footer">Designed by <cite title="Dharmendra Sehgal">Dharmendra Sehgal</cite></footer>
                 </blockquote>
              </nav>
              {!this.state.worldwide ? null :
              <article>
                 <div className="row mb-5">
                    <div className="col-sm-4 mb-5">
                       <div className="card bg-danger">
                          <div className="card-body text-light">
                             <h3 className="card-title">{ this.state.worldwide.confirmed.value }</h3>
                             <p className="card-text">Confirmed</p>
                          </div>
                       </div>
                    </div>
                    <div className="col-sm-4 mb-5">
                       <div className="card bg-success">
                          <div className="card-body text-light">
                             <h3 className="card-title">{ this.state.worldwide.recovered.value }</h3>
                             <p className="card-text">Recovered</p>
                          </div>
                       </div>
                    </div>
                    <div className="col-sm-4 mb-5">
                       <div className="card bg-secondary">
                          <div className="card-body text-light">
                             <h3 className="card-title">{ this.state.worldwide.deaths.value }</h3>
                             <p className="card-text">Death</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </article>
              }
              <div className="text-center">
                 <table className="m-auto">
                    <thead className="">
                       <tr>
                          <th className="text-left" scope="col">Country/Region</th>
                          <th scope="col">Confirmed</th>
                          <th scope="col">Deaths</th>
                          <th scope="col">Recovered</th>
                       </tr>
                    </thead>
                    <tbody>
                       {this.state.feeds.map((item, index) => {
                       return (
                       <Item {...item} key={index} />
                       )
                       })}
                    </tbody>
                 </table>
              </div>
           </section>
           }
        </div>
  }
}
export default CovidTracker;