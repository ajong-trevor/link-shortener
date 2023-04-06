import React from 'react'

import PropTypes from 'prop-types'

function Button({ buttonText, borderRadius, backgroundColor, padding, onClick }) {


  return (
    <div 
    className='custom-btn'
    onClick={onClick} 
    style={{backgroundColor: backgroundColor, color: '#FFFFFF', borderRadius: borderRadius, padding: padding}}
    >
      {buttonText}
    </div>
  )
}

export default Button;
