import React, { Component } from 'react';
import RecentProductsList from '../containers/RecentProductsList';
import { Route, HashRouter, NavLink, BrowserRouter as Router, Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="hero-area hero-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-1 text-center">
                <div className="hero-text">
                  <div className="hero-text-tablecell" style={{ padding: "10% 0 10% 0" }}>
                    <p className="subtitle">Fresh &amp; Healthy</p>
                    <h1>Delicious Seasonal Dry Fruits</h1>
                    <div className="hero-btns">
                      <nav>
                        <NavLink className="boxed-btn" to="/product-list"> Dry Fruits Collection</NavLink>
                        <NavLink className="bordered-btn" to="/Contact">Contact Us</NavLink>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-section mt-150 mb-150">
          <RecentProductsList />
        </div>
      </>
    );
  }
}
