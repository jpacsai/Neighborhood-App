import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterEvents } from './../actions/filterEvents';
import { hideDatePicker } from './../actions/hideDatePicker';
import DatePicker from './../components/DayPicker';
import FilterList from './FilterList';
import { resetFiltering } from './../actions/resetFiltering';

class FilterModal extends Component {

    render() {
        
        const { events, locations, locationFilter, dateFilter, isHidden, filterEvents, hideDatePicker, reset } = this.props;

        return (
            <form className='filter-modal' onSubmit={ (e) => {
                filterEvents(e, events, locationFilter, dateFilter)
            } } >
                <h2 className='aside-header aside-header-filter'>Filters</h2>
                <button 
                    className='filter-modal-btn filter-modal-close-btn' 
                    type='button'
                    onClick={ () => hideDatePicker(isHidden) } >
                    Close
                </button>
                <div className='filter-area'>
                    <DatePicker />
                    <FilterList locations={ locations } />
                </div>
                <div className='filter-buttons'>
                    <input className='filter-modal-btn' type="submit" value="Submit" />
                    <button 
                        type='button'
                        className='filter-modal-btn filter-reset-btn'
                        onClick={ () => reset() } >
                        Clear Filters
                    </button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events.events,
        locations: state.filters.locations,
        locationFilter: state.filtersToApply.locations,
        dateFilter: state.filtersToApply.selectedDays,
        isHidden: state.isHidden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterEvents: filterEvents,
        hideDatePicker: hideDatePicker,
        reset: resetFiltering 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);