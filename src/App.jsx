import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let foodItems = [
    'Rice',
    'Almond',
    'Green Vegetable',
    'Salad',
    'Apple',
    'Milk',
  ];
  return (
    <React.Fragment>
      <h1>Healthy Food List</h1>
      <ul class='list-group'>
        {foodItems.map((item) => (
          <li class='list-group-item'>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
