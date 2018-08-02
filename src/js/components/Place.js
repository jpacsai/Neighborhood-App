import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { highligthMarker_Out } from './../actions/highligthMarker_Out';
import { openInfoWindow } from './../actions/infoWindow';
import { highligthMarker_In } from './../actions/highligthMarker_In';
import { closeInfoWindow } from './../actions/closeInfoWindow';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { hoverId, venue, infoWindow, openInfoWindow, closeInfoWindow, highligthMarker_In, highligthMarker_Out } = this.props;
    
    const markerStyle = hoverId === venue.venueId ? 'map-marker map-marker-list-hovered bounce' : 'map-marker';

    const place = {
        lat: venue.lat,
        lng: venue.lng
    }

    const events = venue.eventsArray;

    return (
        <div
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
        >
            <div 
                className={ markerStyle }
                onClick={ () => {
                    openInfoWindow(place, events);
                    highligthMarker_In(venue.venueId)
                } }
            >{events.length}</div>

            { (infoWindow && ( infoWindow.events && venue.lat + 0.015 === infoWindow.lat && venue.lng === infoWindow.lng)) &&
            <div className='infoWindow-wrapper'>
                <h4>{ venue.venueName }</h4>
                <p className='infoWindow-address'>{ venue.venueAddress }</p>
                <button 
                    className='infoWindow-close-btn' 
                    onClick={ () => {
                        closeInfoWindow();
                        highligthMarker_Out();
                    } }
                >X</button>
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
                            <h2 className='infoWindow-date'>{ event.dates.start.displayDate}</h2>
                            <h3>{ event.name}</h3>
                            { gen !== null && <p>{ genre }</p> }
                            <img className='infoWindow-img' src={ event.images[2].url} alt='artist/event' />
                            <a>Info</a>
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
        infoWindow: state.infoWindow
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        highligthMarker_Out,
        closeInfoWindow,
        openInfoWindow,
        highligthMarker_In
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