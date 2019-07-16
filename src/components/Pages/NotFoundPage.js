import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
	background-image: linear-gradient(to bottom, #cde4ff, #ffffff);
	font-family: 'Fira Sans Condensed', sans-serif;
	font-weight: bold;
`;

export const NotFoundPage = () => <Wrapper>(404) Not Found</Wrapper>;