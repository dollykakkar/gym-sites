import React, { useState } from 'react'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import SideBar from './SideBar'
import search from './img/Vector.png'
import arrow from './img/down.png'
import img from './img/PencilSquare.png'
import axios from 'axios'
import { toast } from 'react-toastify'
const Plan = () => {
  let [planDetails, setPlanDetails] = useState({
    name: "",
    validity: "",
    amount: ""
  })

  const sendDetails = async (event) => {
    event.preventDefault()
    console.log("clicked");

    try {
      const res = await axios.post("http://localhost:5000/addplan", planDetails)
      toast.success("added")
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  return (
    <>
    <SideBar/>
    < div className='w-full px-10 py-2 min-h-screen bg-[#ECE9E9] flex flex-col gap-6 items-start'>




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


      <form onSubmit={sendDetails} className='w-full bg-[#332F64] rounded-2xl shadow-lg p-4 flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='w-[65%] grid'>
            <label className='font-poppins text-white font-bold'> Plan Name</label>
            <input
              required
              onChange={(e) => setPlanDetails({ ...planDetails, name: e.target.value })}
              className='bg-[#E9E9E9] rounded-xl w-full h-8' />
          </div>
          <div className='w-[35%] grid'>
            <label className='font-poppins text-white font-bold'>Validity</label>
            <input
              required
              onChange={(e) => setPlanDetails({ ...planDetails, validity: e.target.value })}
              className='bg-[#E9E9E9] rounded-xl w-full h-8' />
          </div>
        </div>
        <div className='w-[65%] grid'>
          <label class='text-lg font-bold text-white'>Amount</label>
          <input
            required
            onChange={(e) => setPlanDetails({ ...planDetails, amount: e.target.value })}
            className='bg-[#E9E9E9] rounded-xl h-8 w-full'></input>
        </div>

        <div className='flex gap-4 justify-end '>
          <button type='submit' className='py-1 px-5 bg-[#DEBA3B] text-[#1A1363] rounded-xl font-bold'>Save</button>
          <button class=' py-1 px-5 text-[#1A1363] rounded-xl border-2 bg-white  border-[#1A1363]'>Cancel</button>
        </div>
      </form>

      <div className=' bg-[#77749B] shadow-lg w-full  rounded-2xl px-4 py-10'>


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
