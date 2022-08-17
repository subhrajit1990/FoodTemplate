import React from 'react';
import CartUpdateForm from './CartUpdateForm';

export default (props) => {
  console.log("preops cart data ::" + JSON.stringify(props.product));
  return (
    <tr className={"table-body-row row-" + props.product.Id} onClick={e => props.handleClickRow(props.product.Id)}>
      <td className="product-image"><img src={props.product.image} alt={props.product.Title} /></td>
      <td className="product-name">{props.product.Title}</td>
      <td className="product-price">{props.product.Price}</td>
      <td className="product-quantity"><CartUpdateForm product={props.product}
        cartFormElement={props.cartFormElement}
        handleRemoveCartItem={props.handleRemoveCartItem}
        handleChangeCartQuantity={props.handleChangeCartQuantity} /></td>
      <td className="product-total">{props.counter}</td>
    </tr>
  );
}
