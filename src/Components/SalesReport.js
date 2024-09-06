import React from 'react'
import img2 from './img/img2png.png'
import SideBar from './SideBar'
const SalesReport = () => {
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

      <div className='flex flex-col gap-6'>
        <div class='text-[#1A1363] text-3xl font-bold mt-10'>Sales Report</div>
        <div className='grid grid-cols-3 gap-2 content-between justify-between bg-white rounded-2xl shadow-lg px-2 py-8'>
          <div className='grid'>
            <h2 className='text-lg font-semibold'>From Date</h2>
            <input type='date' className='outline-none bg-[#E9E9E9] w-full h-6 rounded-xl' />
          </div>
          <div className='grid'>
            <h2 className='text-lg font-semibold'>To Date</h2>
            <input type='date' className='outline-none bg-[#E9E9E9] w-full h-6 rounded-xl' />
          </div>
          <div>
            <h2 className='text-lg font-semibold'>Total</h2>
          </div>
        </div>

        <div className='flex flex-col gap-4 bg-white p-4 rounded-2xl'>

          <h2 className='text-2xl font-semibold'>Payment History</h2>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-light text-gray-400'>Show Entries</span>
              <select className='outline-none rounded-md bg-[#5D57A3] text-white w-12'>
                <option>10</option>
                <option>25</option>
                <option>20</option>
              </select>
            </div>
            <div className='flex gap-2 items-center'>
              <input type='text' placeholder='Search' className='w-32 h-5 bg-[#5D57A3] rounded-lg text-center' />
              <span className='text-lg'><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
          <table className='text-center text-[#1a1363] w-full text-xs border-separate border-spacing-1'>
            <thead>
              <th>Member Name</th>
              <th>Member ID</th>
              <th>Plan</th>
              <th>Month</th>
              <th>Date Paid</th>
              <th>Amount</th>
            </thead>
            <tbody>
              <tr>
                <td>Member1</td>
                <td>SFM2301N1</td>
                <td>1 Month - PT</td>
                <td>Jan</td>
                <td>10-1-2013</td>
                <td>1300</td>
              </tr>
              <tr>
                <td>Member2</td>
                <td>SFM2301N2</td>
                <td>6 Month - PT</td>
                <td>Jan</td>
                <td>10-1-2013</td>
                <td>6000</td>
              </tr>
              <tr>
                <td>Member3</td>
                <td>SFM2301N3</td>
                <td>1 Month - M</td>
                <td>Jan</td>
                <td>10-1-2013</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>Member4</td>
                <td>SFM2301N4</td>
                <td>3 Months</td>
                <td>Jan</td>
                <td>10-1-2013</td>
                <td>3500</td>
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

export default SalesReport
