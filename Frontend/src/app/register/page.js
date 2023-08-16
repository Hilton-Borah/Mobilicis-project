'use client'


import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Toast from '../componants/Toast'

let initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    image: "",
    about: "",
    skills: "",
    certifications_course_name: "",
    certifications_institute: "",
    education_institute: "",
    education_duration_start: "",
    education_duration_end: "",
    education_summary:"",
    experiences_years: "",
    experiences_duration_start: "",
    experiences_duration_end: "",
    experiences_job_type: "",
    experiences_industry: "",
    experiences_designation: ""
}

const Register = () => {
    const router = useRouter()
    const [data, setData] = useState(initialState)

    const { name, email, password, phone, image, about, skills, certifications_course_name, certifications_institute, education_duration_end, education_duration_start, education_institute, education_summary, experiences_designation, experiences_duration_end, experiences_duration_start, experiences_industry, experiences_job_type, experiences_years } = data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        // console.log(data)
        e.preventDefault();
        let result = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.log(result)

        if (result.success === "Your account created successfully") {
            alert(result.success)
            // <Toast/>
            router.push("/login")
        } else if (result.success === "User already exist") {
            alert(result.success)
        } else {
            alert(result.success)
        }

        // axios.post('http://localhost:4500/user/post', data)
        //     .then((res) => {

        //         console.log(res)
        //     }).catch((err) => {
        //         console.log(err)
        //     })
    }

    return (
        <div className='mb-24'>
            <p className='text-5xl text-center mt-10 font-semibold'>Welcome to Mobilicis</p>
            <p className='text-1xl text-center m-5 mb-10 font-semibold'>Please create your account to proceed further</p>
            <div className='w-10/12 m-auto flex flex-col md:flex-row justify-evenly items-start'>
                <form onSubmit={handleSubmit} className='w-5/12 md-w-11/12'>
                    <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-4">
                                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div class="mt-2">
                                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="name" value={name} onChange={handleChange} id="name" autocomplete="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Your name" required/>
                                        </div>
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" value={email} type="email" onChange={handleChange} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="phone" class="block text-sm font-medium leading-6 text-gray-900"> Phone No.</label>
                                    <div class="mt-2">
                                        <input type="number" name="phone" value={phone} onChange={handleChange} id="phone" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div class="mt-2">
                                        <input type="password" name="password" value={password} onChange={handleChange} id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>

                                <div class="col-span-full">
                                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                                    <div class="mt-2">
                                        <textarea id="about" name="about" value={about} onChange={handleChange} rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"required></textarea>
                                    </div>
                                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>

                                <div class="col-span-full">
                                    <label for="image" class="block text-sm font-medium leading-6 text-gray-900"> Photo</label>
                                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div class="text-center">
                                            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                            </svg>
                                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label for="image" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="image" name="image" value={image} onChange={handleChange} type="file" class="sr-only" required/>
                                                </label>
                                                <p class="pl-1">or drag and drop</p>
                                            </div>
                                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="border-b border-gray-900/10 pb-12">
                            <p class="mt-1 text-base leading-6 text-gray-600 mb-5 font-semibold">Add your professional details</p>

                            <div class="sm:col-span-4">
                                <label for="skills" class="block text-sm font-medium leading-6 text-gray-900"> Skills</label>
                                <div class="mt-2 flex justify-between">
                                    <input type="text" name="skills" id="skills" value={skills} onChange={handleChange} autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-3/4" required/>
                                    {/* <button className='border-2 p-1 pl-3 pr-3 rounded'>Add more</button> */}
                                </div>
                            </div>
                            <h2 class="text-base font-semibold leading-7 text-gray-900 mt-10">If you did any course previously*</h2>

                            <div className='flex justify-between align-bottom mt-10'>
                                <div class="sm:col-span-3">
                                    <label for="certifications_course_name" class="block text-sm font-medium leading-6 text-gray-900">Course name</label>
                                    <div class="mt-2">
                                        <input type="text" name={"certifications_course_name"} id="certifications_course_name" onChange={handleChange} value={certifications_course_name} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="certifications_institute" class="block text-sm font-medium leading-6 text-gray-900">Institute name</label>
                                    <div class="mt-2">
                                        <input type="text" name="certifications_institute" id="certifications_institute" onChange={handleChange} value={certifications_institute} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    {/* <button className='border-2 mt-8 p-1 pl-3 pr-3 rounded'>Add more</button> */}
                                </div>
                            </div>

                            <h2 class="text-base font-semibold leading-7 text-gray-900 mt-10">Education*</h2>

                            <div class="sm:col-span-3 mt-10">
                                <label for="education_institute" class="block text-sm font-medium leading-6 text-gray-900">Institute name</label>
                                <div class="mt-2">
                                    <input type="text" name="education_institute" id="education_institute" onChange={handleChange} value={education_institute} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                </div>
                            </div>
                            <div className='flex justify-between align-bottom mt-10'>

                                <div class="sm:col-span-3">
                                    <label for="education_duration_start" class="block text-sm font-medium leading-6 text-gray-900">Start date</label>
                                    <div class="mt-2">
                                        <input type="date" name="education_duration_start" id="education_duration_start" value={education_duration_start} onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="education_duration_end" class="block text-sm font-medium leading-6 text-gray-900">End date</label>
                                    <div class="mt-2">
                                        <input type="date" name="education_duration_end" id="education_duration_end" value={education_duration_end} onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    {/* <button className='border-2 mt-8 p-1 pl-3 pr-3 rounded'>Add more</button> */}
                                </div>
                            </div>

                            <div class="col-span-full mt-10">
                                    <label for="education_summary" class="block text-sm font-medium leading-6 text-gray-900">Summary</label>
                                    <div class="mt-2">
                                        <textarea id="education_summary" name="education_summary" value={education_summary} onChange={handleChange} rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"required></textarea>
                                    </div>
                                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a summary of your education journey.</p>
                                </div>
                        </div>
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Experience*</h2>

                        <div className='flex justify-between align-bottom'>
                            <div class="sm:col-span-3">
                                <label for="experiences_years" class="block text-sm font-medium leading-6 text-gray-900">Years of experience</label>
                                <div class="mt-2">
                                    <input type="text" name="experiences_years" id="experiences_years" value={experiences_years} onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="experiences_duration_start" class="block text-sm font-medium leading-6 text-gray-900">Start date</label>
                                <div class="mt-2">
                                    <input type="date" value={experiences_duration_start} onChange={handleChange} name="experiences_duration_start"
                                        id="experiences_duration_start" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="experiences_duration_end" class="block text-sm font-medium leading-6 text-gray-900">End date</label>
                                <div class="mt-2">
                                    <input type="date" name="experiences_duration_end" id="experiences_duration_end" value={experiences_duration_end} onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between align-bottom mt-10'>
                            <div class="sm:col-span-3">
                                <label for="experiences_job_type" class="block text-sm font-medium leading-6 text-gray-900">Job-type</label>
                                <div class="mt-2 w-40">
                                    <select id="experiences_job_type" name="experiences_job_type" value={experiences_job_type} onChange={handleChange} autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"required>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="experiences_industry" class="block text-sm font-medium leading-6 text-gray-900">Organisation</label>
                                <div class="mt-2">
                                    <input type="text" name="experiences_industry" id="experiences_industry" value={experiences_industry} onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="experiences_designation" class="block text-sm font-medium leading-6 text-gray-900">Designation</label>
                                <div class="mt-2">
                                    <input type="text" name="experiences_designation" id="experiences_designation" value={experiences_designation} onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5 '>
          Donot have an account? <Link href={"/login"}><b>Login</b></Link>
        </div>
                    <div class="mt-3 flex items-center justify-center gap-x-6">
                        <button type="submit" class="w-48 rounded-md bg-mobilicis hover:bg-mobilicisLite px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>
                <div className='hidden md:block w-1/2 flex justify-center items-center mt-36'>
                    <img src='https://github.com/Hilton-Borah/dummyImageforUrbanGuys/assets/103739534/51a2e35a-321d-4a75-86e9-2657a856b10b' className='w-2/6 fixed' />
                </div>
            </div >
        </div>
    )
}

export default Register
