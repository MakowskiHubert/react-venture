import React, { Component } from 'react';
import styled from 'styled-components';

import MapContainer from 'components/Map/Map';
import { Toolbar } from 'components/Toolbar';
import { Icon } from 'components/Icon';
import { Wrapper } from 'components/Wrapper';

import hotIcon from 'assets/svg/hot.svg';
import nearIcon from 'assets/svg/near.svg';
import mapIcon from 'assets/svg/map.svg';
import listIcon from 'assets/svg/list.svg';
import profileIcon from 'assets/svg/profile.svg';
import search from 'assets/svg/search.svg';
import microphone from 'assets/svg/microphone.svg';
import filters from 'assets/svg/filters.svg';

const Search = styled.div`
	display: flex;
	width: 70%;
	
	:hover {
		> img {
			transition: 0.5s;
			opacity: 0;
			transform: scale(0.1);
			visibility: hidden; 
			margin-left: ${({ theme }) => `-${theme.size[30]}`};
		}
	}
`;

const Image = styled.img`	  
  transition: 0.5s;
  opacity: 1;
  transform: scale(1);
  visibility: visible; 
  width: ${({ theme }) => theme.size[48]};
  height: ${({ theme }) => theme.size[48]};
  margin-left: ${({ theme }) => theme.size[20]};
  margin-right: ${({ theme }) => theme.size[5]};
`;

const Input = styled.input`
	width: 100%;
	font-size: 1.5rem;
	border: none;
	box-shadow: none;
	
	:focus {
		outline: none;
		box-shadow: none;
	}
	
	::placeholder {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.light_gray_2};
	}
`;

const Menu = styled.div`
	> div:last-child {
		margin-right: ${({ theme }) => theme.size[20]};
		border-left: 2px solid #ddd;
	}
`;

// 'calc(100% - 8.75vmax)'
export class MapPage extends Component {
	render() {
		return (
			<div>
				<Wrapper display='flex' justifyContent='center'>
					<Toolbar top position='absolute'>
						<Search>
							<Image onClick={() => this.searchInput.focus()} src={search} alt='search icon'/>
							<Input onBlur={() => console.log('onBlur event')}
										 onFocus={() => console.log('onFocus event') } type='search' ref={ip => this.searchInput = ip} name="search" id="exampleSearch" placeholder="Czego szukasz?" />
						</Search>
						<Menu>
							<Icon pr={20} src={microphone} alt='microphone icon'/>
							<Icon pl={20} src={filters} alt='filter icon'/>
						</Menu>
					</Toolbar>
				</Wrapper>

				<Toolbar bottom activeItem={0} reversefilter={1}>
					<Icon src={hotIcon} alt='top places icon' text='top'/>
					<Icon src={nearIcon} alt='near places icon' text='blisko'/>
					<Icon src={mapIcon} alt='map icon' text='mapa' accent/>
					<Icon src={listIcon} alt='list of places icon' text='listy'/>
					<Icon src={profileIcon} alt='profile icon' text='profil'/>
				</Toolbar>
			</div>
		);
	}
}