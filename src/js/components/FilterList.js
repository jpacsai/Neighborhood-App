import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtersToApply } from './../actions/filtersToApply';

class FilterList extends Component {
    render() {
        const { title, locations } = this.props;
        
        if (locations) {
            return (
                <select 
                    selected={ title } 
                    onChange={ (val) => this.props.filtersToApply(title, val)
                }>
                    <option disabled value={title}>Select {title}</option>
                    { locations.map(item => {
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

export default connect(null, mapDispatchToProps)(FilterList);