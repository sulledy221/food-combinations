import { useState } from 'react';
import './Meal.css';

export default function Dinner() {
  const [dinnerFoods] = useState([
    {title: "", value:""},
    {title: "", value:""},
    {title: "", value:""},
    {title: "", value:""},
    {title: "", value:""},
    {title: "", value:""}
  ])
  return (
    <div>Dinner</div>
  )
}