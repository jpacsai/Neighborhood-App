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

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { hoverId, venue, infoWindow, openInfoWindow, closeInfoWindow, highligthMarker_In, highligthMarker_Out, hideModal, closeAside } = this.props;
    
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
                className={ markerStyle }
                onFocus={ () => highligthMarker_In(venue.venueId)}
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
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        highligthMarker_Out,
        closeInfoWindow,
        openInfoWindow,
        highligthMarker_In,
        hideModal,
        closeAside
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);

/* ( infoWindow.events && this.props.lat === infoWindow.lat && this.props.lng === infoWindow.lng)) &&

                { infoWindow.events.map( event => {
                    return (
                        <div 
                            className='event-infoWindow'
                            key={ event.name }
                        >
                            <h3>{ event.name}</h3>
                            <h4>{ event._embedded.venues[0].name}</h4>
                            <img className='event-infoWindow-img' src={ event.images[5].url} alt='artist/event' />
                            <button 
                                className='event-infoWindow-close-btn' 
                                onClick={ () => {
                                    closeInfoWindow();
                                    hoverOut();
                                } }>X</button>
                        </div>
                    )
                }) }

                */