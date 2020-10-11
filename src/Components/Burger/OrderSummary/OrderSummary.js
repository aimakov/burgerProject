import React from 'react';
import classes from './OrderSummary.css';

const OrderSummary = (props) => {
    return(
        <div className={classes.OrderSummary}>
            <ul>
                {props.ingredient.map((ingredient) => <li key={ingredient.id}> <span>{ingredient.id}</span>: amount: {ingredient.amount} </li>)}
            </ul>
        </div>
        
    );
}

export default OrderSummary;