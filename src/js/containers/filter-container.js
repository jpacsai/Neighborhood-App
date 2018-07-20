import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './../components/Filters';

class FilterContainer extends Component {
    render() {
        return (
            <section className='filter-container'>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                    <Filters />
                    <Filters />
                    <Filters />
                <button>Filter</button>
            </section>
        )
    }
}

/*
function mapStateToProps(state) {
    return {
        events: state.events
    }
}
*/

// export default connect(mapStateToProps, loadData)(ListContainer);

export default FilterContainer;