import React from 'react';

export default (props) =>
  <div className="col-lg-12">
    <div className="total-section">
      <table className="total-table">
        <thead className="total-table-head">
          <tr className="table-total-row">
            <th>Total</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="total-data">
            <td><strong>Subtotal: </strong></td>
            <td>{props.cartCount.cartTotal}</td>
          </tr>
          <tr className="total-data">
            <td><strong>items: </strong></td>
            <td>{props.cartCount.cartItemCount}</td>
          </tr>
          <tr className="total-data">
            <td><strong>Total: </strong></td>
            <td>{props.cartCount.cartTotal}</td>
          </tr>
        </tbody>
      </table>

    </div>


  </div>
