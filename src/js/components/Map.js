import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import Place from './Place';

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 52.591225,
			lng: -0.718484
		},
		zoom: 8
	};

	render() {
		const { displayList } = this.props;
		return (
			// Important! Always set the container height explicitly
			<div id='map' 
				style={ {
					height: '100%',
					width: '100%'
				}}>
				<GoogleMapReact
					bootstrapURLKeys={{
							key: 'AIzaSyA5ivLlpxg-AwsOTPELxcuO1zQ64Vo6yRo'
					}}
					defaultCenter={ this.props.center }
					defaultZoom={ this.props.zoom }
				>
				
				{ displayList &&  displayList.map( (event) => {
					if (event._embedded.venues[0].location) {

						const latitude = Number(event._embedded.venues[0].location.latitude);
						const longitude = Number(event._embedded.venues[0].location.longitude);
						const text = event._embedded.venues[0].city.name;
						console.log(latitude, longitude);

						return (
							<Place key={ event.id } lat={ latitude } lng={ longitude } text={ text } />
						)
					}
					// <Place lat={52.486243} lng={-1.890401} text={'Here'} /* Birmingham */ />
					else {
						return null;
					}
				}) }

				</GoogleMapReact>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
		displayList: state.displayList
    }
}

export default connect(mapStateToProps)(Map);

// adding markers: https://github.com/google-map-react/google-map-react-examples/blob/master/web/flux/components/examples/x_simple/simple_map_page.jsx