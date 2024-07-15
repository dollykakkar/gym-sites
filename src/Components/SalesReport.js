import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import SideBar from './SideBar'
import search from './img/Vector.png' 
import arrow from './img/down.png'
import check from './img/JournalCheck.png'
const SalesReport = () => {
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
            <div class='text-[#1A1363] font-poppins text-[32px] font-bold tracking-normal -ml-[300px] mt-[10px]'>Sales Report</div>
            <div class='h-[100px] w-[500px] bg-white mt-[20px] ml-[50px] rounded-2xl shadow-lg '>
                <div class='grid grid-cols-3'>
                    <label class='font-poppins text-[16px] font-bold mt-[15px] -ml-[30px]'>From Date</label>
                    <label class='font-poppins text-[16px] font-bold mt-[15px] -ml-[10px]'>To Date</label>
                    <label class='font-poppins text-[16px] font-bold mt-[15px] -ml-[70px]'>Total</label>
                    <input class='bg-[#E9E9E9] rounded-lg ml-[25px] mt-[10px] w-[150px]' type='date'>
                    </input>
                    <input class='bg-[#E9E9E9] rounded-lg ml-[20px] mt-[10px] w-[150px]' type='date'></input>
                </div>
            </div>
            <div class='w-[500px] h-[260px] bg-white shadow-lg ml-[50px] rounded-2xl pt-[15px] mt-[25px]'>
          <div class='font-bold text-[18px] text-black -ml-[300px]'>Payment History</div>
          <div class=' w-[450px] h-[30px] ml-[25px] mt-[10px] flex'>
            <div class=' w-[120px] pt-[5px] h-[30px] flex'>
              <p class='font-poppins text-[12px] font-light text-black'>Show Entries</p>
              <div class='flex w-[42px] h-[22px] bg-[#5D57A3]     rounded-lg ml-[10px] text-white   text-[15px] pl-[4px]   '>10
                <img src={arrow} class='ml-[9px] text-black'></img>
              </div>
            </div>
            <div class='flex'>
              <input class='w-[150px] h-[25px] bg-[#5D57A3] rounded-lg pl-[20px] ml-[140px] text-white border-b-white' placeholder='Search'></input>
              <img src={search} class='w-[20px] ml-[10px] h-[20px] '></img>
            </div>
          </div>
       
        <table class=' mt-[20px]'>
          <thead >
            <tr>
              <td class='font-poppins font-bold text-[14px] text-[#1A1363] px-[19px]'>Member Name</td>
              <td class='font-poppins font-bold text-[14px] text-[#1A1363] px-[3px]'>Member ID</td>
              <td class='font-poppins font-bold text-[14px] text-[#1A1363] px-[5px]'>Plan</td>
              <td class='font-poppins font-bold text-[14px] text-[#1A1363] px-[5px]'>Month</td>
              <td class='font-poppins font-bold text-[14px] text-[#1A1363] px-[5px]'>Date-Piad</td>
              <td class='font-poppins font-bold text-[14px] text-[#1A1363] px-[5px]'>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363] py-[5px]'>Member1</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363] '>SFM2301N1</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>1 Month - PT</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>Jan</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>10-01-2023</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>1300</td>
            </tr>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363] py-[5px]'>Member2</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>SFM2301N2</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>6 Month - PT</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>Jan</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>10-01-2023</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>6000</td>
            </tr>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363] py-[5px]'>Member3</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>SFM2301N3</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>1 Month</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>Jan</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>10-01-2023</td>
              <td class='font-poppins font-normal text-[13px] ttext-[#1A1363]'>1200</td>
            </tr>
            <tr>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363] py-[5px]'>Member4</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>SFM2301N3</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>6 Months</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>Jan</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>10-01-2023</td>
              <td class='font-poppins font-normal text-[13px] text-[#1A1363]'>3500</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default SalesReport
