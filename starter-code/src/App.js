import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/foodBox-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        
        <div className= "food-container">
        
          {foods.map(food => (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
            />
          ))}
        </div>
        <br />
        
      </div>
    );
  }
}

export default App;
