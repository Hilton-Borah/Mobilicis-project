"use client"

import React, { useEffect, useState } from 'react'
import Button from '../componants/Button'
import Name from '../componants/Name'
import Navbar from '../componants/Navbar'
import RightPart from './RightPart'
import LeftPart from './LeftPart'
import { getLocalData } from '@/Utils/LocalStorage'

// const getData = () => {
//     fetch("http://localhost:3000/api/register")
//         .then((res) => {
//             return res.json();
//         }).then((res) => {
//             console.log(res)
//         }).catch((err) => {
//             return err
//         })
// }


const MainDashboard = () => {
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/register")
            .then((res) => {
                return res.json();
            }).then((res) => {
                setuserData(res.success)
                console.log(res.success)
            }).catch((err) => {
                return err
            })
    }, [])

    // let userAll = getData();
    // console.log(userAll)

    // useEffect(()=>{
    //     setuserData(getData())
    // },[])
    // console.log(getLocalData("userId"))
    // console.log(userData)

    userData && userData.filter((el) => el._id === getLocalData("userId"))
    // console.log(userData[0])

    // let { name, email, password, phone, image, about, skills, certifications_course_name, certifications_institute, education_duration_end, education_duration_start, education_institute, experiences_designation, experiences_duration_end, experiences_duration_start, experiences_industry, experiences_job_type, experiences_years } = userData && userData[0]
    // console.log(name,email)  name={name} email={email} phone={phone} about={about} skills={skills}
    return (
        <div className='w-full h-full bg-entire'>
            <Navbar />

            {/* second part----------------------------- */}

            {
                userData && userData.map((el) => {
                    return (
                        <div className='w-full lg:w-full border h-48 mt-5 bg-mobilicis rounded-lg p-3'>
                            <p className='text-white'>My profile</p>
                            <div className='w-11/12 grid grid-cols-1 lg:flex h-auto m-auto mt-10 lg:mt-20 h-full bg-white rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                                <LeftPart key={el.id} name={el.name} email={el.email} phone={el.phone} about={el.about} skills={el.skills} />
                                <RightPart key={el.id} certifications_course_name={el.certifications_course_name} certifications_institute={el.certifications_institute} education_duration_end={el.education_duration_end} education_duration_start={el.education_duration_start} education_institute={el.education_institute} experiences_designation={el.experiences_designation} experiences_duration_end={el.experiences_duration_end} experiences_duration_start={el.experiences_duration_start} experiences_industry={el.experiences_industry} experiences_job_type={el.experiences_job_type} experiences_years={el.experiences_years}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainDashboard
