import React from 'react';
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
        //console.log(res.data);
        const feeds = res.data;
        this.setState({feeds: feeds});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
    axios.get(`https://covid19.mathdro.id/api/countries/IN`)
    .then(res => {
        //console.log('nationwide:', res.data);
        const nationwide = res.data;
        this.setState({nationwide: nationwide});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
    axios.get(`https://covid19.mathdro.id/api`)
    .then(res => {
        //console.log('worldwide: ', res.data);
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
          {this.state.worldwide.lastUpdate && <p className="text-success">Last Updated: { Date(this.state.worldwide.lastUpdate) }</p>}
          {!this.state.nationwide ? null :
          <article>
              <h2>India Cases</h2>
              <div className="row mb-5">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-warning">{ this.state.nationwide.confirmed.value }</h3>
                        <p className="card-text text-muted">Confirmed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-danger">{ this.state.nationwide.deaths.value }</h3>
                        <p className="card-text text-muted">Death</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-success">{ this.state.nationwide.recovered.value }</h3>
                        <p className="card-text text-muted">Recovered</p>
                      </div>
                    </div>
                  </div>
              </div>
           </article>
            }
          {!this.state.worldwide ? null :
          <article>
              <h2>Global Cases</h2>
              <div className="row mb-5">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-warning">{ this.state.worldwide.confirmed.value }</h3>
                        <p className="card-text text-muted">Confirmed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-danger">{ this.state.worldwide.deaths.value }</h3>
                        <p className="card-text text-muted">Death</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title text-success">{ this.state.worldwide.recovered.value }</h3>
                        <p className="card-text text-muted">Recovered</p>
                      </div>
                    </div>
                  </div>
              </div>
           </article>
            }
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="fixed-header">
                <tr>
                  <th scope="col">Country/Region</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Deaths</th>
                  <th scope="col">Recovered</th>
                </tr>
              </thead>
              <tbody>
              {this.state.feeds.map((item, index) => {
                return (<Item {...item} key={index} />)
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