import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../logo.svg';

class StatesTracker extends React.Component {
  state = {
    feeds: null
  }
  componentDidMount() {
    axios.get(`https://api.covid19india.org/data.json`)
    .then(res => {
        const feeds = res.data ? res.data: null;
        this.setState({feeds: feeds});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
  }
  render() {
    return <div className="covid-wrapper">
        {!this.state.feeds ? <img src={logo} className="App-logo" alt="logo" /> :
        <section className="text-center">
           <h4>COVID 19, Coronavirus Tracker in India</h4>
           <nav className="navbar sticky-top navbar-light bg-light">
            <Link to="/world-tracker" className="navbar-brand">
              <u>Worldwide Cases</u></Link>
            <blockquote className="blockquote sticky-top">
              <footer className="blockquote-footer">Designed by <cite title="Dharmendra Sehgal">Dharmendra Sehgal</cite></footer>
            </blockquote>
           </nav>
           {this.state.feeds.statewise.map((item, index) => {
           return (item.state === 'Total' &&
           <article className="row mb-5" key={index}>
              <div className="col-sm-3">
                 <div className="card bg-danger">
                    <div className="card-body p-3 text-light">
                       <p>Confirmed</p>
                       <h6><span>{item.deltaconfirmed > 0 && '[+'+ item.deltaconfirmed +']'}</span></h6>
                       <h5>{ item.confirmed }</h5>
                    </div>
                 </div>
              </div>
              <div className="col-sm-3">
                 <div className="card bg-primary">
                    <div className="card-body p-3 text-light">
                       <p>Active</p>
                       <h6><span><br /></span></h6>
                       <h5>{ item.active }</h5>
                    </div>
                 </div>
              </div>
              <div className="col-sm-3">
                 <div className="card bg-success">
                    <div className="card-body p-3 text-light">
                       <p>Recovered</p>
                       <h6><span>{item.deltarecovered > 0 && '[+'+ item.deltarecovered +']'}</span></h6>
                       <h5>{ item.recovered }</h5>
                    </div>
                 </div>
              </div>
              <div className="col-sm-3">
                 <div className="card bg-secondary">
                    <div className="card-body p-3 text-light">
                       <p>Deceased</p>
                       <h6><span>{item.deltadeaths > 0 && '[+'+ item.deltadeaths +']'}</span></h6>
                       <h5>{ item.deaths }</h5>
                    </div>
                 </div>
              </div>
           </article>
           )
           })
           }
           {!this.state.feeds.statewise ? null :
           <article>
              <div className="text-center">
                 <table className="m-auto">
                    <thead>
                       <tr>
                          <th className="text-default text-left" scope="col">State/UT</th>
                          <th className="text-default" scope="col">Confirmed</th>
                          <th className="text-default" scope="col">Active</th>
                          <th className="text-default" scope="col">Recovered</th>
                          <th className="text-default" scope="col">Deceased</th>
                       </tr>
                    </thead>
                    <tbody>
                       {this.state.feeds.statewise.map((item, index) => {
                       return (item.state !== 'Total' &&
                       <tr key={index}>
                          <td className="text-muted text-left">{ item.state }</td>
                          <td className="text-muted text-right"><span className="text-danger">{item.deltaconfirmed > 0 && '[+'+ item.deltaconfirmed +']'}</span> { item.confirmed }</td>
                          <td className="text-muted text-right">{ item.active }</td>
                          <td className="text-muted text-right"><span className="text-success">{item.deltarecovered > 0 && '[+'+ item.deltarecovered +']'}</span> { item.recovered }</td>
                          <td className="text-muted text-right"><span>{item.deltadeaths > 0 && '[+'+ item.deltadeaths +']'}</span> { item.deaths }</td>
                       </tr>
                       )
                       })}
                    </tbody>
                 </table>
              </div>
              <nav class="navbar fixed-bottom navbar-light bg-light">
               <span className="navbar-brand"><a className="navbar-item" href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">COVID19-India API</a></span>
              </nav>
           </article>
           }
        </section>
        }
    </div>
  }
}
export default StatesTracker;