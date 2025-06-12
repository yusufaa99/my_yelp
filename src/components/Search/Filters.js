import React from "react";
import styles from "./Filters.module.css";

export function Filters({ setFilters }) {
  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) : value,
    }));
  }

  return (
    <div className={styles.filters}>
      <label htmlFor="category">Category:</label>
      <select name="category" id="category" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="restaurant">Restaurants</option>
        <option value="cafe">Cafes</option>
        <option value="hotel">Hotels</option>
      </select>

      <label htmlFor="rating">Minimum Rating:</label>
      <select name="rating" id="rating" onChange={handleFilterChange}>
        <option value="0">All Ratings</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Stars
          </option>
        ))}
      </select>
    </div>
  );
}
