import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker } from 'google-maps-react';

import { mapStyles } from './MapStyles';

import pinMarker from 'assets/svg/pin-locate.svg';

const icon = { url: pinMarker, scaledSize: { width: 80, height: 80 } };

export default class MapComponent extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};

	onMapClicked = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	onMarkerDragEnd = (e, props) => {
		const { onPostionChange } = this.props;

		const place = {
			geometry: {
				location: props.position
			}
		};

		onPostionChange(place);
	};

	render() {
		const { position, google, width, height, centerFromGps } = this.props;

		return (
				<Map
						onClick={this.onMapClicked}
						google={google}
						zoom={12}
						style={{
							width,
							height
						}}
						styles={mapStyles}
						initialCenter={position}
						center={position}
						disableDefaultUI={true}
						centerAroundCurrentLocation={centerFromGps}
				>
					<Marker
							icon={icon}
							draggable
							onDragend={this.onMarkerDragEnd}
							position={position}
							onClick={this.onMarkerClick}
							animation={google.maps.Animation.DROP}
					/>
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