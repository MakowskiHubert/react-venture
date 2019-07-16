import React from 'react';
import styled from 'styled-components';

import { ListView } from 'components/ListView';
import { CategoryItem } from 'components/Items/CategoryItem';

import img_francja from 'assets/popular/francja.jpg';
import img_hiszpania from 'assets/popular/hiszpania.jpg';
import img_stany_zjednoczone from 'assets/popular/stany_zjednoczone.jpg';
import img_chiny from 'assets/popular/chiny.jpg';
import img_rzym from 'assets/popular/rzym.jpg';

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
	font-size: 1.2rem;
  letter-spacing: 0.66rem;
  font-weight: bold;
  font-family: 'Fira Sans Condensed', sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.colors.light_gray_2};
`;

export const Category = () => (
	<div>
		<Header>POPULARNE</Header>
		<ListView list={listPopular} Component={CategoryItem}/>
	</div>
);
