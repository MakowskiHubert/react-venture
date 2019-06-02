import React from 'react';
import { Input as InputBootstrap } from '@bootstrap-styled/v4';

import MapContainer from 'components/Map/Map';
import { Toolbar } from 'components/Toolbar';
import { Icon } from 'components/Icon';
import hot from 'assets/svg/hot.svg';
import map from 'assets/svg/map.svg';
import list from 'assets/svg/list.svg';
import profile from 'assets/svg/profile.svg';
import search from 'assets/svg/search.svg';
import microphone from 'assets/svg/microphone.svg';
import filters from 'assets/svg/filters.svg';
import { Wrapper } from 'components/Wrapper';
import styled from 'styled-components';

const Search = styled.div`
	display: flex;
	
	> img {
		margin-left: ${({ theme }) => theme.size[20]};
	}
`;

const Input = styled(InputBootstrap)`
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

export const MapPage = () => (
	<div>
		<Wrapper alignItems='normal' flexDirection='row'>
			<Toolbar top position='absolute'>
				<Search>
					<img src={search} alt='search icon' />
					<Input type="search" name="search" id="exampleSearch" placeholder="Czego szukasz?" />
				</Search>
				<Menu>
					<Icon pr={20} src={microphone} alt='microphone icon' />
					<Icon pl={20} src={filters} alt='filter icon' />
				</Menu>
			</Toolbar>
		</Wrapper>

		<MapContainer />

		<Toolbar bottom>
			<Icon src={hot} alt='hot places icon' text={'hot'} />
			<Icon src={map} alt='map icon' text={'mapa'} />
			<Icon src={list} alt='list of places icon' text={'listy'} />
			<Icon src={profile} alt='profile icon' text={'profil'} />
		</Toolbar>
	</div>
);
