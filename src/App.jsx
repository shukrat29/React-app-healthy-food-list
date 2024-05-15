import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';

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
    <Container>
      <h1>Healthy Food List</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
