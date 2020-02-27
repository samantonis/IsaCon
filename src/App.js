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
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

Amplify.configure(aws_exports);

const apolloClient = new ApolloClient({
  uri: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  request: operation => {
    operation.setContext({
      headers: {
        "X-Api-Key": aws_exports.aws_appsync_apiKey
      }
    });
  },
  cache: new InMemoryCache()
});

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
	color : ${({ theme }) => theme.colors.primary};
}
code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}`;

class App extends Component {
  render() {
    return (
      <>
        <ApolloProvider client={apolloClient}>
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
        </ApolloProvider>
      </>
    );
  }
}

export default App;
