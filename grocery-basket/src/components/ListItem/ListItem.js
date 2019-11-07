import React,{ useState} from 'react';
import styles from './ListItem.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ListItem = (props)=>{
    const [state, setState] = useState({hovered:false});
    const mouseInHandler = (event)=>{
        setState({hovered:true})
    }
    const mouseOutHandler = (event)=>{
        setState({hovered:false})
    }
    const liClasses = [styles.listItem, props.even? styles.evenItem:styles.oddItem, props.bought? styles.bought:""]
    return (
    <li 
        onClick={props.click}
        className={liClasses.join(' ')}
        onMouseEnter={mouseInHandler}
        onMouseLeave={mouseOutHandler}>
        <FontAwesomeIcon style={{paddingRight:"5px"}} icon={props.iconVal} color={state.hovered ? props.colorVal : "white"}/>{props.children}
    </li>
    )
}
export default ListItem