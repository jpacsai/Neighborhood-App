import React, { Component } from 'react';
import List from '../components/List';


class ListContainer extends Component {
    render() {
        return (
            <section className='event-list-container'>
                <h2 className={ ['aside-header', 'aside-header-list'].join(' ') }>Events</h2>
                <ul className='event-list'>
                    <List list={this.props.events}/>
                </ul>
            </section>
        )
    }
}

export default ListContainer;