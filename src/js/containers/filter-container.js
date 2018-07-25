import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterEvents } from './../actions/filterEvents';
import { hideDatePicker } from './../actions/hideDatePicker';
import FilterModal from './../components/FilterModal';

class FilterContainer extends Component {

    render() {
        const { events, locations } = this.props;

        return (
            <section className={ 'filter-container' }>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                <button type="button" onClick={ () => this.props.hideDatePicker(this.props.isHidden) }>
                    { (this.props.isHidden  && 'Show Filters') || 'Hide Filters'}
                </button>
                
                {/* this.props.isHidden && < FilterModal /> */}

            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);