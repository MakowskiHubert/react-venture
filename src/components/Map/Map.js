import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import { mapStyles } from './MapStyles';

const rootStyles = {
	width: '100%',
	height: 'calc(100% - 8.75vmax)'
};

export class MapContainer extends Component {
	render() {
		const { google } = this.props;
		return (
			<Map
				google={google}
				zoom={14}
				style={rootStyles}
				styles={mapStyles}
				initialCenter={{
					lat: -1.2884,
					lng: 36.8233
				}}
				disableDefaultUI={true}
				// panControl={true}
				// zoomControl={true}
				// mapTypeControl={true}
				// scaleControl={true}
				// streetViewControl={false}
				// overviewMapControl={true}
				// rotateControl={true}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_CLOUD_API_KEY
})(MapContainer);
