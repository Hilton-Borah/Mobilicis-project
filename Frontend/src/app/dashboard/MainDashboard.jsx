import React from 'react'
import Button from '../componants/Button'
import Name from '../componants/Name'
import Navbar from '../componants/Navbar'
import RightPart from './RightPart'
import LeftPart from './LeftPart'

const MainDashboard = () => {
    return (
        <div className='w-full h-full bg-entire'>
            <Navbar/>

            {/* second part----------------------------- */}

            <div className='w-full lg:w-full border h-48 mt-5 bg-mobilicis rounded-lg p-3'>
                <p className='text-white'>My profile</p>
                <div className='w-11/12 grid-cols-1 lg:flex h-auto m-auto mt-10 lg:mt-20 h-full bg-white rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                    <LeftPart/>
                    <RightPart/>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard
