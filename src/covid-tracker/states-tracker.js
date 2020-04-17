import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../logo.svg';

class StatesTracker extends React.Component {
  state = {
    feeds: null
  }
  componentDidMount() {
    axios.get(`https://api.rootnet.in/covid19-in/stats/latest`)
    .then(res => {
        console.log(res.data);
        const feeds = res.data.success ? res.data: null;
        this.setState({feeds: feeds});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
  }
  render() {
    return <div className="covid-wrapper">
        {!this.state.feeds ? <img src={logo} className="App-logo" alt="logo" /> :
        <section>
          <h1>COVID 19, Coronavirus Tracker in India</h1>
          <span className="text-muted small float-right"><Link to="/">Worldwide Cases</Link></span>
          {this.state.feeds.lastOriginUpdate && <p className="text-success">Last Updated: { this.state.feeds.lastOriginUpdate }</p>}
          {!this.state.feeds.data.summary ? null :
          <article>
              <h2>India Cases</h2>
              <div className="row mb-5">
                  <div className="col-sm-4 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-warning">{ this.state.feeds.data.summary.total }</h3>
                        <p className="card-text text-muted">Total</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-warning">{ this.state.feeds.data.summary.confirmedCasesIndian }</h3>
                        <p className="card-text text-muted">Confirmed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-warning">{ this.state.feeds.data.summary.confirmedCasesForeign }</h3>
                        <p className="card-text text-muted">Foreign Cases</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-danger">{ this.state.feeds.data.summary.deaths }</h3>
                        <p className="card-text text-muted">Death</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-5">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-success">{ this.state.feeds.data.summary.discharged }</h3>
                        <p className="card-text text-muted">Recovered</p>
                      </div>
                    </div>
                  </div>
              </div>
           </article>
            }
            {!this.state.feeds.data.regional ? null :
          <article>
          <span className="text-muted small float-right"><a href="https://api.rootnet.in/covid19-in/stats/latest" target="_blank" rel="noopener noreferrer">#api</a></span>
              <h2>Indian State Cases</h2>
              <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="fixed-header">
                <tr>
                  <th scope="col">Region</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Deaths</th>
                </tr>
              </thead>
              <tbody>
              {this.state.feeds.data.regional.map((item, index) => {
              return (<tr>
                  <td className="text-muted">{ item.loc }</td>
                  <td className="text-warning">{ item.totalConfirmed }</td>
                  <td className="text-success">{ item.discharged }</td>
                  <td className="text-danger">{ item.deaths }</td>
                </tr>)
              })}
              </tbody>
            </table>
          </div>
           </article>
            }
        </section>
        }
    </div>
  }
}
export default StatesTracker;