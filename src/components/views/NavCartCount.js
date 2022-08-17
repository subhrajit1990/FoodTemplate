import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default (props) => {
  return (
    <NavLink id="nav-view-cart-link" to="/shopping-cart" className="cart-update">
      <i className="fas fa-shopping-cart"></i>({props.cartItemCount})
    </NavLink>
  );
}
