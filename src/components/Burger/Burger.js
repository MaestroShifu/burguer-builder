import React from 'react';
import PropTypes from 'prop-types';

import style from './Burger.module.css';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map((key) => {
            return [...Array(props.ingredients[key])].map((data, index) => {
                return <BurgerIngredients key={`${index}${key}`} type={key} />
            }); 
        }).reduce((array, element) => {
            return array.concat(element);
        }, []);

    return(
        <div className={style.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients.length !== 0 ? transformedIngredients : <p>Please start adding ingredients!</p>}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

burger.propTypes = {
    ingredients: PropTypes.shape({
        salad: PropTypes.number,
        bacon: PropTypes.number,
        cheese: PropTypes.number,
        meat: PropTypes.number
    }).isRequired,
}

export default burger;