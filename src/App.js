import React, { Component } from 'react';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
