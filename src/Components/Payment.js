import React from 'react'
import SideBar from './SideBar'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
const Payment = () => {
  return (
    <div className='w-full flex flex-col gap-2 p-2 min-h-screen bg-[#ECE9E9] '>


      {/* <div className='h-[750px] w-[580px] bg-[#ECE9E9]'> */}
      {/* <div class='w-[580px] h-[100px] bg-[#ECE9E9] flex mt-[20px]'>
                <div class='flex w-[152px]  ml-[40px] pr-[10px]'>
                    <img src={img2}></img>
                    <div class=' font-medium text-[20px] text-[#1A1363] font-Poppins leading-6 mt-[22px]'>STAMINA FITNESS</div>
                </div>
                <div class='flex ml-[272px] mt-[35px]'>
                    <p class='mr-[25px] text-[14px] font-Poppins'>Feedback</p>
                    <img src={notifi} class='w-[20px] h-[20px]'></img>
                </div>
            </div> */}
      {/* <div class='text-[#DEBA3B] font-poppins text-[32px] font-bold tracking-normal flex-start mt-[30px]'>Point of Sale</div>
            <div class='text-[#1A1363] font-poppins text-[40px] font-medium tracking-normal leading-[30px] flex-start '>Add Payment</div> */}
      {/* <div class='h-[250px] w-[555px] bg-white mt-[20px] ml-[25px] rounded-2xl shadow-lg '>
                <div class='grid grid-cols-3'>
                    <label class='font-poppins text-[16px] font-bold mt-[30px]'>Name of Member</label>
                    <label class='font-poppins text-[16px] font-bold mt-[30px] ml-[50px]'>Plan</label>
                    <label class='font-poppins text-[16px] font-bold mt-[30px]'>Price</label>
                    <input class='bg-[#E9E9E9] rounded-lg w-[200px] ml-[25px] mt-[10px]'></input>
                    <input class='bg-[#E9E9E9] rounded-lg w-[90px] ml-[75px] mt-[10px]'></input>
                    <input class='bg-[#E9E9E9] rounded-lg w-[90px] ml-[55px] mt-[10px]'></input>
                </div>
                <div class='w-[190px] text-left mt-[35px] ml-[25px]'>
                    <label class='font-poppins text-[16px] font-bold'>Date of Join</label>
                    <input class='bg-[#E9E9E9] rounded-lg w-[170px]' type='date'></input>
                </div>
                <button class='w-[80px] h-[30px] bg-[#1A1363] text-white rounded-xl font-bold mt-[30px] ml-[290px]'>Save</button>
                <button class='w-[80px] h-[30px] text-[#1A1363] rounded-xl border-2  border-[#1A1363] ml-[20px]'>Cancel</button>
            </div> */}
      {/* </div> */}


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

      <div className='text-[#DEBA3B] text-3xl font-bold'>Point of Sale</div>
      <div className='text-[#1A1363] text-4xl font-medium '>Add Payment</div>
      <div className='p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white text-md rounded-xl font-bold'>
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
    </div>
  );
}

export default Payment
