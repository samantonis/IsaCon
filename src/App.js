import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Header, Routing } from './components';
import aws_exports from './aws-exports';
import { theme } from './config/theme';
import { Container } from './atoms/styled';
import store from './store/createStore';
import { Normalize } from 'styled-normalize';

Amplify.configure(aws_exports);

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
	sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${({ theme }) => theme.colors.secondary};
}
code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}`;

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Normalize />
            <GlobalStyle />
            <Header />
            <Container>
              <Routing />
            </Container>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default App;
