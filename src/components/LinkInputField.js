import React, { Component } from 'react';

import Button from './Button';

class LinkInputField extends Component {
  render() {

    const printClicked = () => {
        console.log('button clicked');
    }

    return (
      <div className='container'>
        <div className='input-container px-3 pt-5 pb-4'>
            <form className='d-lg-flex justify-content-evenly' rol=''>
                <div className='mb-4 mb-md-0'>
                  {/* Adjust the input field to fill full with on desktop view */}
                  <input className="form-control me-2 py-3 custom-border" type="search" placeholder="Shorten a link here..." aria-label="Search" />
                  <div className='error-text'>please add a link</div>
                </div>  
                <div className='text-center py-sm-3 py-lg-0'>
                    <Button 
                    buttonText = 'Shorten It!' 
                    backgroundColor='hsl(180, 66%, 49%)' 
                    borderRadius='10px'  
                    onClick={printClicked} 
                    padding='15px 20px'
                    />
                </div>
            </form>
        </div>
      </div>
    );
  };
};

export default LinkInputField
