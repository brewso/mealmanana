import React from 'react';
import database from './database'; // sub for meal db atm

import './App.css';

const { days, meals, food } = database();
const getMealsForDate = date => days.filter(day => day.date === date);
var i = 1;

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
          <li className="list">
            <p>{meal.label}</p>
            <button key={meals[meal.meal].id} className="Meal" tabIndex={i++}>
              {meals[meal.meal].name}
            </button>
            <div className="mealDescription"><div>{food[meals[meal.meal].name].recipe}</div></div>
          </li>
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
