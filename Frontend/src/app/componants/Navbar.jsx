import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 flex justify-end' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>

                <div className='w-96 flex justify-between items-center mr-10 md-hidden'>
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
  )
}

export default Navbar
