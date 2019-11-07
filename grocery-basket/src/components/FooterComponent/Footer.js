import React, {Component} from 'react';
import styles from './Footer.module.css'
class Footer extends Component{
    render(){
        return (
            <div className={styles.Footer}>
                <span 
                    className={[this.props.filterVal==="all" ? styles.active:"",styles.filterAnchor].join(' ')} 
                    onClick={this.props.setFilter.bind(this,'all')}>
                    All
                </span>,
                <span 
                    className={[this.props.filterVal==="pending" ? styles.active:"",styles.filterAnchor].join(' ')} 
                    onClick={this.props.setFilter.bind(this,'pending')}>
                    Pending
                </span>,
                <span 
                    className={[this.props.filterVal==="purchased" ? styles.active:"",styles.filterAnchor].join(' ')} 
                    onClick={this.props.setFilter.bind(this,'purchased')}>
                    Purchased
                </span>
            </div>
        );
    }
}
export default Footer;