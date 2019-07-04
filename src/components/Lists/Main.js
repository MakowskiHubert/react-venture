import React, { Component } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { ListView } from 'components/ListView';
import { GridItem } from 'components/Items/GridItem';
import { Wrapper } from 'components/Wrapper';
import { Toolbar } from 'components/Toolbar';
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { Select } from 'components/Select';
import { routes } from 'constants/routes';

import img_francja from 'assets/popular/francja.jpg';
import img_hiszpania from 'assets/popular/hiszpania.jpg';
import img_stany_zjednoczone from 'assets/popular/stany_zjednoczone.jpg';
import img_chiny from 'assets/popular/chiny.jpg';
import img_rzym from 'assets/popular/rzym.jpg';
import hotIcon from 'assets/svg/hot.svg';
import nearIcon from 'assets/svg/near.svg';
import mapIcon from 'assets/svg/map.svg';
import listIcon from 'assets/svg/list.svg';
import profileIcon from 'assets/svg/profile.svg';
import listGrid from 'assets/svg/list-grid.svg';
import listGroup from 'assets/svg/list-group-TEMP.png';

export const mode = {
	list: 'list',
	grid: 'grid'
};

const listPopular = [
	{
		'name': 'Francja',
		'image': img_francja
	},
	{
		'name': 'Hiszpania',
		'image': img_hiszpania
	},
	{
		'name': 'Stany Zjednoczone',
		'image': img_stany_zjednoczone
	},
	{
		'name': 'Chiny',
		'image': img_chiny
	},
	{
		'name': 'Włochy',
		'image': img_rzym
	}
];

const StyledAppBar = withStyles({
	root: {
		backgroundColor: 'transparent',
		boxShadow: '0px 2px 0px 0px rgba(0,0,0,0.15)'
	}
})(props => <AppBar {...props} />);

const StyledTabs = withStyles({
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		height: '3px',
		'& > div': {
			width: '70%',
			backgroundColor: '#1caeee'
		}
	}
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div/> }}/>);

const StyledTab = withStyles({
	root: {
		textTransform: 'inherit',
		fontWeight: 'bold',
		fontSize: '1.1rem',
		color: '#3c3c3c'
	}
})(props => <Tab {...props} />);

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: ${({ theme }) => theme.size[35]};;
`;

export default class Main extends Component {
	state = {
		indexActiveTab: 0,
		isLoading: false,
		viewMode: mode.list
	};

	handleTabChange = (event, newValue) => {
		this.setState({ indexActiveTab: newValue });
	};

	handleTabIndexChange = index => {
		this.setState({ indexActiveTab: index });
	};

	handleViewMode = () => {
		const { viewMode } = this.state;

		viewMode === mode.list ?
				this.setState({ viewMode: mode.grid }) :
				this.setState({ viewMode: mode.list });
	};

	handleCountryChange = () => {
		this.setState({ isLoading: true });
		// TODO: update from firebase
	};

	render() {
		const { indexActiveTab, isLoading, viewMode } = this.state;

		return (
				<div>
					<Header>
						<Select isLoading={isLoading} onChange={this.handleCountryChange} />

						{viewMode === mode.grid ?
								<Icon unlight onClick={this.handleViewMode} src={listGroup} alt="List of group" width={33} height={33}/> :
								<Icon unlight onClick={this.handleViewMode} src={listGrid} alt="List of grid" width={33} height={33}/>
						}
					</Header>

					<StyledAppBar position="static" color="default">
						<StyledTabs
								value={indexActiveTab}
								onChange={this.handleTabChange}
								variant="fullWidth"
						>
							<StyledTab label="Najpopularniejsze"/>
							<StyledTab label="Najlepiej oceniane"/>
						</StyledTabs>
					</StyledAppBar>

					{isLoading ? <Spinner/> : (
							<SwipeableViews
									axis="x"
									index={indexActiveTab}
									onChangeIndex={this.handleTabIndexChange}
							>
								<Wrapper mh={18}>
									<ListView list={listPopular} Component={viewMode === mode.grid ? GridItem : GridItem} columnCount={3}/>
								</Wrapper>

								<Wrapper mh={40}>
									<ListView list={listPopular} Component={viewMode === mode.grid ? GridItem : GridItem} columnCount={3}/>
								</Wrapper>
							</SwipeableViews>
					)}

					<Toolbar bottom activeItem={3} reversefilter={1}>
						<Icon src={hotIcon} to={routes.WELCOME_EXPLORE} alt='top places icon' text='top'/>
						<Icon src={nearIcon} alt='near places icon' text='blisko'/>
						<Icon accent src={mapIcon} alt='map icon' text='mapa'/>
						<Icon src={listIcon} alt='list of places icon' text='listy'/>
						<Icon src={profileIcon} alt='profile icon' text='profil'/>
					</Toolbar>
				</div>
		);
	}
}
