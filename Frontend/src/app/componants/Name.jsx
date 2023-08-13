import React from 'react'
import Button from './Button'

const Name = ({details,answer}) => {
    return (
        <div>
            <p className='text-sm'>{details}</p>
            <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                <p className='font-semibold'>{answer}</p>
                <Button text={"Edit"} />
            </div>
        </div>
    )
}

export default Name
