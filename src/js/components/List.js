import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { highligthMarker_In } from './../actions/highligthMarker_In';
import { highligthMarker_Out } from './../actions/highligthMarker_Out';
import { openInfoWindow } from './../actions/infoWindow';
import { closeAside } from './../actions/closeAside';

class List extends Component {

    render() {

        const { list, highligthMarker_In, highligthMarker_Out, openInfoWindow, infoWindow, closeAside } = this.props;
    
        if (list === 'no match') {
            return (
                <li className='event'>No match found</li>
            )
        }
    
        else if (list) {
            return list.map( (event) => {
    
                const date = event.dates.start.displayDate;
                const time = event.dates.start.localTime ? (event.dates.start.localTime).slice(0, 5) : null;
                const location = event._embedded.venues[0].city.name;
                const venueId = event._embedded.venues[0].id;
                const place = {
                    lat: Number(event._embedded.venues[0].location.latitude),
                    lng: Number(event._embedded.venues[0].location.longitude)
                }
                
                return (
                    <li 
                        tabIndex="0"
                        key={ event.id }
                        className='event'
                        onMouseEnter={ () => { 
                            if (infoWindow.value === false) {
                                highligthMarker_In(venueId)
                            }
                        } }
                        onMouseLeave={ () => { 
                            if (infoWindow.value === false) {
                                highligthMarker_Out()
                            }
                        } }
                        onKeyPress={ () => {
                            highligthMarker_In(venueId);
                            openInfoWindow(place, [event]);
                            closeAside();
                        }}
                        onClick={ () => {
                            highligthMarker_In(venueId);
                            openInfoWindow(place, [event]);
                            closeAside();
                        } }
                    >
                        <h3 className='event-name'>{ event.name }</h3>
                        <p><span>Date: </span>{ date } { time } </p>
                        <p><span>Location: </span>{ location }</p>
                    </li>
                )
            })
        }
    
        else {
            return null;
        }
    }

}

function mapStateToProps(state) {
    return {
        infoWindow: state.infoWindow
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        highligthMarker_In,
        highligthMarker_Out,
        openInfoWindow,
        closeAside
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);