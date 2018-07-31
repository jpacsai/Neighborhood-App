import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Place from './Place';
import mapSize from './../actions/mapSize';
import { fitBounds } from 'google-map-react/utils';
import { closeCloseUp } from './../actions/closeCloseUp';

class Map extends Component {
	
	componentDidMount() {

		const { mapSize, closeCloseUp } = this.props;
		const { mapElement } = this;

		mapElement.addEventListener('click', closeCloseUp);

		
		const width = mapElement.clientWidth;
		const height = mapElement.clientHeight;
		mapSize(width, height);
	}

	componentWillUnmount() {
		const { closeCloseUp } = this.props;
		const { mapElement } = this;

		mapElement.removeEventListener('click', closeCloseUp);
	}

	handleGlobalClick() {
		console.log('map click');
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

				{ fetchReady && 

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
				}
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
		mapSE: state.bounds.se,
		showInfo: state.closeUp
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		mapSize,
		closeCloseUp
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);