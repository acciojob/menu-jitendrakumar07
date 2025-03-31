// App.js
import React, { useState } from "react";
import Menu from "../Menu";  // Corrected path to Menu.js
import "../styles.css";  // Corrected path to styles.css

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [dishes] = useState([
    { id: 1, name: "Pancakes", category: "Breakfast", price: 5, image: "/images/pancakes.jpg" },
    { id: 2, name: "Burger", category: "Lunch", price: 10, image: "/images/burger.jpg" },
    { id: 3, name: "Milkshake", category: "Shakes", price: 3, image: "/images/milkshake.jpg" },
    { id: 4, name: "Omelette", category: "Breakfast", price: 7, image: "/images/omelette.jpg" },
    { id: 5, name: "Pizza", category: "Lunch", price: 12, image: "/images/pizza.jpg" },
    { id: 6, name: "Chocolate Shake", category: "Shakes", price: 5, image: "/images/chocolate-shake.jpg" }
  ]);

  const filterDishes = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <h1>Menu</h1>
      <Menu dishes={dishes} filterDishes={filterDishes} activeCategory={activeCategory} />
    </div>
  );
};

export default App;
