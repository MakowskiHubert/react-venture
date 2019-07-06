import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { mapStyles } from './MapStyles';

export class MapContainer extends Component {
	render() {
		const { google, width, height, lat, lng } = this.props;
		return (
			<Map
				google={google}
				zoom={8}
				style={{
					width,
					height
				}}
				styles={mapStyles}
				initialCenter={{ lat, lng }}
				disableDefaultUI={true}
				// panControl={true}
				// zoomControl={true}
				// mapTypeControl={true}
				// scaleControl={true}
				// streetViewControl={false}
				// overviewMapControl={true}
				// rotateControl={true}
			>
				<Marker position={{ lat, lng }} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_CLOUD_API_KEY
})(MapContainer);

MapContainer.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string
};

MapContainer.defaultProps = {
	width: '100%',
	height: '100%'
};