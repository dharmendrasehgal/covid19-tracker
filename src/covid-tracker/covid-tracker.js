import React from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import { Item } from '../item/item';

class CovidTracker extends React.Component {
  state = {
    feeds: null
  }
  componentDidMount() {
    axios.get(`https://covid19.mathdro.id/api/confirmed`)
    .then(res => {
        console.log(res.data);
        const feeds = res.data;
        this.setState({feeds: feeds});
    })
    .catch(err => {
        console.log('Err: ', err);
    });
  }
  render() {
    return <div className="covid-wrapper">
        {!this.state.feeds ? <img src={logo} className="App-logo" alt="logo" /> :
          <div className="table-responsive">
            <table className="table table-light">
              <thead className="table-bordered fixed-header">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">countryRegion</th>
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
        }
    </div>
  }
}
export default CovidTracker;