// Menu.js
import React from "react";

const Menu = ({ dishes, filterDishes, activeCategory }) => {
  return (
    <div>
      <div>
        <button onClick={() => filterDishes("All")}>All</button>
        <button onClick={() => filterDishes("Breakfast")}>Breakfast</button>
        <button onClick={() => filterDishes("Lunch")}>Lunch</button>
        <button onClick={() => filterDishes("Shakes")}>Shakes</button>
      </div>

      <div className="dish-list">
        {dishes
          .filter(dish => activeCategory === "All" || dish.category === activeCategory)
          .map(dish => (
            <div key={dish.id} className="dish">
              <img src={dish.image} alt={dish.name} />
              <div className="dish-name">{dish.name}</div>
              <div className="dish-price">${dish.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
