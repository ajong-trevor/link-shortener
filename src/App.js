import React, { Component } from 'react';

import NavigationBar from './components/NavigationBar.js';
import Hero from './components/Hero.js';
import LinkShoterningSection from './components/LinkShoterningSection.js';
import CallToAction from './components/CallToAction.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Hero />
        <LinkShoterningSection />
        <CallToAction />
      </div>
    )
  }
}

export default App;

