import React from 'react';
import { Title, SubTitle } from './ExplorePage';
import profile from 'assets/svg/welcome/profile.svg';
import { Wrapper } from 'components/Wrapper';
import { Button } from 'components/Button';
import styled from 'styled-components';

const Image = styled.img`
	margin-top: ${({ theme }) => theme.size[200]};
`;

export const ProfilePage = () => (
	<Wrapper display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
		<Image src={profile} alt='graphic illustrating the places'/>
		<Title>Profil</Title>
		<SubTitle>Wyraź siebie i daj się poznać!</SubTitle>
		<Button primary>Zarejestruj się</Button>
	</Wrapper>
);