import React, { Component } from 'react';

class Cart extends Component {
    caculateTotal(arr) {
      let total = 0;
      arr.map(obj => {
        return (
           total += obj.product.price
        );
      });
     return (
       <h5>Total: ${total/100}</h5>
     );
    }

    renderSelectedItem(arr){
      if (arr.length === 0) {
        return(
          <div>
                <h5>Your Cart is empty</h5>
                  <h6>Nothing in your cart,start shopping.</h6>
                  <hr />
              </div>
        );
        // This part should render quikview products and deleting button, which does not work not now
      } else if (arr.length > 0){
        arr.map(obj => {
          console.log(arr.length);
          return (
            <ul>
              <li key={obj.product.price}>{obj.product.name}</li>
            </ul>
          );
        })
      }
      return null;

    }
  render() {
    return (
      <div>
          {this.renderSelectedItem(this.props.selectedItems)}
          {this.caculateTotal(this.props.selectedItems)}
    </div>

  );
  }
}

export default Cart;
