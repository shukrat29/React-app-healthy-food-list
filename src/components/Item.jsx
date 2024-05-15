import React from 'react';

const Item = ({ foodItem }) => {
  return <li className='list-group-item bg-info fw-bold'>{foodItem}</li>;
};

export default Item;
