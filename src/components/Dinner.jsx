import { useState } from "react";
import "./Meal.css";

export default function Dinner() {
  const [dinnerFoods] = useState([
    { title: "Chicken & Mac", value: "Chicken & Mac" },
    { title: "Bean Burrito & Rice", value: "Bean Burrito & Rice" },
    { title: "Spaghetti & Meatballs", value: "Spaghetti & Meatballs" },
  ]);
  return (
    <div>
      <button onClick={dinnerFoods} className="button-size">
        Dinner
      </button>
    </div>
  );
}
