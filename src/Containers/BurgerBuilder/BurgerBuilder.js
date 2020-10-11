import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

class BurgerBuilder extends Component {

    state = {
        burger: [
            {id: 'meat', amount: 0, price: 7},
            {id: 'cheese', amount: 0, price: 3},
            {id: 'salad', amount: 0, price: 2},
            {id: 'bacon', amount: 0, price: 4}
        ],
        sum: 0,
        ingredient_amount: 0,
        showOrder: false
    }

    toggleOrder = () => {
        let temp = this.state.showOrder;
        this.setState({
            showOrder: !temp
        })
        console.log(this.state.showOrder);
    }

    increase = (ingredientId) => {

        const ingredientIndex = this.state.burger.findIndex(c => {
            return c.id === ingredientId;
        })

        const ingredient = {...this.state.burger[ingredientIndex]};
        console.log(ingredient);
        ingredient.amount++;

        let temp = this.state.ingredient_amount;
        let total = this.state.sum;
        temp++;
        total = total + ingredient.price;
        
        const ingredients = [...this.state.burger]
        ingredients[ingredientIndex].amount = ingredient.amount;

        this.setState({
            burger: ingredients,
            ingredient_amount: temp,
            sum: total
        })

    }

    decrease = (ingredientId) => {

        const ingredientIndex = this.state.burger.findIndex(c => {
            return c.id === ingredientId;
        })

        const ingredient = {...this.state.burger[ingredientIndex]};

        let temp = this.state.ingredient_amount;
        let total = this.state.sum;

        if (ingredient.amount>0) {
            total = total - ingredient.price;
            ingredient.amount--;
            temp--;
        }

        const ingredients = [...this.state.burger]
        ingredients[ingredientIndex].amount = ingredient.amount;

        this.setState({
            burger: ingredients,
            ingredient_amount: temp,
            sum: total
        })

    }

    render() {

        let Order = null;

        if(this.state.showOrder) {
            Order = (
                <OrderSummary ingredient={this.state.burger} />
            )
        }

        return (
            <Aux>
                <Burger ingredients={this.state.burger} total_amount={this.state.ingredient_amount}/>
                <p>Totatl amount of ingredients: {this.state.ingredient_amount}</p>
                <p>Total Price: ${this.state.sum}</p>
                {Order}
                <button onClick={this.toggleOrder}>Order Now</button>
                <BuildControls plus={this.increase} minus={this.decrease}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;