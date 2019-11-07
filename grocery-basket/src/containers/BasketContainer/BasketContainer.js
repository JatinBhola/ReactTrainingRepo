import React, { Component } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBag, faTrash, faMinusSquare} from '@fortawesome/free-solid-svg-icons';
import styles from './BasketContainer.module.css';
import ListItem from '../../components/ListItem/ListItem';
class BasketContainer extends Component{
    render(){
        let basketList = <li>Your basket is empty!</li>
        if(this.props.basketItems.length > 0){
            basketList = this.props.basketItems.map((item,ind) => (
                // <li 
                //     className={item.bought?"bought":null} 
                //     key={item.id}
                //     onClick={this.props.purchaseItem.bind(this,item.id)}>
                //     <FontAwesomeIcon icon={faMinusSquare} />
                //     
                // </li>
                <ListItem
                    key={item.id}
                    iconVal={faMinusSquare}
                    colorVal={"red"}
                    bought={item.bought}
                    even={ind%2 === 0}
                    click={this.props.purchaseItem.bind(this,item.id)}>
                    {item.count} {item.name}
                </ListItem>
            ));
        }
        return (
            <div className={styles.BasketContainer}>
                <header>
                    <h3>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        Basket
                        {this.props.basketItems.length > 0 ?<span 
                            className={styles.trashIcon}
                            onClick={this.props.clearBasket}><FontAwesomeIcon icon={faTrash} /></span>: null}
                    </h3>
                </header>

                <ul>
                    {basketList}
                </ul>
            </div>
        );
    }
}

export default BasketContainer;