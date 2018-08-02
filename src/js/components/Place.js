import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCloseUp } from './../actions/closeCloseUp';
import { hoverOutList } from './../actions/hoverOutList';
import { closeUp } from '../actions/closeUp';
import { closeInfoWindow } from './../actions/closeInfoWindow';
import { openMarkerWindow } from './../actions/openMarkerWindow';
import { closeMarkerWindow } from './../actions/closeMarkerWindow';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { closeCloseUp, eventInfo, showInfo, hoverId, hoverOut, closeUp, venue, closeInfoWindow, openMarkerWindow, markerEvents, markerWindowId, markerWindowOpen, closeMarkerWindow, infoWindow } = this.props;

    const match = ( hoverId || markerWindowId ) === this.props.venueId;

    const markerStyle = match ? 'map-marker map-marker-list-hovered bounce' : 'map-marker';

    const place = {
        lat: venue.lat,
        lng: venue.lng
    }

    return (
        <div
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
        >
            <div 
                className={ markerStyle }
                onClick={ () => {
                    closeUp(place);
                    closeInfoWindow();
                    openMarkerWindow(venue);
                } }
            ></div>

            { (infoWindow && (this.props.lat === infoWindow.lat && this.props.lng === infoWindow.lng)) &&
            <div>
                { infoWindow.events.map( event => {
                    return (
                        <div 
                            className='event-infoWindow'
                            key={ event.name }
                        >
                            <h3>{ event.name}</h3>
                            <h4>{ event._embedded.venues[0].name}</h4>
                            <img className='event-infoWindow-img' src={ event.images[5].url} alt='Photo of the artist/event' />
                            <button 
                                className='event-infoWindow-close-btn' 
                                onClick={ () => {
                                    closeInfoWindow();
                                    closeCloseUp(); 
                                    hoverOut();
                                } }>X</button>
                        </div>
                    )
                }) }
                
            </div> }

        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        showInfo: state.closeUp.value,
        eventInfo: state.infoWindow,
        hoverId: state.hoverEvent,
        markerWindowOpen: state.markerWindow.value,
        markerEvents: state.markerWindow.eventsArr,
        markerWindowId: state.markerWindow.markerVenue.venueId,
        infoWindow: state.infoWindow
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeCloseUp,
        hoverOut: hoverOutList,
        closeUp,
        closeInfoWindow,
        openMarkerWindow,
        closeMarkerWindow
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);