import React from 'react'
import img2 from './img/img2png.png'
import SideBar from './SideBar'

export const Dashboard = () => {
    return (
        <>
        <SideBar/>
        <div className='w-full flex flex-col gap-2  p-2 px-10 min-h-screen bg-[#ECE9E9] '>
            <div className=" w-full h-[76px] flex justify-center lg:justify-between text-[#1a1363]">
                <div className='flex items-center'>
                    <img src={img2} className="h-[100%]" />
                    <h1 className="hidden  lg:block text-lg leading-none font-semibold">
                        STAMINA
                        <br />
                        FITNESS
                    </h1>

                </div>
                <div className='hidden lg:flex gap-2 items-center pr-2 '>
                    <span>Feedback</span>
                    <span><i class="fa-solid fa-bell"></i></span>
                </div>
            </div>

            <div className='flex flex-col gap-6 lg:flex-row' >
                <div className='lg:w-2/3 flex flex-col gap-6'>
                    <div className='w-full flex justify-between items-center gap-5 bg-white p-8 rounded-xl shadow-xl'>
                        <div className='w-3/4 '>
                            <h2 className='text-xl mb-2'>Welcome Banner, <span className='text-[#1a1363] font-bold'>Martell</span></h2>
                            <p className='text-xs text-gray-500 text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className='w-20 h-20 rounded-full bg-[#1a1363]'>
                        </div>
                    </div>

                    <div className='w-full flex justify-between'>
                        <div className='w-[48%] bg-white rounded-xl p-4 flex flex-col gap-3 shadow-xl'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-xl font-bold'> Coaches</h2>
                                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[#1a1363] text-4xl'><i class="fa-solid fa-circle"></i></span>
                                <span>Juan Dela Cruz</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[#1a1363] text-4xl'><i class="fa-solid fa-circle"></i></span>
                                <span>Peter</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[#1a1363] text-4xl'><i class="fa-solid fa-circle"></i></span>
                                <span>Peter</span>
                            </div>
                        </div>
                        <div className='w-[48%] bg-white rounded-xl p-4 flex flex-col justify-center items-center shadow-xl '>
                            <div className='w-full flex justify-between items-center'>
                                <h2 className='text-xl font-bold'> Sales</h2>
                                <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                            </div>
                            <div className='w-40 h-40 rounded-full border-[30px] border-[#1a1363] flex justify-center items-center'>
                                <h2>85%</h2>
                            </div>
                        </div>
                    </div>

                    <h2 className='text-xl font-bold text-[#1a1363]'>Active Members</h2>
                    <div className='w-full rounded-xl bg-[#74789B] p-4'>
                        <div className='flex justify-between text-white'>
                            <div>
                                <input type='text' placeholder='search' className='rounded-xl bg-[#555B95] pl-4' />
                                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                            </div>
                            <div>
                                <span>Sort by</span>
                                <span><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span>
                            </div>
                        </div>

                        <div className='w-full sm:flex mt-6 shadow-xl'>
                            <div className='sm:w-1/2 text-white flex flex-col gap-4 p-4'>

                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'><span className='text-[#959595] text-4xl'><i class="fa-solid fa-circle"></i></span>
                                        <span className='text-lg '>James Medalla</span>
                                    </div>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'><span className='text-[#959595] text-4xl'><i class="fa-solid fa-circle"></i></span>
                                        <span className='text-lg '>JKent Charl Mabutas</span>
                                    </div>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'><span className='text-[#959595] text-4xl'><i class="fa-solid fa-circle"></i></span>
                                        <span className='text-lg '>John Elmar Rodrigo</span>
                                    </div>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>

                            </div>
                            <div className='sm:w-1/2 text-white font-bold text-sm'>
                                <div className='flex justify-between '>
                                    <span>Date paid</span>
                                    <span>Date Expiary</span>
                                    <span>Status</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/3 px-4'>
                    <div className='bg-white rounded-xl shadow-xl w-full h-48 p-4 mb-10'>
                        <h2 className='text-lg font-bold'>Calender</h2>
                    </div>

                    <h2 className='text-lg font-bold pl-4'>
                        Inventory
                    </h2>
                    <div className='bg-white rounded-xl shadow-xl w-full h-80 p-4 '>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
