import React, { Component } from 'react';
import { closeUp } from './../actions/closeUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hoverInList } from './../actions/hoverInList';
import { hoverOutList } from './../actions/hoverOutList';
import { infoWindow } from './../actions/infoWindow';

class List extends Component {

    render() {

        const { list, closeUp, hoverIn, hoverOut, infoOpen, infoWindow } = this.props;
    
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
                            closeUp(place);
                            hoverIn(venueId);
                            infoWindow(event);
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
        infoOpen: state.closeUp.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeUp,
        hoverIn: hoverInList,
        hoverOut: hoverOutList,
        infoWindow
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);