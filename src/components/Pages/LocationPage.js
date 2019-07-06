import React, { Component } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-google-autocomplete';
import Ink from 'react-ink';

import { Img } from 'components/Img';
import locationIcon from 'assets/svg/my-location.svg';
import MapContainer from 'components/Map/Map';

const SearchField = styled.div`
	position: absolute;
	width: 100%;
	z-index: 1;
	bottom: ${({ theme }) => theme.size[200]};
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
  
  :focus {
	  outline: none;
	  border: 2px solid dodgerblue;
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
		latitude: 52.2297,
		longitude: 21.0122
	};

	handleUpdatePlace = place => {
		const { location } = place.geometry;
		this.setState({ latitude: location.lat(), longitude: location.lng() });
	};

	render() {
		const { latitude, longitude } = this.state;

		return (
				<div>
					<SearchField>
						<StyledAutocomplete
								types={['address']}
								onPlaceSelected={this.handleUpdatePlace}
								componentRestrictions={{ country: 'pl' }}
								placeholder='Podaj adres'
						/>
						<WrapperIcon>
							<Img src={locationIcon} alt='Location icon'/>
						</WrapperIcon>
						<AcceptButton>
							<Ink/>OK
						</AcceptButton>
					</SearchField>

					<MapContainer lat={latitude} lng={longitude}/>
				</div>
		);
	}
}