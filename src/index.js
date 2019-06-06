import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import enMessages from 'translations/en.json';
import plMessages from 'translations/pl.json';
import * as serviceWorker from './serviceWorker';
import { Context, Firebase } from 'components/Firebase';
import { theme } from 'constants/theme';
import { store } from 'ducks/config';
import App from './App';
import 'index.css';

addLocaleData([...en, ...pl]);

const messages = {
	'en': enMessages,
	'pl': plMessages
};
const language = navigator.language.split(/[-_]/)[0];

function isMobileDevice() {
	return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

const StyledStatement = styled.p`
	height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vmin;
  color: #2280ff;
  font-weight: bold;
`;

const Statement = <StyledStatement>The application is available on mobile devices :)</StyledStatement>;

const Application = (
	<IntlProvider locale={language} messages={messages[language]}>
		<Context.Provider value={new Firebase()}>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</Context.Provider>
	</IntlProvider>
);

ReactDOM.render(
	isMobileDevice() ? Application : Statement,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
