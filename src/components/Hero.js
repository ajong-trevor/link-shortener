import React, { Component } from 'react';

import illustrationWorking from '../images/illustration-working.svg';
import Button from './Button';

class Hero extends Component {
  render() {

    const printClicked = () => {
      console.log('button clicked');
    }

    return (
      <header className='container pt-5 mt-5'>
        <div className='d-lg-flex d-sm-block d-md-block justify-content-between mt-lg-5 pt-lg-5'>
          <div className='w-100'>
              <h1 className='hero-title'>
                  More than just shorter links
              </h1>
              <h3 className='hero-text'>
                  Build your brand's recorgnition and get detailed insights on how your links are perfoming.
              </h3>
              <div className='d-flex flex-start mt-5'>
                <Button 
                  buttonText = 'Get Started' 
                  backgroundColor='hsl(180, 66%, 49%)' 
                  borderRadius='50px'  
                  onClick={printClicked} 
                  padding='15px 40px'
                />
              </div>
          </div>
          <div className='w-100'>
              <img className='w-100' src={illustrationWorking} alt="Working" />
          </div>
        </div>
      </header>
    )
  }
}

export default Hero;
