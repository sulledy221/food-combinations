import { useState } from "react";
import "./Meal.css";

export default function Sides() {
  const [breakfastSideFoods] = useState([{ title: "Fruit", value: "Fruit" }]);
  const [lunchSideFoods] = useState([
    { title: "Crackers", value: "Crackers" },
    { title: "Hummus", value: "Hummus" },
    { title: "Tomatoes", value: "Tomatoes" },
    { title: "Fruit", value: "Fruit" },
    { title: "Veggies", value: "Veggies" },
    { title: "Avocado", value: "Avocado" },
  ]);
  const [dinnerSideFoods] = useState([
    { title: "Veggies", value: "Veggies" },
    { title: "Avocado", value: "Avocado" },
    { title: "Broccoli", value: "Broccoli" },
  ]);
  return (
    <div>
      <button onClick={breakfastSideFoods} className="button-size">
        Breakfast Side
      </button>
      <br />
      <button onClick={lunchSideFoods} className="button-size">
        Lunch Side
      </button>
      <br />
      <button onClick={dinnerSideFoods} className="button-size">
        Dinner Side
      </button>
    </div>
  );
}
