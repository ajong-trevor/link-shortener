import React from 'react';

import image1 from '../images/icon-brand-recognition.svg';
import image2 from '../images/icon-detailed-records.svg';
import image3 from '../images/icon-fully-customizable.svg';

function Cards() {
  return (
    <div className='mt-5 py-5 mx-4 mx-md-0'>
      <div className='row g-5 justify-content-evenly'>

        <div className='col-sm-12 col-md-6 col-lg-3 bg-white rounded'>
          <div className='custom-card-icon'>
            <img style={{backgroundColor: 'hsl(257, 27%, 26%)'}} className='p-4 rounded-circle' src={image1} alt="" />
          </div>
          <div>
            <h4 style={{color: 'hsl(257, 27%, 26%)'}} className='mx-3 pt-4'>Brand Recognition</h4>
            <p style={{color: 'hsl(257, 7%, 63%)'}} className='py-3 p-md-3 text-center text-md-start'>
              Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 bg-white rounded'>
          <div className='custom-card-icon'>
            <img style={{backgroundColor: 'hsl(257, 27%, 26%)'}} className='p-4 rounded-circle' src={image2} alt="" />
          </div>
          <div>
            <h4 style={{color: 'hsl(257, 27%, 26%)'}} className='mx-3 pt-4'>Detailed Records</h4>
            <p style={{color: 'hsl(257, 7%, 63%)'}} className='py-3 p-md-3 text-center text-md-start'>
              Gian insights into who is clicking  your links. Knowing when and where people engage with your content helps inform better desicions.
            </p>
          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 bg-white rounded'>
          <div className='custom-card-icon'>
            <img style={{backgroundColor: 'hsl(257, 27%, 26%)'}} className='p-4 rounded-circle' src={image3} alt="" />
          </div>
          <div>
            <h4 style={{color: 'hsl(257, 27%, 26%)'}} className='mx-3 pt-4'>Fully customizable</h4>
            <p style={{color: 'hsl(257, 7%, 63%)'}} className='py-3 p-md-3 text-center text-md-start'>
              Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cards;
