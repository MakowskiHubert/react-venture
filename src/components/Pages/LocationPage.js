import React, { Component } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-google-autocomplete';
import Ink from 'react-ink';

import { Img } from 'components/Img';
import MapComponent from 'components/Map/MapComponent';
import locationIcon from 'assets/svg/my-location.svg';
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';

const Wrapper = styled.div`
  width: 100vw;
	height: 100vh;
`;

const SearchField = styled.div`
	position: absolute;
	width: 100%;
	z-index: 1;
	bottom: 30vmax;
`;

const StyledAutocomplete = styled(Autocomplete)`
	display: flex;
	margin: auto;
	width: 90%;
  height: ${({ theme }) => theme.size[85]};
  border-radius: ${({ theme }) => theme.size[20]};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding-left: ${({ theme }) => theme.size[30]};
  padding-right: ${({ theme }) => theme.size[150]};
  background-color: #fff;
  font-weight: 800;
  border: none;

  :focus {
	  outline: none;
	  border: 1px solid dodgerblue;
  }
  
  ::placeholder {
	  font-size: 1.2rem;
	  margin-left: ${({ theme }) => theme.size[30]};
	  color: ${({ theme }) => theme.colors.light_gray_3};
  }
`;

const AcceptButton = styled.div`
	position: absolute;
	top: 0;
	right: ${({ theme }) => theme.size[30]};
	width: 6.85vmax;
	height: 100%;
	background-image: linear-gradient(to bottom, #5983cb, #00c4ff);
	border-top-right-radius: ${({ theme }) => theme.size[20]};
	border-bottom-right-radius: ${({ theme }) => theme.size[20]};
	line-height: ${({ theme }) => theme.size[85]};
	font-size: 1.6rem;
	color: #fff;
	text-align: center;
	
	:hover {
		text-decoration: none;
		color: #fff;
	}
`;

const WrapperIcon = styled.div`
	display: flex;
  align-items: center;
	position: absolute;
	top: 0;
	right: ${({ theme }) => theme.size[80]};
	width: 6.85vmax;
	height: 100%;
`;

export class LocationPage extends Component {
	state = {
		position: {
			lat: 52.2297,
			lng: 21.0122
		},
		error: null
	};

	handleUpdatePlace = place => {
		const { location } = place.geometry;

		this.setState({
			position: {
				lat: location.lat(),
				lng: location.lng()
			}
		});
	};

	handleSelectPlace = place => {
		this.handleUpdatePlace(place);
	};

	handleMarkerMove = place => {
		this.inputAutocomplete.refs.input.value = '';
		this.inputAutocomplete.refs.input.placeholder = 'Lokalizacja markera';
		this.handleUpdatePlace(place);
	};

	handleCenterFromGps = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				this.inputAutocomplete.refs.input.value = '';
				this.inputAutocomplete.refs.input.placeholder = 'Lokalizacja GPS';
				this.setState({
					position: {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					}
				});
			}, error => {
				alert('Error occurred. ' + error.message);
			});
		} else {
			alert('no geolocation support');
		}
	};

	render() {
		const { position } = this.state;

		return (
			<Wrapper>
				<SearchField>
					<StyledAutocomplete
						types={['address']}
						onPlaceSelected={this.handleSelectPlace}
						componentRestrictions={{ country: 'pl' }}
						ref={input => this.inputAutocomplete = input}
						placeholder='Podaj adres'
					/>
					<WrapperIcon onClick={this.handleCenterFromGps}>
						<Img width={35} height={35} src={locationIcon} alt='Location icon'/>
					</WrapperIcon>
					<AcceptButton as={Link} to={{
						pathname: routes.LISTS_NEAR,
						state: { position: position }
					}}>
						<Ink/>OK
					</AcceptButton>
				</SearchField>

				<MapComponent
					isMarkerShown
					position={position}
					onPostionChange={this.handleMarkerMove}
				/>
			</Wrapper>
		);
	}
}