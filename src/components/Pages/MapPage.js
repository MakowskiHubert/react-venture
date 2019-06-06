import React, { Component } from 'react';

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
import { routes } from 'constants/routes';

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

// let divExample = React.createRef();
// onKeyPress = (event) => {
// 	if (event.which === 13 /* Enter */) {
// 		divExample.current.onClick();
// 	}
// };

export class MapPage extends Component {
	render() {
		return (
			<div>
				<Wrapper alignItems='normal' flexDirection='row'>
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

				<MapContainer/>

				<Toolbar bottom>
					<Icon to={routes.WELCOME_EXPLORE} src={hot} alt='hot places icon' text={'hot'}/>
					<Icon src={map} alt='map icon' text={'mapa'}/>
					<Icon src={list} alt='list of places icon' text={'listy'}/>
					<Icon src={profile} alt='profile icon' text={'profil'}/>
				</Toolbar>
			</div>
		);
	}
}