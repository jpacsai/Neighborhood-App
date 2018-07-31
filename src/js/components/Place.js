import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    return (
        <div 
            className='placeStyle'
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
        >
            {this.props.text}
            { (this.props.showInfo && (this.props.venueId === this.props.eventInfo._embedded.venues[0].id)) &&
            <div className='event-infoWindow'>
                <h3>{this.props.eventInfo.name}</h3>
                <h4>{this.props.eventInfo._embedded.venues[0].name}</h4>
                <img className='event-infoWindow-img' src={this.props.eventInfo.images[5].url} />
            </div> }
            { /* this.state.isMouseInside ? <button>Your Button</button> : null */}
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    showInfo: state.closeUp.value,
    eventInfo: state.closeUp.event
    }
}

export default connect(mapStateToProps)(Place);