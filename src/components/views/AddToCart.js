import React, { Component } from 'react';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import { highLightCartButton } from '../../lib/cartLib';

export default class AddToCart extends Component {
  handleAddToCart = (e) => {
    highLightCartButton();
    console.log("after adding cart step 1" + JSON.stringify(this.props.product));
    const temp_data = {
      "Id": this.props.product.sku,
      "quantity": this.props.product.productInventory[0].quantity,
      "Title": this.props.product.title,
      "Price": this.props.product.productInventory[0].price,
      "image": this.props.product.image
    }
    console.log("after adding cart step 2" + JSON.stringify(temp_data))
    this.context.action(temp_data);
  }
  render() {
    return (
      <div className="add-cart-container">
        <button type="button" className="cart-btn" onClick={this.handleAddToCart}><i className="fas fa-shopping-cart"></i>Add to Cart</button>
      </div>
    );
  }
}

AddToCart.contextType = AddToCartContext;
