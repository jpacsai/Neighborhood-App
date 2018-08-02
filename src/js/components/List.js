import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hoverInList } from './../actions/hoverInList';
import { hoverOutList } from './../actions/hoverOutList';
import { openInfoWindow } from './../actions/infoWindow';
import { toggleAside } from './../actions/toggleAside';

class List extends Component {

    render() {

        const { list, hoverIn, hoverOut, infoOpen, showAside, toggleAside, openInfoWindow } = this.props;
    
        if (list === 'no match') {
            return (
                <li className='event'>No match found</li>
            )
        }
    
        else if (list) {
            return list.map( (event) => {
    
                const date = event.dates.start.localDate;
                const time = event.dates.start.localTime ? (event.dates.start.localTime).slice(0, 5) : null;
                const location = event._embedded.venues[0].city.name;
                const venueId = event._embedded.venues[0].id;
                const place = {
                    lat: Number(event._embedded.venues[0].location.latitude),
                    lng: Number(event._embedded.venues[0].location.longitude)
                }
                
                return (
                    <li 
                        key={ event.id }
                        className='event'
                        onMouseEnter={ () => { 
                            if (infoOpen === false) {
                                hoverIn(venueId)
                            }
                        } }
                        onMouseLeave={ () => { 
                            if (infoOpen === false) {
                                hoverOut()
                            }
                        } }
                        onClick={ () => {
                            hoverIn(venueId);
                            openInfoWindow(place, [event]);
                            toggleAside(showAside);
                        } }
                    >
                        { event.name }
                        <p>Date: { date } { time } Location: { location }</p>
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
        showAside: state.showAside
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hoverIn: hoverInList,
        hoverOut: hoverOutList,
        openInfoWindow,
        toggleAside
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);