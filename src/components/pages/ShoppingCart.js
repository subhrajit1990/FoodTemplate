import React, { Component } from 'react';
import CartList from '../containers/CartList';

export default class ShoppingCart extends Component {
  render() {
    return (
      <>
        <div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                  <p>Fresh &amp; Healthy</p>
                  <h1>Cart</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-container">
          <CartList />
        </div>
      </>
    )
  }
}
