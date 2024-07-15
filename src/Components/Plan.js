import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import SideBar from './SideBar'
import search from './img/Vector.png' 
import arrow from './img/down.png'
import img from './img/PencilSquare.png'
const Plan = () => {
  return (
    <div>
      <div className='h-[750px] w-[580px] bg-[#ECE9E9] ml-[250px] -mt-[750px] pt-[20px]'>
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
            <button class='w-[120px] h-[30px] bg-white rounded-2xl font-poppins font-bold text-[20px] text-[#1A1363] mt-[25px] mb-[20px] -ml-[360px]'>Add Plan</button>
            
            <div class='h-[250px] w-[500px] bg-[#332F64] mt-[10px] ml-[45px] rounded-2xl shadow-lg mb-[20px]'>
                <div class='grid grid-cols-2'>
                    <label class='font-poppins text-white font-bold mt-[40px] -ml-[110px]'> Plan Name</label>
                    <label class='font-poppins text-white font-bold mt-[40px] -ml-[70px]'>Validity</label>
                    <input class='bg-[#E9E9E9] rounded-lg w-[260px] ml-[25px] mt-[10px]'></input>
                    <input class='bg-[#E9E9E9] rounded-lg w-[160px] ml-[55px] mt-[10px]'></input>
                </div>
                <div class='w-[190px] text-left mt-[20px] ml-[30px]'>
                    <label class='font-poppins text-[16px] font-bold text-white'>Amount</label>
                    <input class='bg-[#E9E9E9] rounded-lg mt-[10px] w-[200px]'></input>
                </div>
                <button class='w-[80px] h-[25px] bg-[#DEBA3B] text-[#1A1363] rounded-xl font-bold mt-[30px] ml-[290px]'>Save</button>
                <button class='w-[80px] h-[25px] text-[#1A1363] rounded-xl border-2 bg-white  border-[#1A1363] ml-[20px]'>Cancel</button>
            </div>

            <div class='w-[500px] h-[250px] bg-[#77749B] shadow-lg ml-[50px] rounded-2xl pt-[15px] z-10'>
          <div class=' w-[450px] h-[30px] ml-[25px] flex'>
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
              <td class='font-poppins font-bold text-[14px] text-white px-[30px]'>Plan Name</td>
              <td class='font-poppins font-bold text-[14px] text-white px-[58px] '>Validity</td>
              <td class='font-poppins font-bold text-[14px] text-white px-[28px]'>Amount</td>
              <td class='font-poppins font-bold text-[14px] text-white px-[28px]'>Edit</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>1 month</td>
              <td class='font-poppins font-normal text-[13px] text-white'>1</td>
              <td class='font-poppins font-normal text-[13px] text-white'>800</td>
              <td><button  class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl text-[10px]'>Edit</button></td>
            </tr>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>3 months</td>
              <td class='font-poppins font-normal text-[13px] text-white'>3</td>
              <td class='font-poppins font-normal text-[13px] text-white'>2200</td>
              <td><button  class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
            </tr>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>6 months</td>
              <td class='font-poppins font-normal text-[13px] text-white'>6</td>
              <td class='font-poppins font-normal text-[13px] text-white'>4300</td>
              <td><button  class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
            </tr>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Annual</td>
              <td class='font-poppins font-normal text-[13px] text-white'>12</td>
              <td class='font-poppins font-normal text-[13px] text-white'>8300</td>
              <td><button  class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Plan
