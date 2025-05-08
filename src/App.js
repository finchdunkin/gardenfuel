import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MealPlanner from "./MealPlanner";
import ShoppingList from "./ShoppingList";
import ProgressTracker from "./ProgressTracker";
import VirtualGarden from "./VirtualGarden";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">🏡 Home</Link>
        <Link to="/meal-planner">📅 Meal Planner</Link>
        <Link to="/shopping-list">🛒 Shopping List</Link>
        <Link to="/progress">📈 Progress Tracker</Link>
        <Link to="/garden">🌱 Garden</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/garden" element={<VirtualGarden />} />
      </Routes>
    </div>
  );
}

export default App;
