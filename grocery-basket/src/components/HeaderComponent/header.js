import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'
const header = () => (
    <div className={styles.Header}>
        <FontAwesomeIcon icon={faShoppingBasket} size="8x"/>
        <h1>Hello Basket</h1>
    </div>
)

export default header;