import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { highligthMarker_Out } from './../actions/highligthMarker_Out';
import { openInfoWindow } from './../actions/infoWindow';
import { highligthMarker_In } from './../actions/highligthMarker_In';
import { closeInfoWindow } from './../actions/closeInfoWindow';
import { hideModal } from './../actions/hideModal';
import { closeAside } from './../actions/closeAside';
import { hoverMarkerIn } from './../actions/hoverMarker_In';
import { hoverMarkerOut } from './../actions/hoverMarker_out';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { hoverId, venue, infoWindow, openInfoWindow, closeInfoWindow, highligthMarker_In, highligthMarker_Out, hideModal, closeAside, hoverMarkerIn, hoverMarkerOut, hoverMarker } = this.props;
    
    const markerStyle = hoverId === venue.venueId ? 'map-marker map-marker-list-hovered bounce' : 'map-marker';

    const place = {
        lat: venue.lat,
        lng: venue.lng
    }

    const events = venue.eventsArray;

    return (
        <div>
            <div 
                tabIndex="0"
                aria-label={ venue.venueName + " " + venue.venueCity }
                className={ markerStyle }
                onMouseEnter={ () => {
                    hoverMarkerIn(venue.venueId);
                }}
                onMouseLeave={ () => {
                    hoverMarkerOut();
                }}
                onKeyPress={() => {
                    hideModal();
                    openInfoWindow(place, events);
                    highligthMarker_In(venue.venueId)
                    closeAside();
                }}
                onClick={ () => {
                    hideModal();
                    openInfoWindow(place, events);
                    highligthMarker_In(venue.venueId);
                    closeAside();
                } }
            >
                {events.length}
            </div>

            { (hoverMarker && (!infoWindow.value && hoverMarker === venue.venueId)) &&
                <div className='map-marker-hoverInfo'>
                    <span className='map-marker-hoverInfo-venue'>{ venue.venueName }</span>
                    <span className='map-marker-hoverInfo-address'>{ venue.venueAddress}</span>
                </div>
            }

            { (infoWindow && ( infoWindow.events && venue.lat + 0.015 === infoWindow.lat && venue.lng === infoWindow.lng)) &&
            <div className='infoWindow-wrapper'>
                <h4 className='infoWindow-venue'>{ venue.venueName }</h4>
                <p className='infoWindow-venue-address'>{ venue.venueAddress }</p>

                <button 
                    className='infoWindow-close-btn'
                    aria-label='Close info window'
                    onClick={ () => {
                        closeInfoWindow();
                        highligthMarker_Out();
                    } }
                >
                    <i className="fas fa-times"></i>
                </button>

                <div className='infoWindow-event-container'>

                    { infoWindow.events.map( event => {

                        const gen = event.classifications[0].genre.name;
                        const subGen = event.classifications[0].subType.name;
                        const genre = gen === 'Undefined' ? (subGen === 'Undefined' ? null : subGen) : gen;

                        return (
                            <div 
                                className='infoWindow-event'
                                key={ event.name }
                            >
                                <h2 className='infoWindow-event-name'>{ event.name}</h2>
                                <p className='infoWindow-event-date'>{ event.dates.start.displayDate}</p>

                                { genre && <p className='infoWindow-event-genre'>{ genre }</p> }
                                
                                <img className='infoWindow-img' src={ event.images[2].url} alt='artist/event' />
                                <a className='infoWindow-link' href={ event.url } target="_blank">more info here</a>
                            </div>
                        )
                    }) }
                    { infoWindow.events.length > 1 &&
                        <div className='infoWindow-gradient'></div> }
                </div>
            </div> }
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        eventInfo: state.infoWindow,
        hoverId: state.hoverEvent,
        infoWindow: state.infoWindow,
        hoverMarker: state.hoverMarker
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeInfoWindow,
        openInfoWindow,
        highligthMarker_In,
        highligthMarker_Out,
        hideModal,
        closeAside,
        hoverMarkerIn,
        hoverMarkerOut
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);