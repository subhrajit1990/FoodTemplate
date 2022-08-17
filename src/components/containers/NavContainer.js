import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countCart } from '../../lib/cartLib';
import NavCartCount from '../views/NavCartCount';

class NavContainer extends Component {
  render() {
    return (
      <NavCartCount cartItemCount={this.props.cartItemCount} />
    )
  }
}

const mapStateToProps = state => {
  return countCart(state.cart);
}

export default connect(mapStateToProps)(NavContainer);
