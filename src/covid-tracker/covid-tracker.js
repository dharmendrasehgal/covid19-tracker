import React from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import { Item } from '../item/item';

class CovidTracker extends React.Component {
  state = {
    feeds: null
  }
  componentDidMount() {
    axios.get(`https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu`)
    .then(res => {
        console.log(res.request.response);
        const feeds = JSON.parse(res.request.response);
        this.setState({feeds: feeds.locations});
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
                  <th scope="col">ID</th>
                  <th scope="col">Country</th>
                  <th scope="col">Population</th>
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