import React, { Component } from 'react';
import { closeUp } from './../actions/closeUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class List extends Component {

    render() {

        const { list, closeUp } = this.props;
    
        if (list === 'no match') {
            return (
                <li className='event'>No match found</li>
            )
        }
    
        else if (list) {
            return list.map( (event) => {
    
                const date = event.dates.start.localDate;
                const time = event.dates.start.localTime ? (event.dates.start.localTime).slice(0, 5) : null;
                const location = event._embedded.venues[0].city.name;
                
                return (
                    <li 
                        key={ event.id }
                        className='event'
                        onClick={ () => closeUp(event) }
                    >
                        { event.name }
                        <p>Date: { date } { time } Location: { location }</p>
                    </li>
                )
            })
        }
    
        else {
            return null;
        }
    }

}

/* function mapStateToProps(state) {
    return {

    }
} */

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeUp
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(List);