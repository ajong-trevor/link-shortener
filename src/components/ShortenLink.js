import React from 'react';
import Button from './Button.js';

function ShortenLink({ primaryLink, secondLink, buttonColor, buttonText }) {

    const printClicked = () => {
        console.log('button clicked');
    }

  return (
    <div className='bg-white my-5 py-4 px-md-4 d-md-flex justify-content-between align-items-center generated-link'>
      {/* Adjust the overFlow of the text */}
      <div className='px-4 px-md-0 overflow-hidden' style={{color: 'hsl(257, 27%, 26%)'}}>
        {primaryLink}
      </div>
      <hr className='d-md-0'/>
      <div className='d-lg-flex px-4 px-md-0 justify-content-between align-items-center'>
        <div style={{color: 'hsl(180, 66%, 49%)'}} className='me-0 me-md-4'>
            {secondLink}
        </div>
        <div className='text-center mt-3 mt-md-0'>
            <Button 
            buttonText={buttonText} 
            backgroundColor={buttonColor}
            borderRadius='5px'  
            onClick={printClicked} 
            padding='8px 25px'
            />
        </div>
      </div>
    </div>
  )
}

export default ShortenLink;
