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

		const { mapSize /*, closeCloseUp */} = this.props;
		const { mapElement } = this;

		// mapElement.addEventListener('click', closeCloseUp);

		
		const width = mapElement.clientWidth;
		const height = mapElement.clientHeight;
		mapSize(width, height);
	}

	/*componentWillUnmount() {
		const { closeCloseUp } = this.props;
		const { mapElement } = this;

		mapElement.removeEventListener('click', closeCloseUp);
	}*/
	

	render() {

		const { fetchReady, venues, mapNW, mapSE, mapwidth, mapheight, closeUp, closeUpLat, closeUpLng } = this.props;

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

		const center = closeUp ? {
			lat: closeUpLat,
			lng: closeUpLng
		} : mapBounds.center;

		const zoom = closeUp ? 13 : mapBounds.zoom;

		return (
			// Important! Always set the container height explicitly
			<div 
				id='map' 
				ref={ (mapElement) => this.mapElement = mapElement}
				style={ {
					height: '85vh'
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

							return (
								<Place 
									key={ venue.venueName }
									lat={ venue.lat }
									lng={ venue.lng }
									text={ venue.venueName }
									venueId={ venue.venueId }
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
		displayList: state.displayList,
		fetchReady: state.fetchReady,
		venues: state.venues,
		mapwidth: state.mapSize.width,
		mapheight: state.mapSize.height,
		mapNW: state.bounds.nw,
		mapSE: state.bounds.se,
		closeUp: state.closeUp.value,
		closeUpLat: state.closeUp.lat,
		closeUpLng: state.closeUp.lng,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		mapSize,
		closeCloseUp
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);