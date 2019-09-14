import React from 'react';

import style from './BurgerControls.module.css';

import BuildControls from './BuildControl/BuildControls';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = ( props ) => {
    return (
        <div className={style.BuildControls}>
            <p>Current Price: <b>{props.price.toFixed(2)}</b></p>
            {controls.map((value) => {
                return <BuildControls 
                    key={value.label} 
                    label={value.label} 
                    added={() => {props.ingredientsAdd(value.type)}}
                    removed={() => {props.ingredientRemove(value.type)}}
                    disabled={props.disabled[value.type]}/>
            })}

            <button disabled={!props.purchasable} onClick={props.ordered} className={style.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;