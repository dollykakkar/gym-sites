import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
const Registration = () => {
  return (
    <div>
      <div className='h-[750px] w-[580px] bg-[#ECE9E9] ml-[250px] -mt-[750px] pt-[20px]'>
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
      </div>
    </div>
  )
}

export default Registration
