import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 52.591225,
			lng: -0.718484
		},
		zoom: 8
	};

	render() {
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
					<AnyReactComponent
						lat={ 46.883448 }
						lng={ 17.437112 }
						text={ 'Home' }
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default Map;

// adding markers: https://github.com/google-map-react/google-map-react-examples/blob/master/web/flux/components/examples/x_simple/simple_map_page.jsx