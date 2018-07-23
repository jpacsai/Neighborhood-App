import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtersToApply } from './../actions/filtersToApply';

class Filters extends Component {
    render() {
        const { title, list } = this.props;
        if (list) {
            return (
                <select 
                    selected={ title } 
                    onChange={ (val) => 
                    this.props.filtersToApply(title, val)
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filtersToApply: filtersToApply }, dispatch);
}

export default connect(null, mapDispatchToProps)(Filters);