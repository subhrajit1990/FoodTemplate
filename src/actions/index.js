import * as types from './action-types';
import {APIServerCallWithoutAsync,APIServerCall} from '../lib/CommonUtils';


export function addToCartAction(product) {
  console.log(" reducer index executing");
  return {
    type: types.ADD_TO_CART,
    payload: { Id: product.Id, Title: product.Title, Price: product.Price, image: product.image }
  };
}

export function removeFromCartAction(productId) {
  return {
    type: types.REMOVE_FROM_CART,
    productId: productId
  };
}

export function updateCartAction(payload) {
  return {
    type: types.UPDATE_CART,
    payload
  };
}

export function getRecentProducts(payload) {
  return {
    type: types.FETCH_PRODUCTS,
    payload: APIServerCallWithoutAsync('','GET','/product/api/recentProducts').then(response => response.json())
  };
}

export function getProducts(payload) {
  return {
    type: types.FETCH_PRODUCTS,
    payload: APIServerCallWithoutAsync('','POST','/product/api/all',payload).then(response => response.json())
  };
}

export function getProductDetails(productId) {
  return {
    type: types.FETCH_PRODUCT_DETAILS,
    payload: APIServerCall('','GET','/product/api/viewProduct/'+productId)
  };
}


export function setEmailSubscribe(payload) {
  return {
    type: types.EMAIL_SUBSCRIBE,
    payload: APIServerCall(payload,'POST','/misc/api/emailSubscribe')
  };
}

export function setContactUs(payload) {
  return {
    type: types.CONTACT_US,
    payload: APIServerCall(payload,'POST','/misc/api/contactMe')
  };
}
