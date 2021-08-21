import './App.css';
import { useState } from 'react';
import Meal from './components/Meal';
import * as meals from './components/meals.js';

function App() {

  return (
    <div className="App">
      <Meal foodItems={meals.breakfastFoods} type="Breakfast"/>
      <Meal foodItems={meals.lunchFoods} type="Lunch"/>
      <Meal foodItems={meals.dinnerFoods} type="Dinner"/>
      <Meal foodItems={meals.breakfastSideFoods} type="Breakfast side"/>
      <Meal foodItems={meals.lunchSideFoods} type="Lunch side"/>
      <Meal foodItems={meals.dinnerSideFoods} type="Dinner side"/>
    </div>
  );
}

export default App;
