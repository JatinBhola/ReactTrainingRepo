import React,{ useState} from 'react';
import './ListItem.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ListItem = (props)=>{
    const [state, setState] = useState({hovered:false});
    const mouseInHandler = (event)=>{
        setState({hovered:true})
    }
    const mouseOutHandler = (event)=>{
        setState({hovered:false})
    }
    
    return (
    <li 
        onClick={props.click}
        className={props.classes.concat('list-item').join(' ')}
        onMouseEnter={mouseInHandler}
        onMouseLeave={mouseOutHandler}>
        <FontAwesomeIcon style={{paddingRight:"5px"}} icon={props.iconVal} color={state.hovered ? props.colorVal : "white"}/>{props.children}
    </li>
    )
}
export default ListItem