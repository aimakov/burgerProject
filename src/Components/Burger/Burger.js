import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = (props) => {

    let temp = [];

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>

            

            {props.ingredients.map((ingredients) => {

                for (let i=0; i<ingredients.amount; i++) {
                    temp.push(<BurgerIngredient type={ingredients.id} key={ingredients.id+i}/>)
                }

                return null;
            })}
            {temp}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;