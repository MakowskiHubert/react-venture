import React from 'react';
import styled from 'styled-components';
import { background } from 'constants/mixins';
import image from 'assets/reg_photo.jpg';
import { Comment } from './components/Comment';
import { Tag } from './components/Tag';
import { Wrapper } from './components/Wrapper';

const Container = styled.div`
	::before {
		${background(image, 'brightness(50%)')}
	}
  text-align: center;
  min-height: 100vh;
`;

export const App = () => (
	<Container>
		<Wrapper display="block" pt={2} pb={2} color="#fff">
			<Comment>Tresc komentarza</Comment>
			<Comment>Tresc komentarza</Comment>
			<Comment>Tresc komentarza</Comment>
			<Comment />
		</Wrapper>

		<Tag active={true}>Wiosna</Tag>
	</Container>
);


