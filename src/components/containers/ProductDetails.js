import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AddToCart from '../views/AddToCart';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import DropDown from '../../lib/dropDown';


class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { productDetails: {} };
  }

  componentDidMount() {
    const productId = this.props.productId;
    console.log("productId :: " + productId);
    this.props.getProductDetails(productId);
  }

  render() {
    return (
      <AddToCartContext.Provider value={{ action: this.props.addToCartAction }}>
        <div>
          {typeof this.props.productDetails !== 'undefined' &&
            <>
              <div className="single-product mt-150 mb-150">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="single-product-img">
                        <img alt={this.props.productDetails.title} src={this.props.productDetails.image} />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="single-product-content">
                        <h3>{this.props.productDetails.title}</h3>
                        <p>{this.props.productDetails.description}</p>
                        <div className="single-product-form">
                          <form >
                            <input type="number" placeholder="0" />
                          </form>
                          <DropDown productData={this.props.productDetails.productInventory} />
                          <AddToCart product={this.props.productDetails} />
                          <p><strong>Categories: </strong>{this.props.productDetails.Category}</p>
                          <p><strong>Organic: </strong>{this.props.productDetails.Organic ? 'Yes' : 'No'}</p>
                        </div>
                        <h4>Share:</h4>
                        <ul className="product-share">
                          <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href=""><i className="fab fa-twitter"></i></a></li>
                          <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                          <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </AddToCartContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  if (typeof state.products.productDetails === 'undefined') {
    return { productDetails: [] };
  }
  else {
    return { productDetails: state.products.productDetails.ProductResponse.productDetails[0] };
  }
}

export default connect(mapStateToProps, actions)(ProductDetails);
