import { useState } from "react";
import "./Meal.css";

export default function Meal({ foodItems, type }) {
const [ choice, setChoice ] = useState("")
const randomChoice = () => {
  const calculator = Math.floor(Math.random() * foodItems.length);
  return setChoice(foodItems[calculator].value);
}

  return (
    <div>
      <button onClick={randomChoice} className="button-size">
        {type}
      </button>
      {choice}
    </div>
  );
}
