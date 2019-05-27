import React, { Component } from 'react';
import MapContainer from 'components/Map/Map';
import { Toolbar } from 'components/Toolbar';
import { Icon } from 'components/Icon';
import hot from 'assets/svg/hot.svg';
import map from 'assets/svg/map.svg';
import list from 'assets/svg/list.svg';
import profile from 'assets/svg/profile.svg';

export class MapPage extends Component {
  state = {
  	active: 1
  }

  setActive = icon => {
  	this.setState({ active: icon });
  }

  render() {
  	const { active } = this.state;

  	return (
  		<div>
  			<MapContainer />
  			<Toolbar bottom>
  				<Icon active={active === 0} onClick={() => this.setActive(0)} src={hot} alt='hot' text={'hot'} />
  				<Icon active={active === 1} onClick={() => this.setActive(1)} src={map} alt='map' text={'mapa'} />
  				<Icon active={active === 2} onClick={() => this.setActive(2)} src={list} alt='list' text={'listy'} />
  				<Icon active={active === 3} onClick={() => this.setActive(3)} src={profile} alt='profile' text={'profil'} />
  			</Toolbar>
  		</div>
  	);
  }
}