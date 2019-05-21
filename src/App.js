import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => (
	<Container>
		<Header>
			<p>
        Edit <code>src/App.js</code> and save to reload.
			</p>
		</Header>
	</Container>
);

export default App;
