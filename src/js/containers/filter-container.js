import React, { Component } from 'react';
import Filters from './../components/Filters';

class FilterContainer extends Component {
    render() {
        const { events, locations, genres } = this.props;
        return (
            <section className='filter-container'>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                    <Filters title={'Location'} list={ locations } locations={ locations } events={ events } genres={ genres }/>
                    <Filters title={'Genre'} list={ genres } locations={ locations } events={ events } genres={ genres }/>
            </section>
        )
    }
}

export default FilterContainer;