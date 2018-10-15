import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//sub for meal db atm
const meals = ["bacon", "sandwich", "pizza"]

//rough skeleton for layout
const App = () => (
  <div className="App">
    <div className="Calendar">
      <header className="Calendar-header">
        <button>Week</button>
        <h1>Meal Manana</h1>
        <button>Add Meal</button>
      </header>
      <div className="Day">
        {meals.map((meal) => (
          <li key={meal} className="Meal">
            {meal}
          </li>
        ))}
      </div>
      <footer className="Calendar-footer">
        <button>Today</button>
        <button>Shopping List</button>
        <button>Tomorrow</button>
      </footer>
    </div>
  </div>
)

export default App;
