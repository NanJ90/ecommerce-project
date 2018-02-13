import React from 'react';

const AddCartBtn = (props) => {
  return (
    <div>
      <a className="btn" onClick={()=>props.addSelectedItems(props)} style={{backgroundColor:'transparent', color:'#9e9e9e'}}>
        Add to cart
      </a>
    </div>
  );
};

export default AddCartBtn;
