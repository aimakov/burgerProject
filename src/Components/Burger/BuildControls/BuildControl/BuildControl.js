import React from 'react'
import classes from './BuildControl.css'

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label} ${props.price}</div>
        <button className={classes.Less} onClick={props.decrease}>Less</button>
        <button className={classes.More} onClick={props.increase}>More</button>
    </div>
);

export default BuildControl;