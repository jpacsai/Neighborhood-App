import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCloseUp } from './../actions/closeCloseUp';
import { hoverOutList } from './../actions/hoverOutList';
import { closeUp } from '../actions/closeUp';
import { infoWindow } from './../actions/infoWindow';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { closeCloseUp, eventInfo, showInfo, hoverId, hoverOut, closeUp, venue } = this.props;

    const match = hoverId === this.props.venueId;

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
                } }
            ></div>
            { (showInfo && (this.props.venueId === eventInfo._embedded.venues[0].id)) &&
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
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        showInfo: state.closeUp.value,
        eventInfo: state.infoWindow,
        hoverId: state.hoverEvent
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeCloseUp,
        hoverOut: hoverOutList,
        closeUp
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);