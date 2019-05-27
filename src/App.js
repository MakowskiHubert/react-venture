import React from 'react';
import styled from 'styled-components';
import { background } from 'constants/mixins';
import image from 'assets/reg_photo.jpg';
import { MapPage } from './components/Pages/MapPage';

const Container = styled.div`
	::before {
		${background(image, 'brightness(50%)')}
	}
  text-align: center;
  min-height: 100vh;
`;

export const App = () => (
	<div><MapPage/></div>
);


