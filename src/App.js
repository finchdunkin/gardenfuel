import React, { useState } from "react";
import "./index.css";

const mealPlanData = {
  Thursday: [
    {
      name: "Greek Yogurt + Chia",
      ingredients: [
        "150g Greek yogurt",
        "1 tbsp chia seeds",
        "1/4 cup (40g) rolled oats",
        "1/2 cup (75g) mixed berries"
      ],
      instructions: "Mix all ingredients in a jar. Refrigerate overnight. Enjoy chilled."
    },
    {
      name: "Almond Butter Oats",
      ingredients: [
        "1/2 cup oats (40g)",
        "1 tbsp almond butter",
        "3/4 cup almond milk",
        "1 tsp honey"
      ],
      instructions: "Cook oats with almond milk. Stir in almond butter and honey. Serve warm."
    }
  ],
  Friday: [
    {
      name: "Thai Basil Chicken",
      ingredients: [
        "120g ground chicken",
        "1/2 cup cooked brown rice",
        "1 tbsp soy sauce",
        "Fresh Thai basil leaves"
      ],
      instructions: "Sauté chicken in soy sauce. Add basil. Serve over brown rice."
    }
  ]
};

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      <div style={{ backgroundColor: "#6a1b9a", color: "white", padding: "1rem", borderRadius: "12px" }}>
        <h1>🎭 GardenFuel</h1>
        <p>Whole food, whole heart. Powered by you and Reina.</p>
      </div>

      <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <button onClick={() => alert("🛒 Coming soon!")} style={{ marginRight: "1rem", backgroundColor: "#3b7a57", color: "white", padding: "0.5rem", borderRadius: "6px" }}>Shopping List</button>
        <button onClick={() => alert("📈 Coming soon!")} style={{ backgroundColor: "#ffd700", color: "#333", padding: "0.5rem", borderRadius: "6px" }}>Progress Tracker</button>
      </div>

      <h2 style={{ color: "#6a1b9a" }}>📅 Weekly Meal Plan</h2>
      {Object.entries(mealPlanData).map(([day, meals]) => (
        <div key={day} style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setSelectedDay(selectedDay === day ? null : day)}
            style={{ fontWeight: "bold", color: "#6a1b9a", background: "none", border: "none" }}
          >
            {selectedDay === day ? "🔽" : "▶"} {day}
          </button>
          {selectedDay === day && (
            <ul>
              {meals.map((meal, i) => (
                <li key={i}>
                  <button onClick={() => setSelectedRecipe(meal)} style={{ color: "#3b7a57", textDecoration: "underline", background: "none", border: "none" }}>
                    {meal.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {selectedRecipe && (
        <div style={{ border: "2px solid #6a1b9a", padding: "1rem", borderRadius: "10px", marginTop: "2rem", backgroundColor: "#fef6ff" }}>
          <h3 style={{ color: "#6a1b9a" }}>{selectedRecipe.name}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {selectedRecipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default App;
