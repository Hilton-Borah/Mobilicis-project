import React from 'react'

const PeopleCard = ({name,job_role,organisation,button,image}) => {
  return (
    <div className='w-80 flex justify-evenly items-center rounded-lg p-7 gap-3' style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
        <div>
            <p className='font-semibold'>{name}</p>
            <div className='mt-2 text-xs text-textColor'>
                <p>{job_role}</p>
                <p>{organisation}</p>
            </div>
            <button className='mt-3 rounded-e-full rounded-s-full text-xs p-1 pl-2 pr-2 bg-buttonbackground1'>{button}</button>
        </div>
        <div>
            <img className='w-24 border rounded-full' src={image} alt="" />
        </div>
    </div>
  )
}

export default PeopleCard
