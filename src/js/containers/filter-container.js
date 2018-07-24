import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from '../components/Filters';
import { filterEvents } from './../actions/filterEvents';
import { hideDatePicker } from './../actions/hideDatePicker';
import DatePicker from './../components/DayPicker';

class FilterContainer extends Component {

    render() {
        const { events, locations } = this.props;

        const basicFilterStyle = 'filter-container';
        const openFilterStyle = 'filter-container-open';
        
        const filterStyle = this.props.isHidden ? basicFilterStyle : [basicFilterStyle, openFilterStyle].join(' ');
        
        return (
            <section className={ filterStyle }>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                <button type="button" onClick={ () => this.props.hideDatePicker(this.props.isHidden) }>
                    { (this.props.isHidden  && 'Show Filters') || 'Hide Filters'}
                </button>
                { this.props.isHidden === false &&  
                <form onSubmit={ (e) => 
                    this.props.filterEvents(e, this.props.events, this.props.locationFilter) }>
                        <DatePicker />
                        <Filters title={ 'Location' } list={ locations } events={ events }/>
                        <button>Filter</button>
                </form> }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events.events,
        locationFilter: state.filtersToApply.location,
        isHidden: state.dateHidden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterEvents: filterEvents,
        hideDatePicker: hideDatePicker 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);