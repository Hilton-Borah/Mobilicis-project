import React from 'react'
import Button from '../componants/Button'
import Name from '../componants/Name'

const Navbar = () => {
    return (
        <div className='w-full '>
            <div className='h-20 flex justify-end' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>

                <div className='w-96 flex justify-between items-center mr-10'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1223 20.8458C11.6525 21.4364 12.3332 21.7608 13.0395 21.7608H13.0405C13.7498 21.7608 14.4336 21.4364 14.9648 20.8447C15.2494 20.5305 15.7345 20.5049 16.0488 20.7884C16.364 21.072 16.3896 21.5582 16.1061 21.8724C15.279 22.7905 14.191 23.2962 13.0405 23.2962H13.0384C11.891 23.2952 10.805 22.7895 9.98105 21.8714C9.69752 21.5571 9.72311 21.071 10.0384 20.7884C10.3536 20.5039 10.8388 20.5295 11.1223 20.8458ZM13.0904 1.28946C17.6402 1.28946 20.6966 4.83306 20.6966 8.14225C20.6966 9.84445 21.1296 10.5661 21.5891 11.3317C22.0436 12.0871 22.5585 12.9448 22.5585 14.5662C22.2012 18.7086 17.8767 19.0463 13.0904 19.0463C8.30424 19.0463 3.97863 18.7086 3.62549 14.6317C3.62243 12.9448 4.13729 12.0871 4.59175 11.3317L4.75219 11.0616C5.14722 10.3827 5.4843 9.64419 5.4843 8.14225C5.4843 4.83306 8.54068 1.28946 13.0904 1.28946ZM13.0904 2.82481C9.51307 2.82481 7.01966 5.62734 7.01966 8.14225C7.01966 10.2703 6.42906 11.2539 5.90704 12.1219C5.4884 12.8189 5.15778 13.3696 5.15778 14.5662C5.32872 16.4966 6.60306 17.511 13.0904 17.511C19.542 17.511 20.8563 16.4516 21.0262 14.4996C21.0231 13.3696 20.6925 12.8189 20.2739 12.1219C19.7518 11.2539 19.1612 10.2703 19.1612 8.14225C19.1612 5.62734 16.6678 2.82481 13.0904 2.82481Z" fill="#1E2875" />
                        </svg>
                    </div>

                    <div className='flex items-center justify-between w-72 rounded p-1 pl-4 pr-4' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>
                        <div className='w-48 flex justify-between items-center'>
                            <div><img src="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg" className='w-8 border rounded' alt="" /></div>
                            <div>
                                <p className='text-xs'>Welcome back,</p>
                                <p className='text-lg font-semibold'>Vishnu Swaroop</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                <path d="M5.37634 8.42388C5.64888 8.15134 6.07536 8.12656 6.37589 8.34955L6.462 8.42388L13.0841 15.0457L19.7063 8.42388C19.9788 8.15134 20.4053 8.12656 20.7059 8.34955L20.792 8.42388C21.0645 8.69643 21.0893 9.12291 20.8663 9.42344L20.792 9.50954L13.627 16.6745C13.3544 16.9471 12.928 16.9718 12.6274 16.7489L12.5413 16.6745L5.37634 9.50954C5.07654 9.20975 5.07654 8.72368 5.37634 8.42388Z" fill="#1E2875" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* second part----------------------------- */}

            <div className='w-full lg:w-full border h-48 mt-5 bg-mobilicis rounded-lg p-3'>
                <p className='text-white'>My profile</p>
                <div className='w-11/12 grid-cols-1 lg:flex h-auto mt-20 m-auto h-full bg-white rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                    <div className='w-1/2 rounded-lg text-black p-10'>
                        <div className='sm:w-full flex justify-between items-center'>
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

                    <div className='w-1/2 rounded-lg text-black p-10'>
                        <div className='p-5 rounded-lg flex justify-between items-center text-sm mt-2 mb-3' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                            <div className='mt-2 mb-3 w-3/4'>
                                <p className='font-semibold text-lg mb-2'>Professional Details</p>
                                <p className='font-semibold text-sm'>This are the professional details shown to users in the app.</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 49 49" fill="none">
                                <path opacity="0.5" d="M21.7743 12.4921C23.8791 9.97369 24.9315 8.71447 26.1413 8.90842C27.3511 9.10238 27.9171 10.6211 29.049 13.6584L29.3419 14.4442C29.6635 15.3073 29.8244 15.7389 30.1373 16.0568C30.4502 16.3747 30.8798 16.543 31.739 16.8795L32.5212 17.1859C35.5448 18.3701 37.0566 18.9622 37.229 20.1724C37.4014 21.3826 36.1203 22.4095 33.558 24.4632L32.8951 24.9946C32.167 25.5782 31.803 25.87 31.5922 26.2694C31.3815 26.6688 31.3479 27.1306 31.2808 28.0543L31.2197 28.8952C30.9836 32.1455 30.8655 33.7707 29.7623 34.3247C28.659 34.8787 27.3013 33.9946 24.5858 32.2266L23.8833 31.7691C23.1116 31.2667 22.7258 31.0155 22.2826 30.9444C21.8394 30.8734 21.3891 30.9905 20.4884 31.2249L19.6684 31.4382C16.4989 32.2628 14.9142 32.6751 14.0599 31.8073C13.2057 30.9394 13.6477 29.3662 14.5316 26.2197L14.7603 25.4057C15.0115 24.5116 15.1371 24.0645 15.074 23.6212C15.0108 23.1779 14.7661 22.7884 14.2765 22.0096L13.8308 21.3006C12.1081 18.5599 11.2468 17.1895 11.822 16.0992C12.3973 15.0088 14.0282 14.9205 17.2901 14.744L18.1339 14.6983C19.0609 14.6482 19.5243 14.6231 19.9284 14.4201C20.3326 14.2172 20.6316 13.8594 21.2298 13.1437L21.7743 12.4921Z" fill="#2684FC" />
                                <path d="M29.6469 22.7913C28.0683 20.9025 27.279 19.9581 26.3717 20.1035C25.4643 20.249 25.0398 21.388 24.1909 23.666L23.9712 24.2554C23.73 24.9027 23.6094 25.2264 23.3747 25.4648C23.14 25.7032 22.8178 25.8294 22.1734 26.0818L21.5867 26.3116C19.319 27.1997 18.1852 27.6438 18.0559 28.5515C17.9266 29.4592 18.8874 30.2293 20.8091 31.7696L21.3063 32.1681C21.8524 32.6058 22.1254 32.8247 22.2835 33.1242C22.4415 33.4238 22.4667 33.7702 22.517 34.4629L22.5628 35.0936C22.74 37.5313 22.8285 38.7502 23.6559 39.1657C24.4834 39.5812 25.5017 38.9182 27.5383 37.5921L28.0652 37.2491C28.6439 36.8722 28.9333 36.6838 29.2657 36.6305C29.5981 36.5772 29.9358 36.6651 30.6113 36.8409L31.2263 37.0009C33.6035 37.6193 34.792 37.9285 35.4327 37.2777C36.0734 36.6268 35.7419 35.4469 35.0789 33.087L34.9074 32.4765C34.719 31.8059 34.6248 31.4706 34.6722 31.1381C34.7195 30.8056 34.9031 30.5135 35.2703 29.9294L35.6045 29.3976C36.8965 27.3421 37.5426 26.3144 37.1111 25.4966C36.6796 24.6788 35.4565 24.6126 33.0101 24.4802L32.3772 24.4459C31.682 24.4083 31.3344 24.3895 31.0313 24.2373C30.7282 24.0851 30.5039 23.8167 30.0553 23.28L29.6469 22.7913Z" fill="#413B89" />
                            </svg>
                        </div>

                        <div className='flex justify-between items-center text-sm mt-7 mb-3'>
                            <p className='font-semibold text-lg'>Certifications</p>
                            <Button text={"Edit"} />
                        </div>

                        <div className='p-1 pl-5 pr-3 rounded-lg flex justify-between items-center text-sm mt-2 mb-3 rounded-e-full rounded-s-full' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 23 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.619 0.543534C12.2981 -0.181177 10.7019 -0.181178 9.38097 0.543533L2.30732 4.42453C0.885008 5.20489 0 6.70473 0 8.33479V15.6652C0 17.2953 0.885006 18.7951 2.30732 19.5755L9.38097 23.4565C10.7019 24.1812 12.2981 24.1812 13.619 23.4565L20.6927 19.5755C22.115 18.7951 23 17.2953 23 15.6652V8.33479C23 6.70473 22.115 5.20489 20.6927 4.42453L13.619 0.543534ZM11.5003 7.54622C11.0812 7.54622 10.8009 8.05223 10.2402 9.06425L10.0951 9.32607C9.93582 9.61365 9.85616 9.75744 9.73195 9.85231C9.60774 9.94719 9.45305 9.98241 9.14366 10.0528L8.86199 10.117C7.77325 10.3648 7.22888 10.4888 7.09937 10.9078C6.96985 11.3269 7.34097 11.7636 8.0832 12.6369L8.27523 12.8628C8.48615 13.111 8.5916 13.2351 8.63905 13.3886C8.68649 13.5421 8.67055 13.7077 8.63866 14.0388L8.60963 14.3402C8.49741 15.5054 8.4413 16.088 8.78038 16.347C9.11945 16.606 9.62914 16.3699 10.6485 15.8976L10.9123 15.7754C11.2019 15.6412 11.3468 15.5741 11.5003 15.5741C11.6538 15.5741 11.7987 15.6412 12.0883 15.7754L12.3521 15.8976C13.3715 16.3699 13.8812 16.606 14.2202 16.347C14.5593 16.088 14.5032 15.5054 14.391 14.3402L14.3619 14.0388C14.3301 13.7077 14.3141 13.5421 14.3616 13.3886C14.409 13.2351 14.5145 13.111 14.7254 12.8628L14.9174 12.6369C15.6596 11.7636 16.0308 11.3269 15.9012 10.9078C15.7717 10.4888 15.2274 10.3648 14.1386 10.117L13.8569 10.0528C13.5476 9.98241 13.3929 9.94719 13.2687 9.85231C13.1444 9.75744 13.0648 9.61365 12.9055 9.32606L12.7604 9.06425C12.1997 8.05223 11.9194 7.54622 11.5003 7.54622Z" fill="#FFCE10" />
                            </svg>
                            <div className='mt-2 mb-3 w-60'>
                                <p className='font-semibold text-lg mb-2'>Python</p>
                                <p className='font-semibold text-sm'>Coding Ninjas</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center text-sm mt-7'>
                            <p className='font-semibold text-lg'>Experience</p>
                            <Button text={"Edit"} />
                        </div>

                        <div className='mt-8 p-5 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                            <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                                <p className='font-semibold text-sm'>7 years(2014-2017)</p>
                                <p className='font-semibold text-sm'>Full time</p>
                            </div>
                            <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                                <p className='text-sm'>Oruphanes</p>
                                <p className='text-sm'>--Full stack developer</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center text-sm mt-7'>
                            <p className='font-semibold text-lg'>Experience</p>
                            <Button text={"Edit"} />
                        </div>

                        <div className='mt-8 p-5 rounded-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                            <p>IIT HYDERABAD</p>
                            <div className='flex justify-between items-center text-sm mt-2 mb-3'>
                                <p className='font-semibold text-sm'>(2014-2017)</p>
                                <p className='font-semibold text-sm'>Btech</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic veritatis asperiores eveniet voluptatum quasi eligendi soluta similique commodi esse obcaecati.</p>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
