import React from 'react'
import Navbar from '../componants/Navbar'

const MainPart = () => {
    return (
        <div className='w-full '>
            <Navbar/>

            {/* second part----------------------------- */}

            <div className='w-full lg:w-full border h-36 mt-5 bg-mobilicis rounded-lg p-3'>
                <p className='text-white text-3xl'>My Connections</p>
                {/* <div className='w-11/12 grid-cols-1 lg:flex h-auto m-auto mt-10 lg:mt-20 h-full bg-white rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                    <RightPart/>
                    <LeftPart/>
                </div> */}
            </div>
        </div>
    )
}

export default MainPart
