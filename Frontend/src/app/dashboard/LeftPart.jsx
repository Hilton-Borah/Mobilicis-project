"use client"

import React, { useState } from 'react'
import Button from '../componants/Button'
import Name from '../componants/Name'
import Modal from '../componants/Modal'

const LeftPart = ({name,email,phone,about,skills}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
        <div className='w-full md:w-1/2 rounded-lg text-black p-5 md:p-10'>
            <div className='sm:w-full flex justify-between items-center p-5'>
                <img className='w-24 border rounded-full' src="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg" alt="" />
                <Button text={"Upload photo"} onClick={openModal}/>
            </div>

            <div className='mt-8 p-5 w-75 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <Name details={"Your name"} answer={name}  onClick={openModal}/>
                <Name details={"Email"} answer={email}  onClick={openModal}/>
                <Name details={"Phone Number"} answer={phone}  onClick={openModal}/>
            </div>

            <div className='mt-8 p-5 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                    <p className='font-semibold text-lg'>About Vishnu</p>
                    <Button text={"Edit"} mainValue={"about"}  onClick={openModal}/>
                </div>
                <p>{about}</p>
            </div>

            <div className='mt-8 p-5 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                    <p className='font-semibold text-lg'>Skills</p>
                    <Button text={"Edit"}  onClick={openModal}/>
                </div>
                <p className='font-semibold text-sm mb-2'>{skills}</p>
            </div>


            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default LeftPart
