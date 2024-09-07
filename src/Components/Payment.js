import React from 'react'
import SideBar from './SideBar'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
const Payment = () => {
  return (
    <>
    <SideBar/>
    <div className='w-full flex flex-col gap-2 p-2 px-10 min-h-screen bg-[#ECE9E9] '>




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

      <div className='text-[#DEBA3B] text-3xl font-bold mt-10'>Point of Sale</div>
      <div className='text-[#1A1363] text-4xl font-bold '>Add Payment</div>
      <div className='bg-white flex flex-col gap-4 rounded-xl p-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-md font-bold'>
          <div className='flex flex-col'>
            <label>Name of Member</label>
            <input className='bg-[#E9E9E9] rounded-xl h-8'></input>
          </div>
          <div className='flex flex-col'>
            <label>Plan</label>
            <input className='bg-[#E9E9E9] rounded-xl h-8'></input>
          </div>
          <div className='flex flex-col'>
            <label>Price</label>
            <input className='bg-[#E9E9E9] rounded-xl h-8'></input>
          </div>
          <div className='flex flex-col'>
            <label>Date of Join</label>
            <input type='date' className='bg-[#E9E9E9] rounded-xl w-full border-none h-8'></input>
          </div>

        </div>
        <div className='flex justify-end gap-4'>
          <button class=' bg-[#1A1363] text-white rounded-xl px-6 '>Save</button>
          <button class='text-[#1A1363] rounded-xl border-2 border-[#1A1363] px-6 '>Cancel</button>
        </div>
      </div>

    </div>
    </>
  );
}

export default Payment
