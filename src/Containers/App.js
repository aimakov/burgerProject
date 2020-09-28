import React, { Component } from 'react';
import classes from './App.css';
import BurgerIngredient from '../Burger/BurgerIngredient'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <BurgerIngredient ingredient={'BreadTop'}></BurgerIngredient>
          <BurgerIngredient ingredient={'Meat'}></BurgerIngredient>
          <h1>lol</h1>
      </div>
    );
  }
}

export default App;
