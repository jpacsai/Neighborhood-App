import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtersToApply } from './../actions/filtersToApply';

class FilterList extends Component {
    render() {
        const { title, locations } = this.props;
        
        if (locations) {
            return (
                <div className='filter-select'>
                    <h3>Locations</h3>
                    { locations.map(item => {
                        return (
                            <div key={item}>
                                <input
                                    type="checkbox" 
                                    name={item} 
                                    value={item} 
                                    onChange={ (value) => this.props.filtersToApply(value)}
                                />{item}<br/>
                            </div>
                        )
                    }) }
                </div>
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

/* onChange={ (val) => this.props.filtersToApply(title, val)} */