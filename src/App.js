import React, { Component } from 'react';

import Header from './components/Header';
import Shop from './components/Shop';

class App extends Component {
  constructor() {
      super();
      this.state={
        selectedItems:[],
        total: 0
      }
    }
    addSelectedItems(obj) {
      const { selectedItems } = this.state;
      this.setState({
        selectedItems: selectedItems.concat(obj)
      });
    }
    render() {
      return(
        <div>
          <Header selectedItems={this.state.selectedItems}/>
          <Shop addSelectedItems={this.addSelectedItems.bind(this)}/>
        </div>
      )
    }
}

export default App;
