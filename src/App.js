import React, { Component } from 'react';
import Home from './components/Pages/Home';
import PageWrapper from './components/PageWrapper';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Home />
        <h1>Hello</h1>
      </PageWrapper>
    )
  }
}

export default App;
