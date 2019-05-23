import React from 'react';
import styled from 'styled-components';
import { background } from 'constants/mixins';
import { Button } from 'components/Button';
import image from 'assets/reg_photo.jpg';
import arrowForward from 'assets/svg/baseline-arrow-forward.svg';
import { Backdrop } from "./components/Backdrop"

const Container = styled.div`
	::before {
		${background(image, 'brightness(50%)')}
	}
  text-align: center;
  min-height: 100vh;
`;

export const App = () => (
	<Container>
		<Backdrop show={false} />

		<Button>Default</Button>
		<Button>Default</Button>

		<Button next disable>
			<img src={arrowForward} alt="arrowForward" />
		</Button>
		<Button next>
			<img src={arrowForward} alt="arrowForward" />
		</Button>

		<Button primary disable>Akceptuj</Button>
		<Button primary>Akceptuj</Button>

		<Button primary login disable>Zaloguj</Button>
		<Button primary login>Zaloguj</Button>

		<Button link disable mb={200}>
			<a href="https://www.google.com/">Zarejestruj się</a>
		</Button>
		<Button link>
			<a href="https://www.google.com/">Zarejestruj się</a>
		</Button>
	</Container>
);


