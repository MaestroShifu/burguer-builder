import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 10,
    bacon: 50,
    cheese: 15,
    meat: 200
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 500,
            purchasable: false,
            purchasing: false
        };
    }

    updatePurchaseState = (ingredients) => {
        let purchasable = {...this.state.purchasable};

        purchasable = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, element) => {
            return sum + element;
        }, 0) > 0;    
        
        this.setState({purchasable: purchasable});
    }

    addIngredientsHandler = (type) => {
        const state = {...this.state};

        state.ingredients[type] = ++state.ingredients[type];
        state.totalPrice = +state.totalPrice + +INGREDIENTS_PRICES[type];

        this.setState(state);
        this.updatePurchaseState(state.ingredients);
    }

    removeIngredientsHandler = (type) => {
        const state = {...this.state};

        state.ingredients[type] = state.ingredients[type] === 0 ? 0 : --state.ingredients[type];;
        state.totalPrice = +state.totalPrice - +INGREDIENTS_PRICES[type];
        
        this.setState(state);
        this.updatePurchaseState(state.ingredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: !this.state.purchasing});
    }

    pruchaseContinueHandler = () => {
        alert('You continue');
    }

    render() {
        const disabledIngredient = {...this.state.ingredients}
        
        for(let key in disabledIngredient) {
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }

        return (
            <Auxiliary>
                <Modal 
                    show={this.state.purchasing}
                    modalClose={this.purchaseHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} 
                        purchaseCanceled={this.purchaseHandler}
                        purchaseContinue={this.pruchaseContinueHandler}/>
                </Modal>
                
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls 
                    price={this.state.totalPrice}
                    ingredientsAdd={this.addIngredientsHandler}
                    ingredientRemove={this.removeIngredientsHandler}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    disabled={disabledIngredient} />
            </Auxiliary>
        );
    }
} 

export default BurgerBuilder;