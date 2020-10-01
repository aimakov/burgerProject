import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        burger: [
            {id: 'meat', amount: 0},
            {id: 'cheese', amount: 0},
            {id: 'salad', amount: 0},
            {id: 'bacon', amount: 0}
        ]
    }

    inrease = (ingredientId) => {

        const ingredientIndex = this.state.burger.findIndex(c => {
            return c.id === ingredientId;
        })

        const ingredient = {...this.state.burger[ingredientIndex]};

        ingredient.amount++;

        const ingredients = [...this.state.burger]
        ingredients[ingredientIndex].amount = ingredient.amount;

        this.setState({
            burger: ingredients
        })

    }

    decrease = (ingredientId) => {

        const ingredientIndex = this.state.burger.findIndex(c => {
            return c.id === ingredientId;
        })

        const ingredient = {...this.state.burger[ingredientIndex]};

        if (ingredient.amount>0) {ingredient.amount--;}
        

        const ingredients = [...this.state.burger]
        ingredients[ingredientIndex].amount = ingredient.amount;

        this.setState({
            burger: ingredients
        })

    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.burger}/>
                
                <BuildControls increase={this.inrease} decrease={this.decrease} ingredients={this.state.burger}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;