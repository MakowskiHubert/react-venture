import React from 'react';
import { Title, SubTitle } from './ExplorePage';
import list from 'assets/svg/welcome/list.svg';
import { Wrapper } from 'components/Wrapper';
import { Button } from 'components/Button';
import styled from 'styled-components';

const Image = styled.img`
	margin-top: ${({ theme }) => theme.size[200]};
`;

export const ListPage = () => (
	<Wrapper>
		<Image src={list} alt='graphic illustrating the list'/>
		<Title>Listy</Title>
		<SubTitle>
			<p>Zapisuj ulubione miejsca i nie pozwól, </p>
			<p>aby umknęła Ci przygoda</p>
		</SubTitle>
		<Button primary>Zarejestruj się</Button>
	</Wrapper>
);