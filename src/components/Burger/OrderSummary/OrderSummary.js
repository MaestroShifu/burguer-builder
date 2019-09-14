import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((key, index) => {
        return( 
            <li key={index}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>);
    });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><b>Total price: {props.price.toFixed(2)}</b></p>
            <p>Continue to checkout ?</p>

            <Button clicked={props.purchaseCanceled} btnType='Danger'>
                CANCEL
            </Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>
                CONTINUE
            </Button>
        </Auxiliary>
    );
}

export default orderSummary;