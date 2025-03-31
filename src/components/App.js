import React, { useState } from "react";
import Menu from "../Menu";
import "../styles.css"; // Ensure this path is correct

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const dishes = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: 5.99, image: "pancakes.jpg" },
    { id: 2, name: "Burger", category: "Lunch", price: 8.99, image: "burger.jpg" },
    { id: 3, name: "Milkshake", category: "Shakes", price: 3.99, image: "milkshake.jpg" },
    // Add more dishes as required
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
