import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { ThemeProvider } from 'styled-components';
import { Header, Routing } from './components';
import aws_exports from './aws-exports';
import { theme } from './config/theme';
import { Container } from './atoms/styled';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header />
          <Container>
            <Routing />
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
