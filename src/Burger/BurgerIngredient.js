import React from 'react'
import classes from './BurgerIngredient.css'

const burgerIngredient = (props) => {

    let lol = '';

    if (props.ingredient == 'BreadTop') {
        lol = classes.BreadTop;
    }
    if (props.ingredient == 'Meat') {
        lol = classes.Meat;
    }

    return(
        <div>
            <div className={lol}> a </div>      
        </div>
    )
}

export default burgerIngredient;