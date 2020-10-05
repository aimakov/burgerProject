import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label} increase={() => props.plus(ctrl.type)} decrease={() => props.minus(ctrl.type)}/>
        ))}
    </div>
)

export default BuildControls;