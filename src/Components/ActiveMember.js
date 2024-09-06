import React from 'react'
import img2 from './img/img2png.png'
import SideBar from './SideBar'
const ActiveMember = () => {
    return (
        <>
        <SideBar/>
        < div className='w-full p-2 px-10 min-h-screen bg-[#ECE9E9] '>

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
            <h2 className='text-[#1A1363] text-3xl my-6 font-bold '>
                Active Members
            </h2>
            <div className=' bg-[#77749B] shadow-xl rounded-2xl p-6 flex flex-col gap-3'>
                <h2 class='font-bold text-lg text-white '>Gym Members</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs font-light text-gray-400'>Show Entries</span>
                        <select className='outline-none rounded-md bg-[#5D57A3] w-12'>
                            <option>10</option>
                            <option>25</option>
                            <option>20</option>
                        </select>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='text' placeholder='Search' className='w-32 bg-[#5D57A3] rounded-lg text-center' />
                        <span className='text-white text-lg'><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <table className='text-center text-white w-full text-xs border-separate border-spacing-1'>
                        <thead>
                            <th>Name</th>
                            <th>Member ID</th>
                            <th>Date Enrolled</th>
                            <th>Date Expiration</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Member1</td>
                                <td>SFM2301N1</td>
                                <td>Jan11</td>
                                <td>Feb11</td>
                                <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                            </tr>
                            <tr>
                                <td>Member2</td>
                                <td>SFM2301N2</td>
                                <td>Jan11</td>
                                <td>Feb11</td>
                                <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                            </tr>
                            <tr>
                                <td>Member3</td>
                                <td>SFM2301N3</td>
                                <td>Jan11</td>
                                <td>Feb11</td>
                                <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                            </tr>
                            <tr>
                                <td>Member4</td>
                                <td>SFM2301N4</td>
                                <td>Jan11</td>
                                <td>Feb11</td>
                                <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='flex gap-4 justify-end'>
                        <button class=' bg-[#666385] rounded-xl py-2 px-4 text-sm '>Previous</button>
                        <button class=' bg-[#666385] rounded-xl py-2 px-4 text-sm'>Next</button>
                    </div>
                </div>

            </div>


        </div>
        </>
    )
}

export default ActiveMember
