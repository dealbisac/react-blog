import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages Import
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Pages/Portfolio';
import Footer from './components/Common/Footer';
import Contact from './components/Pages/Contact';
import Team from './components/Pages/Team';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper />
        <Route
          path="/services"
          component={Services}
        />

        <Route
          path="/portfolio"
          component={Portfolio}
        />

        <Route
          path="/about"
          component={About}
        />

        <Route
          path="/team"
          component={Team}
        />

        <Route
          path="/contact"
          component={Contact}
        />

        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Footer />
      </Router >

    )
  }
}

export default App;
