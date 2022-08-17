import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'react-router-dom';
import RootStoreProvider from './RootStoreProvider';
import BasePage from './components/pages/BasePage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
		<RootStoreProvider>
			<Switch>
				<Route exact path="/"
					render={routeProps => (<BasePage {...routeProps} pageName="Home" />)} />
				<Route path="/shopping-cart"
					render={routeProps => (<BasePage {...routeProps} pageName="ShoppingCart" />)} />
				<Route path="/product-list"
					render={routeProps => (<BasePage {...routeProps} pageName="ProductListPage" />)} />
				<Route path="/product-detail/:productId"
					render={routeProps => (<BasePage {...routeProps} pageName="ProductDetailsPage" />)} />
				<Route path="/contact-us"
					render={routeProps => (<BasePage {...routeProps} pageName="ContactUsPage" />)} />
				<Route path="*"
					render={routeProps => (<BasePage {...routeProps} pageName="PageNotFound" />)} />
			</Switch>
		</RootStoreProvider>
);
