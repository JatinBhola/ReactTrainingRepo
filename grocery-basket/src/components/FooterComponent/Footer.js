import React, {Component} from 'react';
import './Footer.css'
class Footer extends Component{
    render(){
        return (
            <div className="Footer">
                <span 
                    className={(this.props.filterVal==="all" ? "active":"") +" filter-anchor"} 
                    onClick={this.props.setFilter.bind(this,'all')}>
                    All
                </span>,
                <span 
                    className={(this.props.filterVal==="pending" ? "active":"") +" filter-anchor"} 
                    onClick={this.props.setFilter.bind(this,'pending')}>
                    Pending
                </span>,
                <span 
                    className={(this.props.filterVal==="purchased" ? "active":"") +" filter-anchor"} 
                    onClick={this.props.setFilter.bind(this,'purchased')}>
                    Purchased
                </span>
            </div>
        );
    }
}
export default Footer;