import React, { Component } from 'react';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetailsPage from './ProductDetailsPage';
import ContactUsPage from './ContactUsPage';
import ProductListPage from './ProductListPage';
import PageNotFound from '../views/PageNotFound';
import Header from '../views/Header';
import Footer from '../views/Footer';

export default class BasePage extends Component {
  render() {
    console.log("page redirecting :: " + this.props.pageName);
    let componentRendered = '';
    switch (this.props.pageName) {
      case "Home":
        componentRendered = <Home {...this.props} />;
        break;
      case "ProductListPage":
        componentRendered = <ProductListPage {...this.props} />;
        break;
      case "ProductDetailsPage":
        componentRendered = <ProductDetailsPage {...this.props} />;
        break;
      case "ShoppingCart":
        componentRendered = <ShoppingCart {...this.props} />;
        break;
      case "ContactUsPage":
        componentRendered = <ContactUsPage {...this.props} />;
        break;
      default:
        componentRendered = <PageNotFound {...this.props} />;
    };
    return (
      <>
        <Header />
        {componentRendered}
        <Footer />
      </>
    );
  }
}
