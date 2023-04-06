import React, {Component} from 'react';

import logo from '../images/logo.svg';
import Button from './Button';

class NavigationBar extends Component {
  render() {

    const printClick = () => {
      console.log('Sign up button clicked');
    }

    return (
      <nav className='navbar navbar-expand-md fixed-top mt-4'>
        <div className='container'>
            <a className='navbar-brand' href="#">
              <img src={logo} alt="Logo" />
            </a>

            {/* Toogle button */}

          <button className='navbar-toggler border border-white' type='button' data-bs-toggle='offcanvas' data-bs-target='#navbarNav' aria-controls='offcanvasWithBothOptions'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='offcanvas offcanvas-start ms-auto' data-bs-scroll='true' tabIndex='-1' id='navbarNav' aria-labelledby='offcanvasWithBothOptionsLabel'>
            
            <div className='offcanvas-header'>
              <img src={logo} alt="Logo" />
              <button className='btn-close' type='button' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>

            {/* Navigation links */}
            <ul className='offcanvas-body d-md-flex mt-3 fs-5 justify-content-between text-capitalize' style={{listStyle: 'none'}}>
              
              <div className='d-lg-flex flex align-items-center'>
                <li className='nav-item px-4 my-4 my-md-0'>
                  <a className='nav-link text-center custom-links' href="#">feature</a>
                </li>
                <li className='nav-item px-4 my-4 my-md-0'>
                  <a className='nav-link text-center custom-links' href="#">pricing</a>
                </li>
                <li className='nav-item px-4 my-4 my-md-0'>
                  <a className='nav-link text-center custom-links' href="#">resources</a>
                </li>
              </div>

              <hr className='d-md-0' />

              <div className='d-lg-flex align-items-center justify-content-center text-center'>
                <div className='me-md-5 mb-4 mb-md-0'>
                  <a className='nav-link text-center custom-links' href="#">login</a>
                </div>
                <Button buttonText='Sign up' borderRadius='50px' backgroundColor='hsl(180, 66%, 49%)' padding='8px 28px' onClick={printClick} />
              </div> 

            </ul>

          </div>
        </div>
      </nav>
    );
  };
};

export default NavigationBar;
