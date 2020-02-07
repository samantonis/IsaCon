import React, { Component } from 'react';
import logo from './logo.svg';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         under construction
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
