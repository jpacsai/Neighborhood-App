import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Place from './../components/Place';

class PlaceContainer extends Component {
    render() {
        return (
            <Place lat={52.486243} lng={-1.890401} text={'Here'} /* Birmingham */ />
        )
    }
}

export default PlaceContainer;