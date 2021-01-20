import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h5>Current Price: <strong>{props.price.toFixed(2)}$</strong></h5>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        ))}

        <button
        disabled={!props.purchasable} 
        className={classes.OrderButton}>ORDER NOW</button>
    </div>
);


export default buildControls;