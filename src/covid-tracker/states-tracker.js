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
        console.log(res.data);
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
          <span className="text-muted small float-right"><Link to="/covid19-tracker">Worldwide Cases</Link></span>
          {this.state.feeds.statewise.map((item, index) => {
            return (item.state === 'Total' && <article className="row mb-5" key={index}>
              <div className="mx-auto d-flex">
                      <div className="card-body p-3 text-danger">
                        <p className="">Confirmed</p>
                        <h6><span className="text-danger">{item.deltaconfirmed > 0 && '[+'+ item.deltaconfirmed +']'}</span></h6>
                        <h5>{ item.confirmed }</h5>
                      </div>
                      <div className="card-body p-3 text-primary">
                        <p className="">Active</p>
                        <h6><span className="text-danger"><br /></span></h6>
                        <h5>{ item.active }</h5>
                      </div>
                      <div className="card-body p-3 text-success">
                        <p className="">Recovered</p>
                        <h6><span>{item.deltarecovered > 0 && '[+'+ item.deltarecovered +']'}</span></h6>
                        <h5>{ item.recovered }</h5>
                      </div>
                      <div className="card-body p-3 text-muted">
                        <p className="">Deceased</p>
                        <h6><span>{item.deltadeaths > 0 && '[+'+ item.deltadeaths +']'}</span></h6>
                        <h5>{ item.deaths }</h5>
                      </div>
              </div>
           </article>)
          })
          }
          {!this.state.feeds.statewise ? null :
          <article>
          <span className="text-muted small float-right"><a href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">#api</a></span>
              <div className="text-center">
            <table className="m-auto">
              <thead className="">
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
              return (<tr key={index}>
                  <td className="text-muted text-left">{ item.state }</td>
                  <td className="text-muted text-right"><span className="text-danger">{item.deltaconfirmed > 0 && '[+'+ item.deltaconfirmed +']'}</span> { item.confirmed }</td>
                  <td className="text-muted text-right">{ item.active }</td>
                  <td className="text-muted text-right"><span className="text-success">{item.deltarecovered > 0 && '[+'+ item.deltarecovered +']'}</span> { item.recovered }</td>
                  <td className="text-muted text-right"><span>{item.deltadeaths > 0 && '[+'+ item.deltadeaths +']'}</span> { item.deaths }</td>
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