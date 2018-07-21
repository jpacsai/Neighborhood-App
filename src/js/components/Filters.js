import React, { Component } from 'react';
import { filterAction } from './../actions/filterEvents';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Filters extends Component {
    render() {
        const { title, list } = this.props;
        if (list) {
            return (
                <select selected={ title } onChange={ (val) => 
                    this.props.filterAction(title, val)
                }>
                    <option disabled value={title}>Select {title}</option>
                    { list.map(item => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        )
                    }) }
                </select>
            )
        }
        else {
            return null;
        }
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ filterAction: filterAction }, dispatch);
}

export default connect(null, matchDispatchToProps)(Filters);