import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './../components/Filters';
import * as createFilters from './../actions/eventFetch';

class FilterContainer extends Component {
    componentWillMount() {
        this.props.createFilters(events);
    }

    render() {
        console.log('genres: ',this.props.genres);
        return (
            <section className='filter-container'>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                    <Filters title={'Location'} list={ this.props.locations }/>
                    <Filters title={'Genre'} list={ this.props.genres }/>
                <button>Filter</button>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events,
        locations: state.locations,
        genres: state.genres
    }
}

export default connect(mapStateToProps, createFilters)(FilterContainer);

// export default FilterContainer;