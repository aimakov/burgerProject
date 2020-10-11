import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad', price: 2},
    { label: 'Meat', type: 'meat', price: 7},
    { label: 'Bacon', type: 'bacon', price: 4},
    { label: 'Cheese', type: 'cheese', price: 3},
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label} price={ctrl.price} increase={() => props.plus(ctrl.type)} decrease={() => props.minus(ctrl.type)}/>
        ))}
    </div>
)

export default BuildControls;