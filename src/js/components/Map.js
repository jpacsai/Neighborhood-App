import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Place from './Place';
import mapSize from './../actions/mapSize';
import { fitBounds } from 'google-map-react/utils';

class Map extends Component {
	
	componentDidMount() {
		const { mapSize } = this.props;
		const width = this.mapElement.clientWidth;
		const height = this.mapElement.clientHeight;
		mapSize(width, height);
	  }

	render() {

		const { fetchReady, venues, mapNW, mapSE, mapwidth, mapheight } = this.props;

		const size = {
			width: mapwidth, // Map width in pixels
			height: mapheight // Map height in pixels
		};

		let bounds = {
			nw: {
				lat: 0,
				lng: 0
			},
			se: {
				lat: 0,
				lng: 0
			}
		};

		if (fetchReady) {
			bounds = {
				nw: {
					lat: mapNW.lat,
					lng: mapNW.lng
				},
				se: {
					lat: mapSE.lat,
					lng: mapSE.lng
				}
			};	
		}
		
		const { center, zoom } = fitBounds(bounds, size);

		return (
			// Important! Always set the container height explicitly
			<div 
				id='map' 
				ref={ (mapElement) => this.mapElement = mapElement}
				style={ {
					height: '100%',
					width: '100%'
				}}>
				<GoogleMapReact
					bootstrapURLKeys={{
							key: 'AIzaSyA5ivLlpxg-AwsOTPELxcuO1zQ64Vo6yRo'
					}}
					center={ center }
					zoom={ zoom }
				>
				
				{ (fetchReady && venues ) && venues.map( (venue) => {

						const latitude = venue.lat;
						const longitude = venue.lng;
						const text = venue.venueName;

						return (
							<Place key={ venue.venueName } lat={ latitude } lng={ longitude } text={ text } />
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
		venues: state.venues,
		mapwidth: state.mapSize.width,
		mapheight: state.mapSize.height,
		mapNW: state.bounds.nw,
		mapSE: state.bounds.se
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		mapSize
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);