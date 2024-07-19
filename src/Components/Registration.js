import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
const Registration = () => {
  return (
    < div className='w-full p-2 min-h-screen bg-[#ECE9E9] grid content-start gap-6'>


      {/* <div className='h-[750px] w-[580px] bg-[#ECE9E9] ml-[250px]  pt-[20px]'>
            <div class='w-[580px] h-[100px] bg-[#ECE9E9] flex mt-   [20px]'>
                <div class='flex w-[152px]  ml-[40px] pr-[10px]'>
                    <img src={img2}></img>
                    <div class=' font-medium text-[20px] text-[#1A1363] font-Poppins leading-6 mt-[22px]'>STAMINA FITNESS</div>
                </div>
                <div class='flex ml-[272px] mt-[35px]'>
                    <p class='mr-[25px] text-[14px] font-Poppins'>Feedback</p>
                    <img src={notifi} class='w-[20px] h-[20px]'></img>
                </div>
            </div>
            <div class='text-[#DEBA3B] font-poppins text-[32px] font-bold tracking-normal flex-start -ml-[250px] mt-[10px]'>Become a Member</div>
            <div class='text-[#1A1363] font-poppins text-[40px] font-medium tracking-normal leading-[30px] flex-start -ml-[390px] '>Register</div>
            <div class='h-[300px] w-[500px] bg-white mt-[20px] ml-[25px] rounded-2xl shadow-lg '>
                <div class='grid grid-cols-2'>
                    <label class='font-poppins text-[16px] font-bold mt-[40px] -ml-[40px]'>Name of Participant</label>
                    <label class='font-poppins text-[16px] font-bold mt-[40px] -ml-[80px]'>Date of Join</label>
                    <input class='bg-[#E9E9E9] rounded-lg w-[250px] ml-[25px] mt-[5px]'></input>
                    <input class='bg-[#E9E9E9] rounded-lg w-[180px] ml-[38px] mt-[5px]' type='date'></input>
                    <label class='font-poppins text-[16px] font-bold -ml-[90px] mt-[15px]'>Email Address</label>
                    <label class='font-poppins text-[16px] font-bold -ml-[80px] mt-[15px]'>Contact No.</label>
                    <input class='bg-[#E9E9E9] rounded-lg w-[250px] ml-[25px] mt-[5px]'></input>
                    <input class='bg-[#E9E9E9] rounded-lg w-[180px] ml-[38px] mt-[5px]'></input>
                    <label class='font-poppins text-[16px] font-bold -ml-[150px] mt-[15px]'>Plan</label>
                    <label class='font-poppins text-[16px] font-bold -ml-[340px] mt-[15px]'>Price</label>
                    <input class='bg-[#E9E9E9] rounded-lg w-[130px] ml-[30px] mt-[5px]'></input>
                    <input class='bg-[#E9E9E9] rounded-lg w-[130px] -ml-[70px] mt-[5px]'></input>
                </div>
                <button class='w-[210px] h-[25px] bg-[#1A1363] text-white rounded-xl font-bold mt-[30px] ml-[150px]'>Available Membership</button>
                <button class='w-[80px] h-[25px] text-[#1A1363] rounded-xl border-2 border-[#1A1363] ml-[20px]'>Cancel</button>
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

      <div className='flex flex-col gap-3 pl-2'>
        <div class='text-[#DEBA3B] text-3xl font-bold'>Become a Member</div>
        <div class='text-[#1A1363] text-4xl font-medium '>Register</div>
        <div className='p-6 grid md:grid-col-2 gap-4 bg-white text-md font-bold rounded-2xl'>
          <div className='flex flex-col'>
            <label>Name of Participant</label>
            <input className='bg-[#E9E9E9] rounded-xl h-8'></input>
          </div>
          <div className='flex flex-col'>
            <label>Date of Join</label>
            <input type='date' className='bg-[#E9E9E9] w-full rounded-xl h-8'></input>
          </div>
          <div className='flex flex-col'>
            <label>Email</label>
            <input type='email' className='bg-[#E9E9E9] rounded-xl h-8'></input>
          </div>
          <div className='flex flex-col'>
            <label>Contact No.</label>
            <input type='number' className='bg-[#E9E9E9] rounded-xl w-full border-none h-8'></input>
          </div>
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <label>plan</label>
              <input type='number' className='bg-[#E9E9E9] rounded-xl w-full border-none h-8'></input>
            </div>
            <div className='flex flex-col'>
              <label>price</label>
              <input type='number' className='bg-[#E9E9E9] rounded-xl w-full border-none h-8'></input>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
