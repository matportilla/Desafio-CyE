import React from 'react'

const SocialButton = (props) => {
  return (
    <div className='RRSS'>
      {props.icons.map((icon, index) => (
        <i key={index} className={`fa-brands fa-${icon} fa-3x`}></i>

      ))}
    </div>
  )
}

export default SocialButton