import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='bg-buttonbackground rounded-lg text-xs p-1 pl-3 pr-3'>{text}</button>
    </div>
  )
}

export default Button
