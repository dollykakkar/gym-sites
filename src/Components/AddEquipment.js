import React from 'react'
import img2 from './img/img2png.png'
import { useState } from 'react';
import SideBar from './SideBar';
const AddEquipment = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
    <SideBar/>
    < div className='w-full p-2 px-10 min-h-screen bg-[#ECE9E9] flex flex-col gap-6 items-start relative'>


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
      <button className=' px-10 py-1 bg-white rounded-2xl font-bold text-lg text-[#1A1363]' onClick={toggleVisibility}>
          Add Equipment
      </button>


        <div className={` ${isVisible ? 'block' : 'hidden'} w-[80%] p-6 flex flex-col gap-4  bg-white shadow-lg rounded-2xl absolute top-[25%]`}>

          <div className='flex justify-between'>
            <div className='grid content-start'>
              <span className=' font-bold text-lg text-[#1A1363]'>Add Equipment</span>
              <span className='flex gap-2 items-center'><span>Attach Photo</span><i class="fa-regular fa-pen-to-square"></i></span>
            </div>

            <div className='p-10 bg-[#807DA8]'>

            </div>
          </div>

          <div>
            <div>
              <label className=' font-bold text-lg  text-[#1A1363] '>Equipment Name</label>
              <input className='bg-[#CBCCD0] rounded-xl h-8 w-full' />
            </div>
            <div className='flex gap-4'>
              <div className='grid'>
                <label class='font-bold text-lg text-[#1A1363]'>Status</label>
                <input class='bg-[#CBCCD0] rounded-xl w-full h-8'></input>
              </div>
              <div className='grid'>
                <label class='font-bold text-lg text-[#1A1363]'>Total No.</label>
                <input class='bg-[#CBCCD0] rounded-xl w-full h-8' />
              </div>
            </div>
          </div>

          <div className='flex justify-end gap-4 '>
            <button class='rounded-xl px-5 py-1 border-[#1A1363] border-2 text-[#1A1363]' onClick={toggleVisibility}>Cancel</button>
            <button class='rounded-xl px-5 py-1 bg-[#DEBA3B] text-[#1A1363] font-bold' onClick={toggleVisibility}>Save Changes</button>
          </div>
        </div>


        <div class=' bg-[#77749B] shadow-lg w-full  rounded-2xl p-4'>
          <h2 className='font-bold text-lg text-white'>Manage Equipment</h2>

          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-light text-gray-400'>Show Entries</span>
              <select className='outline-none rounded-md bg-[#5D57A3] w-12 text-white'>
                <option>10</option>
                <option>25</option>
                <option>20</option>
              </select>
            </div>
            <div className='flex gap-2 items-center'>
              <input type='text' placeholder='Search' className='w-32 h-5 bg-[#5D57A3] rounded-lg text-center' />
              <span className='text-white text-lg'><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>

            <table className='text-center text-white w-full text-xs border-separate border-spacing-1'>
              <thead>
                <th>Equipment Name</th>
                <th>Total No.</th>
                <th>Status</th>
                <th>Actions</th>
              </thead>
              <tbody>
                <tr>
                  <td>Treadmill</td>
                  <td>1</td>
                  <td>Active</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>10 lbs dumbbell</td>
                  <td>3</td>
                  <td>Inactive</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>15 lbs dumbbell</td>
                  <td>6</td>
                  <td>active</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>20 lbs dumbbell</td>
                  <td>12</td>
                  <td>active</td>
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

export default AddEquipment
