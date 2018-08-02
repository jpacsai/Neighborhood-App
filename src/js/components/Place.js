import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hoverOutList } from './../actions/hoverOutList';
import { openInfoWindow } from './../actions/infoWindow';
import { hoverInList } from './../actions/hoverInList';
import { closeInfoWindow } from './../actions/closeInfoWindow';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { hoverId, hoverOut, venue, infoWindow, openInfoWindow, closeInfoWindow, hoverIn } = this.props;
    
    const markerStyle = hoverId === this.props.venueId ? 'map-marker map-marker-list-hovered bounce' : 'map-marker';

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
                    hoverIn(this.props.venueId)
                } }
            >{events.length}</div>

            { (infoWindow && ( infoWindow.events && this.props.lat + 0.007 === infoWindow.lat && this.props.lng === infoWindow.lng)) &&
            <div>
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
        hoverOut: hoverOutList,
        closeInfoWindow,
        openInfoWindow,
        hoverIn: hoverInList
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