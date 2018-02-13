import React, { Component } from 'react';
import { Modal, Button} from 'react-materialize';
import Slogan from './Slogan';
import Cart from './Cart';

class Header extends Component {

render(){
  const { selectedItems } = this.props;
  const { headerStyle, countStyle } = styles;
  return (
    <div>
    <nav style={headerStyle}>
      <div className="nav-wrapper">
        <ul className="left">
          <li>
            <i className="large material-icons">shopping_cart</i>
          </li>
          <li>
            <a href="/">
              <h4>Cart.ly</h4>
            </a>
          </li>
          <li>
          <a href="/">
            <h5>Shop</h5>
          </a>
          </li>
        </ul>

        <ul className="right">
          <li>
            <Modal
            	header='Your Cart'
            	trigger={<Button node="a" style={styles.btnStyle}><h6>Your Cart</h6></Button>}>
            	<Cart
                selectedItems={this.props.selectedItems}
              />
            </Modal>
          </li>
          <li className="disabled" style={countStyle}>{selectedItems.length}</li>
        </ul>
      </div>
    </nav>
    <Slogan />
    </div>
  );
  }
};

const styles = {
  headerStyle: {
    backgroundColor: '#001CC8'
  },
  countStyle: {
    backgroundColor:'white',
    width: 60,
    textAlign:'center',
    color: '#001CC8',
    borderRadius: 2
  },
  btnStyle: {
    backgroundColor: '#001CC8',
    textAlign:'center'
  }
};

export default Header;
