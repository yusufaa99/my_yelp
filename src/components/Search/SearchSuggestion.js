import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchSuggestion.module.css";

export function SearchSuggestion({ location }) {
  const navigate = useNavigate();
  const suggestions = ["Restaurants", "Coffee Shops", "Hotels", "Bars", "Gyms"];
  const [searchLocation, setSearchLocation] = useState(location || "");

  function handleClick(suggestion) {
    if (!searchLocation.trim()) {
      alert("Please enter a location before searching.");
      return;
    }
    navigate(`/search/${encodeURIComponent(suggestion)}/${encodeURIComponent(searchLocation)}`);
  }

  return (
    <div className={styles.suggestions}>
      <h3>Popular Searches</h3>

      {/* Input for users to enter location */}
      <input
        type="text"
        placeholder="Enter a location..."
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        className={styles.locationInput}
      />

      <div className={styles.list}>
        {suggestions.map((item) => (
          <button 
            key={item} 
            onClick={() => handleClick(item)} 
            className={styles.suggestionButton} 
            aria-label={`Search for ${item} in ${searchLocation || "your location"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
