import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Map, Marker } from 'google-maps-react';
import { mapStyles } from './MapStyles';

export class MapComponent extends Component {
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

MapComponent.propTypes = {
	google: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string
};

MapComponent.defaultProps = {
	google: window.google,
	width: '100%',
	height: '100%'
};