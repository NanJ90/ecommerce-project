import React, { Component } from 'react';

class ProductDetails extends Component {
  render() {
    const {filename, name, price} = this.props;
    return(
        <ul style={{ textAlign: 'center', color: '#9e9e9e'}}>
          <li><img src={process.env.PUBLIC_URL + '/images/' + filename} alt=""/></li>
          <li>{ name }</li>
          <li><h5>$ { price }</h5></li>
        </ul>
    );
  }
}

export default ProductDetails;
