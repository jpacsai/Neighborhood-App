import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './../components/Filters';
// import * as createFilters from './../actions/eventFetch';

class FilterContainer extends Component {
    render() {
        console.log('in filter genres: ',this.props.genres);
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
    console.log('state: ',state.filters)
    return {
        locations: state.filters[1],
        genres: state.filters[0]
    }
}

export default connect(mapStateToProps)(FilterContainer);

// export default FilterContainer;