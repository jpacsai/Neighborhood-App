import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterEvents } from './../actions/filterEvents';
import { hideDatePicker } from './../actions/hideDatePicker';
import DatePicker from './../components/DayPicker';
import FilterList from './FilterList';

class FilterModal extends Component {

    render() {

        return (
            <form className='filter-modal' onSubmit={ (e) => {
                this.props.filterEvents(e, this.props.events, this.props.locationFilter)
            } } >
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                <DatePicker />
                <FilterList title={ 'Location' } locations={ this.props.locations } />
                <input type="submit" value="Submit" />
                <button 
                    type='button'
                    className='filter-reset-btn'>
                    Clear Filters
                </button>
                <button 
                    className='filter-modal-close-btn' 
                    type='button'
                    onClick={ () => this.props.hideDatePicker(this.props.isHidden) } >
                    Close
                </button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        locations: state.filters.locations,
        events: state.events.events,
        locationFilter: state.filtersToApply.location,
        isHidden: state.isHidden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterEvents: filterEvents,
        hideDatePicker: hideDatePicker 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);