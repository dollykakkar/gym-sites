import { useState } from 'react'
import React from 'react'
import img from './img/Main Logo.png'
import img2 from './img/img2png.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SideBar from './SideBar';

const Login = () => {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const getUser=async (event)=>{
    event.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/login", userData)
      // toast("res=>",res);
      console.log("res=>", res)
      toast.success(res.data)
    } catch (error) {
      console.log("error=>", error)
      toast.error("error");
    }

  }

  return (
    <>
    <SideBar/>
    <div className='w-full flex flex-col gap-2 p-2 min-h-screen bg-[#ECE9E9] '>
      <div className=" w-full h-[76px] flex justify-between text-[#1a1363]">
        <div className='flex items-center'>
          <img src={img2} className="h-[100%]" />
          <h1 className="text-lg leading-none font-semibold">
            STAMINA
            <br />
            FITNESS
          </h1>

        </div>
        <div className='flex gap-2 items-center pr-2 '>
          <span>Feedback</span>
          <span><i class="fa-solid fa-bell"></i></span>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center'>
        <div className='font-bold text-lg flex flex-col gap-4 order-2 sm:order-1 sm:w-1/2'>
          <h2 className=' font-bold text-3xl text-[#1A1363] '>Sign-in</h2>
       <form onSubmit={getUser}>
          <div className='grid'>
            <label className='text-[#1A1363] '>Email*</label>
            <input 
            onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
            type='email' className='rounded-xl h-8 border-[#1A1363] border-2'
            required
            />
          </div>
          <div className='grid'>
            <label className='text-[#1A1363] '>Password*</label>
            <input 
            onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
            type='password' 
            required
            className='rounded-xl h-8 border-[#1A1363] border-2' />
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <input type='checkbox' />
              <p className='text-sm text-[#1A1363]'>Remember me</p>
            </div>
            <p className=' text-sm text-[#1A1363] ml-[20px]'>Forgot Password?</p>
          </div>
          <button class='bg-[#1A1363] rounded-xl w-full text-[white] font-bold py-2'>Login</button>
          </form>
        </div>

        <div className='order-1'>
          <img src={img} />
        </div>
      </div>
      <ToastContainer/>
    </div>
    </>
  )
}

export default Login
