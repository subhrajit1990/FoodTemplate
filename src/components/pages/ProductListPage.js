import React, { Component } from 'react';
import ProductList from '../containers/ProductList';

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
                  <h1>Shop</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-container">
          <ProductList />
        </div>
      </>
    )
  }
}