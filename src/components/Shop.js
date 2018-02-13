import React, { Component } from 'react';
import { products } from '../data/product-payload.json';

import ProductDetails from './ProductDetails';
import AddCartBtn from './AddCartBtn';

class Shop extends Component {
  state = { products: products };

  addToCart(newCount,name,price) {
    const { selectedItem, total } = this.state;
    let newAmount = Math.round((total + price) * 100)/100;
    this.setState({
      selectedItem: selectedItem.concat(name),
      total: newAmount
    });
  }

  renderItem() {
    return this.state.products.map((product) => {
      let price = product.price/100;
      price.toFixed(2);
      return (
        <div className='col s12 m6 l3' style={{textAlign:'center'}}>
          <ProductDetails
            key={product.price}
            filename={product.filename}
            name={product.name}
            price={price}
          />
          <AddCartBtn product={product} addSelectedItems={this.props.addSelectedItems}/>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <div className='row'>
          {this.renderItem()}
        </div>
      </div>
    );
  }
}

export default Shop;
