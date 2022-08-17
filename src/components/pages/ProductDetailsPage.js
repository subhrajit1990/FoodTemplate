import React, { Component } from 'react';
import ProductDetails from '../containers/ProductDetails';

export default class ShoppingCart extends Component {
  render() {
    const { match: { params: { productId } } } = this.props;
    return (
      <div className="container main-container">
        <ProductDetails productId={productId} />
      </div>
    )
  }
}
