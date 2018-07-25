import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterEvents } from './../actions/filterEvents';
import { hideDatePicker } from './../actions/hideDatePicker';
import DatePicker from './../components/DayPicker';
import Filters from './Filters';

class FilterModal extends Component {

    render() {

        return (
            <form className='filter-modal' onSubmit={ (e) => {
                this.props.filterEvents(e, this.props.events, this.props.locationFilter)
            }
                    } >
                <DatePicker />
                <Filters title={ 'Location' } list={ this.props.list } events={ this.props.events }/>
                <input type="submit" value="Submit" />

            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);