import React, { useState } from "react";
import Menu from "../Menu";  // Corrected import for Menu component
import "../styles.css";      // Corrected import for styles

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const dishes = [
    { id: 1, name: "Pancakes", category: "Breakfast", image: "pancakes.jpg", price: 5.99 },
    { id: 2, name: "Burger", category: "Lunch", image: "burger.jpg", price: 8.99 },
    { id: 3, name: "Milkshake", category: "Shakes", image: "milkshake.jpg", price: 3.99 },
    // Add more dishes here
  ];

  const filterDishes = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <h1>Menu</h1>
      <Menu dishes={dishes} filterDishes={filterDishes} activeCategory={activeCategory} />
    </div>
  );
};

export default App;
