import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from '../components/Filters';
import { filterEvents } from './../actions/filterEvents';
import { hideDatePicker } from './../actions/hideDatePicker';
import DatePicker from './../components/DayPicker';

class FilterModal extends Component {

    render() {
        const { events, locations } = this.props;

        return (
            <form onSubmit={ (e) => 
                this.props.filterEvents(e, this.props.events, this.props.locationFilter) }>
                    <DatePicker />
                    <Filters title={ 'Location' } list={ locations } events={ events }/>
                    <button onClick={ () => this.props.hideDatePicker(this.props.isHidden) }>Filter</button>
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