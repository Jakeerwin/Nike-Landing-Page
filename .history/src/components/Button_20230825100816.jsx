import React from 'react'

const Button = ({ label, iconURL}) => {
  return (
    <button className="">
        {label}

        <img
          src={iconURL}
          alt="arrow right icon" 
          className="m1-2 rounded-full"
          />
    </button>
  )
}

export default Button