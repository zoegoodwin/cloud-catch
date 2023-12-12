export const Search = 'use client';

// import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from './api/WeatherContext.js';

/* @client */
const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { searchLocations, locations, fetchWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (inputValue) {
      searchLocations(inputValue);
    }
  }, [inputValue, searchLocations]);

  useEffect(() => {
    if (locations) {
      setSuggestions(locations);
    }
  }, [locations]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (location) => {
    setInputValue(location.name);
    fetchWeatherData(location.province_or_territory, location.slug);
    // Trigger the weather data fetch here if required
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="location-input" className="text-lg">Enter a location</label>
      <input 
        type="text" 
        id="location-input" 
        placeholder="Type here" 
        className="input input-bordered input-md w-full max-w-xs"
        value={inputValue} 
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((location, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(location)}
              className="suggestion-item"
            >
              {location.name}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .suggestions-list {
          list-style: none;
          margin-top: 8px;
          padding: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .suggestion-item {
          padding: 8px;
          cursor: pointer;
        }
        .suggestion-item:hover {
          background-color: #f3f3f3;
        }
      `}</style>
    </div>
  );
};

export default Search;
