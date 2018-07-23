import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { filterEvents } from './../actions/filterEvents';
import { bindActionCreators } from 'redux';
import DateContainer from './date-container';

class FilterContainer extends Component {
    render() {
        const { events, locations, genres } = this.props;
        return (
            <section className='filter-container'>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                <form onSubmit={ (e) => this.props.filterEvents(e, this.props.events, this.props.genreFilter, this.props.locationFilter) }>
                    <DateContainer />
                    <Filters title={'Location'} list={ locations } events={ events }/>
                    <Filters title={'Genre'} list={ genres } events={ events } />
                    <button>Filter</button>
                </form>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events.events,
        genreFilter: state.filtersToApply.genre,
        locationFilter: state.filtersToApply.location
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterEvents: filterEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);