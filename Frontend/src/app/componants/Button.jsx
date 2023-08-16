import React, { useState } from 'react'

const Button = ({text,onClick,mainValue}) => {
  const [data,setData] = useState("")
  const valueScrap=(e)=>{  
    console.log(e)
  }


  return (
    <div>
      <button className='bg-buttonbackground rounded-lg text-xs p-1 pl-3 pr-3' onClick={()=>{onClick();valueScrap()}}>{text}</button>
    </div>
  )
}

export default Button
