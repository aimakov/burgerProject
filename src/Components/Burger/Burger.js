import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = (props) => {

    let temp = [];

    props.ingredients.map((ingredients) => {

        for (let i=0; i<ingredients.amount; i++) {
            temp.push(<BurgerIngredient type={ingredients.id} key={ingredients.id+i}/>)
        }

        return null;
    })

    if (props.total_amount === 0) {
        temp = <p>Please add ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {temp}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;