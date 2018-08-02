import React, { Component } from 'react';
import Map from '../components/Map';

class MapContainer extends Component {
    render() {
        return (
            <Map options={{gestureHandling: 'cooperative'}}/>
        )
    }
}

export default MapContainer;