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
            <ul className='event-list'>
                <List list={this.props.events}/>
            </ul>
        )
    }
}

function mapStateToProps(state) {
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