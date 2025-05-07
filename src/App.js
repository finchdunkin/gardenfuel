import React, { useState } from "react";
import "./index.css";

const mealPlan = {
  Thursday: [
    {
      name: "Greek Yogurt + Chia",
      stats: { fuel: 340, protein: 25, carbs: 30, fat: 10, fiber: 9 },
      ingredients: ["150g Greek yogurt", "1 tbsp chia seeds", "40g oats", "75g berries"],
      instructions: "Mix all ingredients in a jar. Refrigerate overnight."
    },
    {
      name: "Almond Butter Oats",
      stats: { fuel: 310, protein: 20, carbs: 28, fat: 12, fiber: 7 },
      ingredients: ["40g oats", "1 tbsp almond butter", "3/4 cup almond milk", "1 tsp honey"],
      instructions: "Cook oats in milk. Stir in almond butter and honey."
    },
    {
      name: "Grilled Turkey Wrap",
      stats: { fuel: 430, protein: 32, carbs: 35, fat: 14, fiber: 8 },
      ingredients: ["100g turkey breast", "1 whole wheat tortilla", "lettuce", "tomato", "mustard"],
      instructions: "Grill turkey. Wrap with veggies and mustard in tortilla."
    },
    {
      name: "Lentil Veggie Bowl",
      stats: { fuel: 480, protein: 25, carbs: 42, fat: 15, fiber: 13 },
      ingredients: ["1/2 cup lentils", "1/2 cup rice", "mixed veggies", "spices"],
      instructions: "Cook lentils and rice. Stir fry veggies. Combine and season."
    },
    {
      name: "Frozen Mango Chunks",
      stats: { fuel: 120, protein: 2, carbs: 28, fat: 1, fiber: 3 },
      ingredients: ["1 cup frozen mango"],
      instructions: "Serve in a bowl and enjoy cold."
    }
  ]
};

function App() {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const getDayTotals = (meals) =>
    meals.reduce(
      (acc, m) => {
        Object.keys(acc).forEach(k => acc[k] += m.stats[k]);
        return acc;
      },
      { fuel: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
    );

  return (
    <div>
      <h1>🎭 GardenFuel Nawlins Preview</h1>
      <p style={{ marginBottom: "1rem" }}>Laissez les bons temps rouler! 💜💚💛</p>

      {Object.entries(mealPlan).map(([day, meals]) => {
        const totals = getDayTotals(meals);
        return (
          <div key={day}>
            <div className="day-header" onClick={() => {
              setExpandedDay(expandedDay === day ? null : day);
              setExpandedRecipe(null);
            }}>
              <span>{day}</span>
              <span>
                {totals.fuel} Fuel | {totals.protein}g P | {totals.carbs}g C | {totals.fat}g F | {totals.fiber}g Fib
              </span>
            </div>
            {expandedDay === day && (
              <div style={{ marginLeft: "1rem" }}>
                {meals.map((meal, i) => (
                  <div key={i} className="meal-card">
                    <div className="meal-header" onClick={() =>
                      setExpandedRecipe(expandedRecipe === i ? null : i)
                    }>
                      <span>{meal.name}</span>
                      <span className="nutrition-inline">
                        {meal.stats.fuel} F | {meal.stats.protein}g P | {meal.stats.carbs}g C
                      </span>
                    </div>
                    {expandedRecipe === i && (
                      <div>
                        <div className="nutrition-block">
                          {meal.stats.fuel} Fuel | {meal.stats.protein}g Protein | {meal.stats.carbs}g Carbs | {meal.stats.fat}g Fat | {meal.stats.fiber}g Fiber
                        </div>
                        <h4>Ingredients:</h4>
                        <ul>{meal.ingredients.map((ing, j) => <li key={j}>{ing}</li>)}</ul>
                        <h4>Instructions:</h4>
                        <p>{meal.instructions}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
