import { useState } from 'react';
import './Meal.css';

export default function Lunch() {
  const [lunchFoods] = useState([
    {title: "Turkey Sandwich", value: "Turkey Sandwich"},
    {title: "PBJ", value: "PBJ"},
    {title: "Popcorn Chicken", value: "Popcorn Chicken"},
    {title: "Pizza Bites", value: "Pizza Bites"},
    {title: "Quesadilla", value: "Quesadilla"},

  ])
  return (
    <div>
    <button onClick={lunchFoods} className="button-size">Lunch</button>
    </div>
  )
}