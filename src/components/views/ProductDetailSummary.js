import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import ReadMore from '../helpers/ReadMore';
import DropDown from '../../lib/dropDown';

export default (props) => {
  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div className="single-product-item">
        <Link to={"/product-detail/" + props.product.sku}>
          <div className="offers"></div>
          <div className="product-image">
            <img src={props.product.image} alt={props.product.title} width="40" height="30" />
          </div>
          {props.product.title}
        </Link>
        <DropDown productData={props.product.productInventory} />
        <AddToCart product={props.product} />

      </div>
    </div>
  );
}

