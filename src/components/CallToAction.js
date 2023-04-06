import React, { Component } from 'react';

import Button from './Button';

class CallToAction extends Component {
  render() {

    const printClicked = () => {
        console.log('button clicked');
    }


    return (
      <div>
        <div className='container call-to-action py-5 px-4'>
           <div className='m-auto'>
            <h1 className='text-white text-center mb-5'>
                Boost your links today
            </h1>
            <div className="text-center">
                <Button 
                    buttonText = 'Get Started' 
                    backgroundColor='hsl(180, 66%, 49%)' 
                    borderRadius='50px'  
                    onClick={printClicked} 
                    padding='15px 40px'
                />
            </div>
           </div>
        </div>
      </div>
    )
  }
}

export default CallToAction;
