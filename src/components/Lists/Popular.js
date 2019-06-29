import React, { Component } from 'react';
import styled from 'styled-components';

import { ListView } from 'components/ListView';
import { ItemCategory } from 'components/Items/ItemCategory';

import img_francja from 'assets/popular/francja.jpg';
import img_hiszpania from 'assets/popular/hiszpania.jpg';
import img_stany_zjednoczone from 'assets/popular/stany_zjednoczone.jpg';
import img_chiny from 'assets/popular/chiny.jpg';
import img_rzym from 'assets/popular/rzym.jpg';
import { ItemPopular } from 'components/Items/ItemPopular';
import { Wrapper } from 'components/Wrapper';

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

const Header = styled['h1']`
	font-size: ${({ theme }) => theme.size[24]};
  letter-spacing: 0.66rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.light_gray_2};
`;

export default class Popular extends Component {
	render() {
		return (
			<div>
				<Header>POPULARNE</Header>
				<ListView list={listPopular} Component={ItemCategory} />

				<Wrapper mh={18}>
					<ListView list={listPopular} Component={ItemPopular} columnCount={3} />
				</Wrapper>
			</div>
		);
	}
}
