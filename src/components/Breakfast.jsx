import { useState } from 'react';
import './Meal.css';

export default function Breakfast({ onChange, value}) {
  const [breakfastFoods] = useState([
    {title: "Cereal", value:"Cereal"},
    {title: "Egg Sandwich", value:"Egg Sandwich"},
    {title: "Sausage & Waffles", value:"Sausage & Waffles"},
    {title: "Pigs in a Blanket", value:"Pigs in a Blanket"},
    {title: "Yogurt & PBJ", value:"Yogurt & PBJ"},
  ])

  return (
    <div>
    <button onClick={breakfastFoods} className="button-size">Breakfast</button>
    </div>
  )
}