import React, { useEffect } from 'react'
import img2 from './img/img2png.png'
// import axios from 'axios'
import SideBar from './SideBar'
const ActiveCoach = () => {

  useEffect((res) => {

  })

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

      <div className='p-4'>
        <h2 className='text-[#1A1363] text-3xl my-2 font-bold '>
          Active Coaches
        </h2>
        <button class='py-1 px-5 bg-white rounded-2xl font-bold text-md text-[#1A1363] my-3'>Add Coach</button>
        <div className=' bg-[#77749B] shadow-xl rounded-2xl p-6 flex flex-col gap-3'>
          <h2 class='font-bold text-lg text-white'>Gym Members</h2>
          <div className='flex flex-col gap-4'>
            <table className='text-center text-white w-full text-xs border-separate border-spacing-1'>
              <thead>
                <th>Name</th>
                <th>Coach ID</th>
                <th>Contact</th>
                <th>Date Expiration</th>
                <th>Actions</th>
              </thead>
              <tbody>
                <tr>
                  <td>Coach1</td>
                  <td>SFM2301N1</td>
                  <td>Jan11</td>
                  <td>Feb11</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>coach2</td>
                  <td>SFM2301N2</td>
                  <td>Jan11</td>
                  <td>Feb11</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>coach3</td>
                  <td>SFM2301N3</td>
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

    </div>
    </>
  )
}

export default ActiveCoach
