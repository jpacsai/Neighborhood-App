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
		const { mapElement } = this;
		
		const width = mapElement.clientWidth;
		const height = mapElement.clientHeight;
		mapSize(width, height);
	}

	render() {

		const { fetchReady, venues, mapNW, mapSE, mapwidth, mapheight, infoWindow, showAside } = this.props;

		const mapStyles = [
			{
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#1d2c4d"
				}
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#8ec3b9"
				}
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#1a3646"
				}
			  ]
			},
			{
			  "featureType": "administrative.country",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#4b6878"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#64779e"
				}
			  ]
			},
			{
			  "featureType": "administrative.province",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#4b6878"
				}
			  ]
			},
			{
			  "featureType": "landscape.man_made",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#334e87"
				}
			  ]
			},
			{
			  "featureType": "landscape.natural",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#023e58"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#283d6a"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#6f9ba5"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#1d2c4d"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry.fill",
			  "stylers": [
				{
				  "color": "#023e58"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#3C7680"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#304a7d"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#98a5be"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#1d2c4d"
				}
			  ]
			},
			{
			  "featureType": "road.arterial",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#2c6675"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#255763"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#b0d5ce"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#023e58"
				}
			  ]
			},
			{
			  "featureType": "road.local",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#98a5be"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#1d2c4d"
				}
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "geometry.fill",
			  "stylers": [
				{
				  "color": "#283d6a"
				}
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#3a4762"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#0e1626"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#4e6d70"
				}
			  ]
			}
		  ]

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
		
		const mapBounds = fitBounds(bounds, size)

		const center = infoWindow.value === true ? {
			lat: infoWindow.lat,
			lng: infoWindow.lng
		} : venues.length === 1 ? {
			lat: venues[0].lat,
			lng: venues[0].lng
		} : mapBounds.center;

		const zoom = infoWindow.value === false ? venues.length === 1 ? 13 : mapBounds.zoom : 13;

		const gesture = infoWindow.value ? 'none' : 'auto';
		const $backgroundColor = '#001a26';
		const mapClassName = showAside ? 'map map-aside' : 'map';

		return (
			// Important! Always set the container height explicitly
			<div 
				id='map' 
				className={ mapClassName }
				ref={ (mapElement) => this.mapElement = mapElement}
				style={ {
					height: '85vh'
				} }
			>

				{ fetchReady && 

					<GoogleMapReact
						options={ { gestureHandling:  gesture, styles: mapStyles, backgroundColor: $backgroundColor } } 
						bootstrapURLKeys={{
								key: 'AIzaSyA5ivLlpxg-AwsOTPELxcuO1zQ64Vo6yRo'
						}}
						center={ center }
						zoom={ zoom }
					>
					
					{ (fetchReady && venues ) && venues.map( (venue) => {
						return (
							<Place 
								key={ venue.venueName }
								lat={ venue.lat }
								lng={ venue.lng }
								// address= { }
								venue={ venue }
							/>
						)
					}) }

					</GoogleMapReact>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
		fetchReady: state.fetchReady,
		venues: state.venues,
		mapwidth: state.mapSize.width,
		mapheight: state.mapSize.height,
		mapNW: state.bounds.nw,
		mapSE: state.bounds.se,
		infoWindow: state.infoWindow,
		showAside: state.showAside
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		mapSize
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);