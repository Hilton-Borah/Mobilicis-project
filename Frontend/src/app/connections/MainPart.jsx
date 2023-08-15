import React from 'react'
import Navbar from '../componants/Navbar'
import Connections from './Connections'
import Recommended from './Recommended'

const MainPart = () => {
    return (
        <div className='w-full '>
            <Navbar />

            {/* second part----------------------------- */}

            <div className='w-full lg:w-full border h-24 mt-5 bg-mobilicis rounded-lg p-3'>
                <p className='text-white text-2xl'>My Connections</p>
            </div>
            <div className='m-7'>
                <Connections />
                <Recommended />
            </div>
        </div>
    )
}

export default MainPart
