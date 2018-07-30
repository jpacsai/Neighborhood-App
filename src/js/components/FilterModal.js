import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterEvents } from './../actions/filterEvents';
import { modalVisibility } from './../actions/modalVisibility';
import DatePicker from './../components/DayPicker';
import FilterList from './FilterList';
import { resetFiltering } from './../actions/resetFiltering';

class FilterModal extends Component {

    render() {

        const { events, locationFilter, dateFilter, modalVisible, filterEvents, reset, sortByMethod, hideModal } = this.props;

        return (
            <form className='filter-modal' onSubmit={ (e) => {
                filterEvents(e, events, locationFilter, dateFilter, sortByMethod);
            } } >
                <h2 className='aside-header aside-header-filter'>Filters</h2>
                <button 
                    className='filter-modal-btn filter-modal-close-btn' 
                    type='button'
                    onClick={ () => hideModal(modalVisible) } >
                    Close
                </button>
                <div className='filter-area'>
                    <DatePicker />
                    <FilterList />
                </div>
                <div className='filter-buttons'>
                    <input className='filter-modal-btn' type="submit" value="Submit" />
                    <button 
                        type='button'
                        className='filter-modal-btn filter-reset-btn'
                        onClick={ (e) => {
                            reset(events, sortByMethod);
                        } } >
                        Clear Filters
                    </button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events,
        locationFilter: state.filtersToApply.locations,
        dateFilter: state.filtersToApply.selectedDays,
        modalVisible: state.modalVisibility,
        sortByMethod: state.sortBy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterEvents: filterEvents,
        hideModal: modalVisibility,
        reset: resetFiltering
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);