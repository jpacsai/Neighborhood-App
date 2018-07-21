import React, { Component } from 'react';
import List from './../components/List';
import { connect } from 'react-redux';
import * as loadData from './../actions/eventFetch';

class ListContainer extends Component {
    componentWillMount() {
        this.props.loadData();
    }

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

function mapStateToProps(state) {
    console.log('events: ', state.events);
    return {
        events: state.events
    }
}
/*
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectEvent: selectEvent }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ListContainer);*/

export default connect(mapStateToProps, loadData)(ListContainer);