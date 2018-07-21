import React, { Component } from 'react';
import Filters from './../components/Filters';

class FilterContainer extends Component {
    render() {
        const { events, locations, genres } = this.props;
        return (
            <section className='filter-container'>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                    <Filters title={'Location'} list={ locations } events={ events }/>
                    <Filters title={'Genre'} list={ genres } events={ events } />
                    <button>Filter</button>
            </section>
        )
    }
}

export default FilterContainer;