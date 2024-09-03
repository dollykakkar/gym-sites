import React from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import SideBar from './SideBar'
import search from './img/Vector.png'
import arrow from './img/down.png'
import img from './img/PencilSquare.png'
const Plan = () => {
  return (
    <>
    <SideBar/>
    < div className='w-full p-10  min-h-screen bg-[#ECE9E9] flex flex-col gap-6 items-start'>


      {/* 
      
      */}


      {/* <div className='h-[750px] w-[580px] bg-[#ECE9E9] ml-[250px] pt-[20px]'>
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
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl text-[10px]'>Edit</button></td>
              </tr>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>3 months</td>
                <td class='font-poppins font-normal text-[13px] text-white'>3</td>
                <td class='font-poppins font-normal text-[13px] text-white'>2200</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
              </tr>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>6 months</td>
                <td class='font-poppins font-normal text-[13px] text-white'>6</td>
                <td class='font-poppins font-normal text-[13px] text-white'>4300</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
              </tr>
              <tr>
                <td class='font-poppins font-normal text-[13px] text-white py-[5px]'>Annual</td>
                <td class='font-poppins font-normal text-[13px] text-white'>12</td>
                <td class='font-poppins font-normal text-[13px] text-white'>8300</td>
                <td><button class='font-poppins font-normal text-[13px] text-black bg-white w-[38px] h-[20px] rounded-xl font-normal text-[10px] font-poppins'>Edit</button></td>
              </tr>
            </tbody>
          </table>
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

      <button className=' px-10 py-1 bg-white rounded-2xl font-bold text-lg text-[#1A1363]'>
        Add Plan
      </button>


      <div className='w-full bg-[#332F64] rounded-2xl shadow-lg p-10  flex flex-col gap-4'>
        <div className='flex gap-6 '>
          <div className='w-full grid  '>
            <label className='font-poppins text-white mv-4 font-bold'> Plan Name</label>
            <input className='bg-[#E9E9E9] rounded-xl w-full h-8 ' />
          </div>
          <div className='w-full grid'>
            <label className='font-poppins text-white font-bold'>Validity</label>
            <input className='bg-[#E9E9E9] rounded-xl w-full h-8' />
          </div>
        </div>
        <div className='grid'>
          <label class='text-lg font-bold text-white'>Amount</label>
          <input class='bg-[#E9E9E9] rounded-xl h-8 w-full'></input>
        </div>
        <div className='flex gap-4 justify-end '>
          <button class='py-1 px-5 bg-[#DEBA3B] text-[#1A1363] rounded-xl font-bold'>Save</button>
          <button class=' py-1 px-5 text-[#1A1363] rounded-xl border-2 bg-white  border-[#1A1363]'>Cancel</button>
        </div>
      </div>

      <div class=' bg-[#77749B] shadow-lg w-full  rounded-2xl px-4 py-10'>
          {/* <h2 className='font-bold text-lg text-white'>Manage Equipment</h2> */}

          <div className='flex justify-between px-10 items-center'>
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
                <th>Plan Name</th>
                <th>Validity</th>
                <th>Amount</th>
                <th>Edit</th>
              </thead>
              <tbody>
                <tr>
                  <td>1 Month</td>
                  <td>1</td>
                  <td>800</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>3 Months</td>
                  <td>3</td>
                  <td>2200</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>6 Months</td>
                  <td>6</td>
                  <td>4300</td>
                  <td><button className='bg-white text-black py-1 px-2 rounded-2xl'>Edit</button></td>
                </tr>
                <tr>
                  <td>Annual</td>
                  <td>12</td>
                  <td>8500</td>
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

export default Plan
