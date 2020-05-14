import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const StatesTracker = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const isComponentMounted = useRef(true);

  useEffect(() => {
        if (isComponentMounted.current) {
          setLoading(true);
          (async () => {
            try {
              const response = await fetch(
                "https://api.covid19india.org/data.json"
              ).then(res => res.clone().json());
              setFeeds(response.statewise);
            } catch (err) {
              throw new Error(err);
            } finally {
              setLoading(false);
            }
          })();
        }
        return () => {
          isComponentMounted.current = false;
        };
      }, []);

    return (<div className="covid-wrapper">
        {loading ? (<img src={logo} className="App-logo" alt="logo" />) :
        <section className="text-center">
           <h4>COVID 19, Coronavirus Tracker in India</h4>
           <nav className="navbar sticky-top navbar-light bg-light">
            <Link to="/world-tracker" className="navbar-brand">
              <u>Worldwide Cases</u></Link>
            <blockquote className="blockquote sticky-top">
              <footer className="blockquote-footer">Designed by <cite title="Dharmendra Sehgal">Dharmendra Sehgal</cite></footer>
            </blockquote>
           </nav>
           {feeds.map((item, index) => {
           return (item.state === 'Total' &&
           <article className="row mb-5" key={index}>
              <div className="col-sm-3 mb-5">
                 <div className="card bg-danger">
                    <div className="card-body p-3 text-light">
                       <p>Confirmed</p>
                       <h6><span>{item.deltaconfirmed > 0 && '[+'+ item.deltaconfirmed +']'}</span></h6>
                       <h5>{ item.confirmed }</h5>
                    </div>
                 </div>
              </div>
              <div className="col-sm-3 mb-5">
                 <div className="card bg-primary">
                    <div className="card-body p-3 text-light">
                       <p>Active</p>
                       <h6><span><br /></span></h6>
                       <h5>{ item.active }</h5>
                    </div>
                 </div>
              </div>
              <div className="col-sm-3 mb-5">
                 <div className="card bg-success">
                    <div className="card-body p-3 text-light">
                       <p>Recovered</p>
                       <h6><span>{item.deltarecovered > 0 && '[+'+ item.deltarecovered +']'}</span></h6>
                       <h5>{ item.recovered }</h5>
                    </div>
                 </div>
              </div>
              <div className="col-sm-3 mb-5">
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
           { loading ? null :
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
                       {feeds.map((item, index) => {
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
              <nav className="navbar fixed-bottom navbar-light bg-light">
               <span className="navbar-brand"><a className="navbar-item" href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">COVID19-India API</a></span>
              </nav>
           </article>
           }
        </section>
        }
    </div>);
}
export default StatesTracker;