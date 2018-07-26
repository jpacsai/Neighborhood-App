import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtersToApply } from './../actions/filtersToApply';

class FilterList extends Component {

    

    render() {

        const { locations, filtersToApply, locationFilters } = this.props;
        
        if (locations) {

            return (
                <div className='filter-select'>
                    <h3>Locations</h3>
                    { locations.map(item => {

                        return (
                            <div key={ item } className='filter-select-li'>
                                <input
                                    id={ item }
                                    defaultChecked = { locationFilters.includes(item) }
                                    checked={ locationFilters.includes(item) }
                                    type="checkbox"
                                    name={ item } 
                                    value={ item } 
                                    onChange={ (value) => {
                                        filtersToApply(value, locationFilters);
                                    } }
                                />
                                <label htmlFor={ item }>{ item }</label>
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

function mapStateToProps(state) {
    return {
        locations: state.filterLists.locations,
        locationFilters: state.filtersToApply.locations
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filtersToApply: filtersToApply }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);

/* onChange={ (val) => this.props.filtersToApply(title, val)} */