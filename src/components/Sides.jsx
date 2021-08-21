import { useState } from 'react';
import './Meal.css';

export default function Sides() {
  const [ breakfastSideFoods ] = useState([{title: "Fruit", value:"Fruit"}])
  const [ lunchSideFoods ] = useState([
    {title: "", value:""},
  ])
  const [ dinnerSideFoods ] = useState([
    {title: "", value:""},
  ])
  return (
    <div>Sides</div>
  )
}