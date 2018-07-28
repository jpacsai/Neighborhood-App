import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Place from './../components/Place';

class PlaceContainer extends Component {
    render() {
        const { displayList } = this.props;
        if (displayList) {
            return displayList.map( (event) => {
                if (event._embedded.venues[0].location) {

                    const latitude = Number(event._embedded.venues[0].location.latitude);
                    const longitude = Number(event._embedded.venues[0].location.longitude);
                    const text = event._embedded.venues[0].city.name;

                    console.log(latitude, longitude);

                    //  <Place lat={52.486243} lng={-1.890401} text={'Here'} />
                    return (
                        <Place lat={ latitude } lng={ longitude } text={ text } key={ event.id } />
                    )
                }
                
                else {
                    return null;
                }
            });
        }
        else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
		displayList: state.displayList
    }
}

export default connect(mapStateToProps)(PlaceContainer);