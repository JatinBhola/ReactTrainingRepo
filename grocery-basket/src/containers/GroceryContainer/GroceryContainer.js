import React, { Component } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import styles from './GroceryContainer.module.css';
import ListItem from '../../components/ListItem/ListItem';
class GroceryContainer extends Component{
    render(){
        return (
            <div className={styles.GroceryContainer}>
                <header>
                    <h3>
                        <FontAwesomeIcon icon={faLeaf} />
                        Groceries
                    </h3>
                </header>
                <ul>
                    {this.props.groceries.map((grocery,ind) => (
                        // <li key={grocery.id} onClick={this.props.selectGrocery.bind(this,grocery)}>{grocery.name}</li>
                        <ListItem
                            key={grocery.id}
                            iconVal={faPlusSquare}
                            colorVal={"green"}
                            even={ind%2 === 0}
                            click={this.props.selectGrocery.bind(this,grocery)}>
                            {grocery.name}
                        </ListItem>
                    ))}
                </ul>
            </div>
        );
    }
}

export default GroceryContainer;