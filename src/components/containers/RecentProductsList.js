import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import * as actions from '../../actions';
import ProductListSummary from '../views/ProductListSummary';
import ProductDetailSummary from '../views/ProductDetailSummary';
import Pagination from '../helpers/Pagination';
import { APIServerCallWithoutAsync } from '../../lib/CommonUtils';


class RecentProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentPage: 1,
      perPage: 9,
      recentViews: [],
      recentProductList: []
    };

    this.recentProductsListResponse = this.recentProductsListResponse.bind(this);
  }

  componentDidMount() {
    this.props.getRecentProducts();
  }

  recentProductsListResponse = (response) => {
    console.log("API Data :: " + JSON.stringify(response));
    this.setState({
      recentProductList: response.ProductResponse.productDetails || [],
    });
  }
  render() {
    const currentPageProducts = this.props.products;
    const productListMarkup = currentPageProducts.map(product =>
      <ProductDetailSummary product={product} key={product.sku} />
    );
    return (
      <AddToCartContext.Provider value={{ action: this.props.addToCartAction }}>
        <div className="container">
          <div className="section-title">

            <div className="product-section mt-150 mb-150">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title">
                      <h3><span className="orange-text">Our</span> Products</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {productListMarkup}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AddToCartContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  if (typeof state.products.allProducts === 'undefined') {
    return { products: [] };
  }
  else {
    return { products: state.products.allProducts.ProductResponse.productDetails };
  }
}

export default connect(mapStateToProps, actions)(RecentProductList);
