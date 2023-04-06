import React, { Component } from 'react';

import LinkInputField from './LinkInputField.js';
import ShortenLink from './ShortenLink.js';
import AdvanceSection from './AdvanceSection.js';
import Cards from './Cards.js';

class LinkShoterningSection extends Component {
  render() {
    return (
      <div className='container link-shorten-section pb-5'>
        <LinkInputField />
        <div className='pt-5'>
          <div className='pt-5 pt-md-0'>
            <div className='pt-5 pt-md-0'>
              <ShortenLink primaryLink='https://www.frontendmentor.io' secondLink='https://rel.ink/K4LKyK' buttonColor='hsl(180, 66%, 49%)' buttonText='Copy' />
            </div>
          </div>
        </div>
        <ShortenLink primaryLink='https://twitter.com/frontendmentor' secondLink='https://rel.ink/gxOXp9' buttonColor='hsl(257, 27%, 26%)' buttonText='Copied!' />
        <ShortenLink primaryLink='https://www.linkedin.com/company/frontend-mentor' secondLink='https://rel.ink/gob3X9' buttonColor='hsl(180, 66%, 49%)' buttonText='Copy' />
        <AdvanceSection />
        <Cards />
      </div>
    )
  }
}

export default LinkShoterningSection;
