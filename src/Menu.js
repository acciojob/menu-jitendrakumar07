import React from "react";

const Menu = ({ dishes, filterDishes, activeCategory }) => {
  return (
    <div>
      <div>
        <button id="filter-btn-1" onClick={() => filterDishes("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterDishes("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterDishes("Shakes")}>Shakes</button>
      </div>

      <div id="main" className="dish-list">
        {dishes
          .filter(dish => activeCategory === "All" || dish.category === activeCategory)
          .map(dish => (
            <div
              key={dish.id}
              className="dish"
              data-test-id={`menu-item-${dish.category.toLowerCase()}`}
            >
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
