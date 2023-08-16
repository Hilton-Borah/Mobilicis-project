import { saveLocalData } from '@/Utils/LocalStorage';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react'

const LoginUser = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const router = useRouter();
   const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault()
    let result = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    })
    result = await result.json();
    console.log(result)
    if (result.message === "Login Successfully") {
      notify(result.message)
      saveLocalData("userData", result.user)
      saveLocalData("userToken", result.token)
      saveLocalData("userId", result.id)
      router.push("/dashboard")
    } else {
      notify(result.message)  
    }
  }

  return (
    <div>
      <p className='text-5xl text-center mt-10 font-semibold'>Welcome to Mobilicis</p>
      <p className='text-1xl text-center m-5 mb-5 font-semibold'>Please login your account to proceed further</p>
      <div className='w-3/4 m-auto flex flex-col justify-center items-center mt-24 md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
        </div>
        <div className='w-full md:w-1/2'>
          {/* <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleChange}>Add</button> */}

          {/* <form action="" onSubmit={handleClick}> */}
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4 mt-10">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"> Phone No.</label>
            <div class="mt-2">
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className='text-center mt-2 '>
            Donot have an account? <Link href={"/register"}><b>Register</b></Link>
          </div>
          <div class="mt-4 flex items-center justify-center gap-x-6 mb-10">
            <button onClick={handleClick} class="w-48 rounded-md bg-mobilicis hover:bg-mobilicisLite px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
          </div>
          {/* </form> */}
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default LoginUser
