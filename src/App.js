import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages Import
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route
            path="/about"
            component={About}
          />

          <Route
            path="/"
            component={Home}
          />

        </PageWrapper>
      </Router>
    )
  }
}

export default App;
