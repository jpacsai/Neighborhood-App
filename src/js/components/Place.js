import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCloseUp } from './../actions/closeCloseUp';
import { hoverOutList } from './../actions/hoverOutList';
import { closeUp } from '../actions/closeUp';
import { closeInfoWindow } from './../actions/closeInfoWindow';
import { openMarkerWindow } from './../actions/openMarkerWindow';
import MarkerEvent from './MarkerWindow';
import { closeMarkerWindow } from './../actions/closeMarkerWindow';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { closeCloseUp, eventInfo, showInfo, hoverId, hoverOut, closeUp, venue, closeInfoWindow, openMarkerWindow, markerEvents, markerWindowId, markerWindowOpen, closeMarkerWindow } = this.props;

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

            { ((showInfo && eventInfo) && (this.props.venueId === eventInfo._embedded.venues[0].id)) &&
            <div className='event-infoWindow'>
                <h3>{ eventInfo.name}</h3>
                <h4>{ eventInfo._embedded.venues[0].name}</h4>
                <img className='event-infoWindow-img' src={ eventInfo.images[5].url} alt='Photo of the artist/event' />
                <button 
                    className='event-infoWindow-close-btn' 
                    onClick={ () => {
                        closeCloseUp(place); 
                        hoverOut();
                    } }>X</button>
            </div> }

            { (markerWindowOpen && (this.props.venueId === markerWindowId)) &&
                <div className='event-infoWindow'>
                <h3>'Title'</h3>
                
                <ul>
                    { markerEvents.map( event => {
                        return (
                            <MarkerEvent key={event.id} event={ event } />
                        )
                    })}
                </ul>
                <button 
                    className='event-infoWindow-close-btn' 
                    onClick={ () => {
                        closeMarkerWindow();
                        closeCloseUp(place);
                    } }>X</button>
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
        markerWindowId: state.markerWindow.markerVenue.venueId
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