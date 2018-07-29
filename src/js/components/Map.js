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
		const { displayList, fetchReady } = this.props;

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
				
				{ (fetchReady && displayList ) && displayList.map( (event) => {

						const latitude = Number(event._embedded.venues[0].location.latitude);
						const longitude = Number(event._embedded.venues[0].location.longitude);
						const text = event._embedded.venues[0].city.name;

						return (
							<Place key={ event.id } lat={ latitude } lng={ longitude } text={ text } />
						)
				}) }

				</GoogleMapReact>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
		displayList: state.displayList,
		fetchReady: state.fetchReady,
    }
}

export default connect(mapStateToProps)(Map);