import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import SideBar from './SideBar'
import search from './img/Vector.png'
import arrow from './img/down.png'
const ActiveMember = () => {
    return (
        <>
        <SideBar/>
        < div className='w-full p-10 min-h-screen bg-[#ECE9E9] '>

            {/* <div className='h-[750px] w-[580px] bg-[#ECE9E9] pt-[20px] -mt-[75'>
                <div class='w-[580px] h-[100px] bg-[#ECE9E9] flex'>
                    <div class='flex w-[152px]  ml-[40px] pr-[10px]'>
                        <img src={img2}></img>
                        <div class=' font-medium text-[20px] text-[#1A1363] font-Poppins leading-6 mt-[22px]'>STAMINA FITNESS</div>
                    </div>
                    <div class='flex ml-[272px] mt-[35px]'>
                        <p class='mr-[25px] text-[14px] font-Poppins'>Feedback</p>
                        <img src={notifi} class='w-[20px] h-[20px]'></img>
                    </div>
                </div>
                <div class='text-[#1A1363] font-poppins text-[32px] font-bold tracking-normal -ml-[230px] mt-[10px]'>Active Members</div>
                <div class='w-[500px] h-[320px] bg-[#77749B] shadow-lg ml-[50px] rounded-2xl pt-[15px]'>
                    <div class='font-bold text-[18px] text-white -ml-[300px]'>Gym Members</div>
                    <div class=' w-[450px] h-[30px] ml-[25px] mt-[20px] flex'>
                        <div class=' w-[120px] pt-[5px] h-[30px] flex'>
                            <p class='font-poppins text-[12px] font-light text-white'>Show Entries</p>
                            <div class='flex w-[42px] h-[22px] bg-[#5D57A3] rounded-lg ml-[10px] text-white text-[15px] pl-[4px]'>10
                                <img src={arrow} class='ml-[9px]'></img>
                            </div>
                        </div>
                        <div class='flex'>
                            <input class='w-[150px] h-[25px] bg-[#5D57A3] rounded-lg pl-[20px] ml-[140px] text-white ' placeholder='Search'></input>
                            <img src={search} class='w-[20px] ml-[10px] h-[20px]'></img>
                        </div>
                    </div>
                    <table class=' mt-[30px]'>
                        <thead >
                            <tr>
                                <td class='font-poppins font-bold text-[14px] text-white px-[30px]'>Name</td>
                                <td class='font-poppins font-bold text-[14px] text-white px-[10px]'>Member ID</td>
                                <td class='font-poppins font-bold text-[14px] text-white px-[10px]'>Date Enrolled</td>
                                <td class='font-poppins font-bold text-[14px] text-white px-[10px]'>Date Expiration</td>
                                <td class='font-poppins font-bold text-[14px] text-white px-[10px]'>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Member1</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>SFM2301N1</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Jan11</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Feb11</td>
                                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
                            </tr>
                            <tr>
                                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Member2</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>SFM2301N2</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Jan11</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Feb11</td>
                                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
                            </tr>
                            <tr>
                                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Member3</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>SFM2301N3</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Jan11</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Feb11</td>
                                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
                            </tr>
                            <tr>
                                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Member4</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>SFM2301N4</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Jan11</td>
                                <td class='font-poppins font-normal text-[13px] text-white'>Feb11</td>
                                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class='w-[80px] h-[25px] bg-[#666385] rounded-lg font-poppins font-normal text-[13px] mt-[20px] ml-[250px]'>Previous</button>
                    <button class='w-[80px] h-[25px] bg-[#666385] rounded-lg font-poppins font-normal text-[13px] ml-[20px]'>Next</button>
                </div>
            </div> */}



            {/* 
        Edited
        */}

<div className=" w-full h-[76px] flex justify-center lg:justify-between text-[#1a1363]">
        <div className='flex items-center'>
          <img src={img2} className="h-[100%]" />
          <h1 className="hidden  lg:block text-lg leading-none font-semibold">
            STAMINA
            <br />
            FITNESS
          </h1>

        </div>
        <div className='hidden lg:flex gap-5 items-center pr-2 '>
          <span>Feedback</span>
          <span><i class="fa-solid fa-bell"></i></span>
        </div>
      </div>
            <h2 className='text-[#1A1363] text-3xl font-bold mb-5 '>
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
