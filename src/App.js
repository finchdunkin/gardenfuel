import React from "react";
import "./index.css";

const dayMeals = [
  {
    name: "Greek Yogurt + Chia",
    fuel: 340,
    protein: 25,
    carbs: 30,
    fat: 10,
    fiber: 9,
    instructions: "Mix yogurt, chia, oats, and berries. Refrigerate overnight."
  },
  {
    name: "Thai Chicken",
    fuel: 400,
    protein: 30,
    carbs: 15,
    fat: 12,
    fiber: 4,
    instructions: "Sauté chicken with basil and garlic. Serve over brown rice."
  }
];

const total = dayMeals.reduce(
  (acc, meal) => {
    acc.fuel += meal.fuel;
    acc.protein += meal.protein;
    acc.carbs += meal.carbs;
    acc.fat += meal.fat;
    acc.fiber += meal.fiber;
    return acc;
  },
  { fuel: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
);

function App() {
  return (
    <div>
      <h1>GardenFuel 🍽️</h1>
      <h2>Thursday Meals</h2>
      {dayMeals.map((meal, idx) => (
        <div className="recipe" key={idx}>
          <h3>{meal.name}</h3>
          <div className="nutrition">
            {meal.fuel} Fuel | {meal.protein}g Protein | {meal.carbs}g Carbs | {meal.fat}g Fat | {meal.fiber}g Fiber
          </div>
          <p>{meal.instructions}</p>
        </div>
      ))}
      <h3>🔢 Daily Totals</h3>
      <p className="nutrition">
        {total.fuel} Fuel | {total.protein}g Protein | {total.carbs}g Carbs | {total.fat}g Fat | {total.fiber}g Fiber
      </p>
    </div>
  );
}

export default App;
