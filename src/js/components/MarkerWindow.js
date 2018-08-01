import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtersToApply } from './../actions/filtersToApply';

class MarkerEvent extends Component {

    render() {        
        const { event } = this.props;
        return (
            <li>{ event.name }</li>
        )
    }
}

/*
function mapStateToProps(state) {
    return {
        
    }
}*/

/*
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}*/

export default MarkerEvent;

// export default connect(mapStateToProps)(FilterList);