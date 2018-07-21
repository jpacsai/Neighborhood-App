import React, { Component } from 'react';
import Filters from '../components/Filters';

class FilterContainer extends Component {
    click() {
        console.log('haho');
    }

    render() {
        return (
            <section className='filter-container'>
                <h2 className={ ['aside-header', 'aside-header-filter'].join(' ') }>Filters</h2>
                    <Filters title={'Location'} list={ this.props.locations }/>
                    <Filters title={'Genre'} list={ this.props.genres }/>
                <button onClick={this.click}>Filter</button>
            </section>
        )
    }
}

export default FilterContainer;