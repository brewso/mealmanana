import React from 'react';
import database from './database'; // sub for meal db atm

import './App.css';

const { days, meals } = database();
const getMealsForDate = date => days.filter(day => day.date === date);

//rough skeleton for layout
const App = () => (
  <div className="App">
    <div className="Calendar">
      <header className="Calendar-header">
        <div className="Brand">
          <h1>Meal Ma&#241;ana</h1>
        </div>
      </header>
      <div className="Calendar-navigation">
        <button>Week</button>
        <button>Add Meal</button>
      </div>
      <div className="Calendar-day">
        {getMealsForDate("2018-10-14").map((meal) => (
          <ul>
            {meal.label}
            <li key={meals[meal.meal].id} className="Meal">
              {meals[meal.meal].name}
            </li>
          </ul>
        ))}
      </div>
      <footer className="Calendar-footer">
        <button type="button">Today</button>
        <button type="button">Shopping List</button>
        <button type="button">Tomorrow</button>
      </footer>
    </div>
  </div>
)

export default App;
