import React from 'react'
import Aux from '../../../hoc/Auxiliary'

const BuildControls = (props) => {
        return(
            props.ingredients.map((ingredients) => {
                return <div>
                    <p>{ingredients.id}
                    <button onClick={() => props.increase(ingredients.id)} key={ingredients.id+'increase'}>+</button>
                    <button onClick={() => props.decrease(ingredients.id)} key={ingredients.id+'decrease'}>-</button></p>
                </div>
            })            
        );
}

export default BuildControls;