import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import search from './img/Vector.png'
import arrow from './img/down.png'
import img from './img/PencilSquare.png'
import { useState } from 'react';
import SideBar from './SideBar'
const AddEquipment = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
    <SideBar/>
    < div className='w-full p-10 min-h-screen bg-[#ECE9E9] flex flex-col gap-6 items-start relative'>


      {/* <div className='h-[750px] w-[580px] bg-[#ECE9E9] ml-[250px]  pt-[20px]'>
        <div class='w-[580px] h-[100px] bg-[#ECE9E9] flex'>
          <div class='flex w-[152px]  ml-[40px] pr-[10px]'>
            <img src={img2}></img>
            <div class=' font-medium text-[20px] text-    [#1A1363] font-Poppins leading-6 mt-[22px]'>STAMINA FITNESS
            </div>
          </div>
          <div class='flex ml-[272px] mt-[35px]'>
            <p class='mr-[25px] text-[14px] font-Poppins'>Feedback</p>
            <img src={notifi} class='w-[20px] h-[20px]'></img>
          </div>
        </div>
        <button class='w-[160px] h-[30px] bg-white rounded-2xl font-poppins font-bold text-[20px] text-[#1A1363] mt-[25px] mb-[20px]' onClick={toggleVisibility}>Add Equipment</button>
        <div class='w-[500px] h-[300px] bg-[#77749B] shadow-lg ml-[50px] rounded-2xl pt-[15px] -z-10 '>
          <div class='font-bold text-[18px] text-white -ml-[300px]'>Manage Equipment</div>
          <div class=' w-[450px] h-[30px] ml-[25px] mt-[10px] flex'>
            <div class=' w-[120px] pt-[5px] h-[30px] flex'>
              <p class='font-poppins text-[12px] font-light text-white'>Show Entries</p>
              <div class='flex w-[42px] h-[22px] bg-[#5D57A3]     rounded-lg ml-[10px] text-white   text-[15px] pl-[4px]   '>10
                <img src={arrow} class='ml-[9px]'></img>
              </div>
            </div>
            <div class='flex'>
              <input class='w-[150px] h-[25px] bg-[#5D57A3] rounded-lg pl-[20px] ml-[140px] text-white' placeholder='Search'></input>
              <img src={search} class='w-[20px] ml-[10px] h-[20px]'></img>
            </div>
          </div>

          <table class=' mt-[20px]'>
            <thead >
              <tr>
                <td class='font-poppins font-bold text-[14px] text-white px-[30px]'>Equipment Name</td>
                <td class='font-poppins font-bold text-[14px] text-white px-[28px]'>Total No.</td>
                <td class='font-poppins font-bold text-[14px] text-white px-[28px]'>Status</td>
                <td class='font-poppins font-bold text-[14px] text-white px-[28px]'>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Treadmill</td>
                <td class='font-poppins font-normal text-[13px] text-white'>1</td>
                <td class='font-poppins font-normal text-[13px] text-white'>Active</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl text-[10px]'>Edit</button></td>
              </tr>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>10 lbs Dumbell</td>
                <td class='font-poppins font-normal text-[13px] text-white'>3</td>
                <td class='font-poppins font-normal text-[13px] text-white'>Inactive</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
              </tr>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>15 lbs Dumbell</td>
                <td class='font-poppins font-normal text-[13px] text-white'>6</td>
                <td class='font-poppins font-normal text-[13px] text-white'>Active</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
              </tr>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>15 lbs Dumbell</td>
                <td class='font-poppins font-normal text-[13px] text-white'>12</td>
                <td class='font-poppins font-normal text-[13px] text-white'>Active</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
              </tr>
            </tbody>
          </table>
          <button class='w-[80px] h-[25px] bg-[#666385] rounded-lg font-poppins font-normal text-[13px] mt-[20px] ml-[250px]'>Previous</button>
          <button class='w-[80px] h-[25px] bg-[#666385] rounded-lg font-poppins font-normal text-[13px] ml-[20px]'>Next</button>
        </div>
        <div className={isVisible ? 'block' : 'hidden'}>
          <div class='w-[500px] h-[300px] bg-white shadow-lg ml-[50px] rounded-2xl -mt-[190px] z-50 '>
            <div class='w-[500px] h-[80px] flex '>
              <div>
                <p class='font-poppins font-bold text-[20px] text-[#1A1363] w-[210px] mt-[8px]'>Add Equipment</p>
                <p class='font-poppins font-normal text-[12px] text-[#1A1363] w-[210px] -ml-[40px]'>Attach Photo <img src={img} class='ml-[150px] -mt-[15px]'></img></p>
              </div>
              <div class='w-[70px] h-[70px] bg-[#666385]  mt-[5px] ml-[200px]'></div>
            </div>
            <label class='font-poppins font-bold text-[20px] text-[#1A1363] mr-[260px]'>Equipment Name</label>
            <input class='w-[425px] bg-[#CBCCD0] rounded-lg h-[30px] mt-[5px]'></input>
            <div class='grid grid-cols-2 mt-[10px]'>
              <label class='font-poppins font-bold text-[20px] text-[#1A1363] -ml-[110px]'>Status</label>
              <label class='font-poppins font-bold text-[20px] text-[#1A1363]'>Total No.</label>
              <input class='w-[270px] ml-[30px] mt-[10px] bg-[#CBCCD0] rounded-lg h-[30px]'></input>
              <input class='rounded-lg w-[155px] ml-[75px] mt-[10px] bg-[#CBCCD0]'></input>
            </div>
            <button class='h-[30px] w-[90px] rounded-xl border-[#1A1363] border-2 text-[#1A1363] font-normal mt-[35px] ml-[170px] '>Cancel</button>
            <button class='h-[30px] w-[160px] rounded-xl bg-[#DEBA3B] text-[#1A1363] font-bold ml-[20px]'>Save Changes</button>
          </div>
        </div>
      </div> */}

      {/* 
      Edited Code 
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
        <div className='hidden lg:flex gap-2 items-center pr-2 '>
          <span>Feedback</span>
          <span><i class="fa-solid fa-bell"></i></span>
        </div>
      </div>
      <button className=' px-10 py-1 bg-white rounded-2xl font-bold text-lg text-[#1A1363]' onClick={toggleVisibility}>
          Add Equipment
      </button>


        <div className={` ${isVisible ? 'block' : 'hidden'} w-full p-6 flex flex-col gap-4  bg-white shadow-lg rounded-2xl absolute top-[25%]`}>

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
