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
		const { displayList, fetchReady, venues } = this.props;

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
				
				{ (fetchReady && venues ) && venues.map( (venue) => {

						const latitude = venue.lat;
						const longitude = venue.lng;
						const text = venue.name;

						return (
							<Place key={ venue.id } lat={ latitude } lng={ longitude } text={ text } />
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
		venues: state.venues
    }
}

export default connect(mapStateToProps)(Map);