import React from 'react'
import Button from '../componants/Button'
import Name from '../componants/Name'

const LeftPart = () => {
    return (
        <div className='w-full md:w-1/2 rounded-lg text-black p-5 md:p-10'>
            <div className='sm:w-full flex justify-between items-center p-5'>
                <img className='w-24 border rounded-full' src="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg" alt="" />
                <Button text={"Upload photo"} />
            </div>

            <div className='mt-8 p-5 w-75 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <Name details={"Your name"} answer={"Vishnu Swaroop"} />
                <Name details={"Email"} answer={"vishnu@oruphones.com"} />
                <Name details={"Phone Number"} answer={"+91 49652845732"} />
            </div>

            <div className='mt-8 p-5 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                    <p className='font-semibold text-lg'>About Vishnu</p>
                    <Button text={"Edit"} />
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi doloremque obcaecati vero numquam, quidem id ducimus natus beatae rerum maxime?</p>
            </div>

            <div className='mt-8 p-5 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                    <p className='font-semibold text-lg'>Skills</p>
                    <Button text={"Edit"} />
                </div>
                <p className='font-semibold text-sm mb-2'>Next.js</p>
                <p className='font-semibold text-sm'>Python</p>
            </div>

        </div>
    )
}

export default LeftPart
