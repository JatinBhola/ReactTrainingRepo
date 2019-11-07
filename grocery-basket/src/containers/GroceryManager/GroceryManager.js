import React, { Component } from 'react';
import GroceryContainer from '../GroceryContainer/GroceryContainer';
import BasketContainer from '../BasketContainer/BasketContainer';
import styles from './GroceryManager.module.css';
import Footer from '../../components/FooterComponent/Footer';

class GroceryManager extends Component{
    state={
        groceryItems: [
            {
                "id": 1,
                "name": "Strawberry"
            },
            {
                "id": 2,
                "name": "Blueberry"
            },
            {
                "id": 3,
                "name": "Orange"
            },
            {
                "id": 4,
                "name": "Banana"
            },
            {
                "id": 5,
                "name": "Apple"
            },
            {
                "id": 6,
                "name": "Carrot"
            },
            {
                "id": 7,
                "name": "Celery"
            },
            {
                "id": 8,
                "name": "Mushroom"
            },
            {
                "id": 9,
                "name": "Green Pepper"
            },
            {
                "id": 10,
                "name": "Eggs"
            },
            {
                "id": 11,
                "name": "Cheese"
            },
            {
                "id": 12,
                "name": "Butter"
            },
            {
                "id": 13,
                "name": "Chicken"
            },
            {
                "id": 14,
                "name": "Beef"
            },
            {
                "id": 15,
                "name": "Pork"
            },
            {
                "id": 16,
                "name": "Fish"
            },
            {
                "id": 17,
                "name": "Rice"
            },
            {
                "id": 18,
                "name": "Pasta"
            },
            {
                "id": 19,
                "name": "Bread"
            }
        ],
        basket:[],
        displayMode:"all"
    }
    addToBasket = (groceryItem) => {
        let itemIndex = this.state.basket.findIndex(item => item.id === groceryItem.id);
        if(itemIndex === -1){
            const basketItem = {
                id:groceryItem.id,
                name:groceryItem.name,
                count: 1,
                bought: false
            }
            this.setState(prevState=>{
                return {
                    basket: prevState.basket.concat(basketItem)
                }
            });
        }
        else{
            const updatedBasket = [...this.state.basket];
            const updatedBasketItem = {...updatedBasket[itemIndex]};
            if(updatedBasketItem.bought){
                updatedBasketItem.bought = false;
                updatedBasketItem.count = 1
            }
            else updatedBasketItem.count++;
            updatedBasket[itemIndex] = updatedBasketItem;
            this.setState({basket:updatedBasket})
        }
    }
    purchaseToggle = (itemId) => {
        const itemIndex = this.state.basket.findIndex(item => item.id === itemId);
        const updatedBasket = [...this.state.basket];
        const updatedBasketItem = {...updatedBasket[itemIndex]};
        updatedBasketItem.bought= !updatedBasketItem.bought
        updatedBasket[itemIndex] = updatedBasketItem;
        this.setState({basket:updatedBasket});
    }

    clearBasket = () => {
        this.setState({basket:[]})
    }

    setDisplayMode = (mode) =>{
        this.setState({displayMode: mode});
    }
    render(){
        let basketItemList = []
        if(this.state.basket){
            if(this.state.displayMode === "all"){
                basketItemList = [...this.state.basket]
            }
            else if(this.state.displayMode === "pending"){
                basketItemList = this.state.basket.filter(item => !item.bought)
            }
            else if(this.state.displayMode === "purchased"){
                basketItemList = this.state.basket.filter(item => item.bought)
            }
        }
        return (
            <div>
                <div className={styles.GroceryManager}>
                    <GroceryContainer groceries={this.state.groceryItems} selectGrocery={this.addToBasket} />
                    <BasketContainer 
                        basketItems={basketItemList} 
                        purchaseItem={this.purchaseToggle}
                        clearBasket={this.clearBasket} />
                </div>
                <Footer 
                    setFilter={this.setDisplayMode}
                    filterVal={this.state.displayMode} />
            </div>
        );
    }
}

export default GroceryManager