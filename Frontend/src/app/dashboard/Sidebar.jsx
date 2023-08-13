import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { TbMathGreater } from "react-icons/tb"

export default function Sidebar({ show, setter }) {
   //  const router = useRouter();

   // Define our base class
   const className = "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
   // Append class based on state of sidebar visiblity
   const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0 border-0";

   // Clickable menu items
   const MenuItem = ({ icon, name, route }) => {
      return (
         <Link
            href={route}
            onClick={() => {
               setter(oldVal => !oldVal);
            }}
            className={`flex gap-1 my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-red`}
         >
            <div className='flex justify-center items-center text-lg'>

               <div className="text-xl  [&>*]:mx-auto w-[30px] align-center">
                  {icon}
               </div>
               <div>{name}</div>
            </div>
         </Link>
      )
   }

   // Overlay to prevent clicks in background, also serves as our close button
   const ModalOverlay = () => (
      <div
         className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
         onClick={() => {
            setter(oldVal => !oldVal);
         }}
      />
   )

   return (
      <>
         <div className={`${className}${appendClass} pr-10 shadow-slate-200 bg-white `} style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>
            <div className="p-2 flex m-auto justify-center items-center mt-5 ml-10 rounded" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
               <Link href="/dashboard">
                  <p m-auto>Dashboard</p>
               </Link>
            </div>
            <div className="flex flex-col mt-5">
               <MenuItem
                  name="My profile"
                  route="/dashboard"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                     <path d="M6.11108 10.7778L9.66664 7.22223L6.11108 3.66667" stroke="#9197B3" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>}
               />
               <MenuItem
                  name="Connections"
                  route="/connections"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                     <path d="M6.11108 10.7778L9.66664 7.22223L6.11108 3.66667" stroke="#9197B3" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>}
               />
            </div>
         </div>

         
         {show ? <ModalOverlay /> : <></>}
      </>
   )
}