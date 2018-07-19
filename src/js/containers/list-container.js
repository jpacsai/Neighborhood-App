import React, { Component } from 'react';
import List from './../components/List';
import { connect } from 'react-redux';

class ListContainer extends Component {
    render() {
        return (
            <List list={this.props.places}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        places: state.places
    }
}
/*
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ListContainer);*/

export default connect(mapStateToProps)(ListContainer);