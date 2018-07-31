import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCloseUp } from './../actions/closeCloseUp';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const { closeCloseUp, eventInfo, showInfo, hoverId } = this.props;

    const match = hoverId === this.props.venueId;
    console.log('match?', match)

    const markerStyle = match ? 'map-marker map-marker-list-hovered' : 'map-marker';

    return (
        <div
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
        >
            <div className={ markerStyle }></div>
            { (showInfo && (this.props.venueId === eventInfo._embedded.venues[0].id)) &&
            <div className='event-infoWindow'>
                <h3>{ eventInfo.name}</h3>
                <h4>{ eventInfo._embedded.venues[0].name}</h4>
                <img className='event-infoWindow-img' src={ eventInfo.images[5].url} alt='Photo of the artist/event' />
                <button 
                    className='event-infoWindow-close-btn' 
                    onClick={() => { closeCloseUp() }}>X</button>
            </div> }
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    showInfo: state.closeUp.value,
    eventInfo: state.closeUp.event,
    hoverId: state.hoverEvent
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		closeCloseUp
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);