import React from 'react'
import img from './img/Main Logo.png'
import img2 from './img/img2png.png'
const Login = () => {
  return (
    <div className='w-full flex flex-col gap-2 p-2 min-h-screen bg-[#ECE9E9] '>


      {/* <div class='bg-[#ECE9E9] h-[400px] flex'>
        <div class='w-[250px] h-[300px] bg-[#ECE9E9] ml-[110px] mt-[40px]'>
          <p class='font-poppins font-bold text-[29px] text-[#1A1363] -ml-[150px]'>Sign-in</p>
          <div class=' grid grid-cols-1'>
            <label class='font-poppins font-bold text-[19px] text-[#1A1363] mt-[20px] -ml-[190px]'>Email*</label>
            <input class='w-[200px] mt-[2px] rounded-md h-[30px] border border-[#1A1363] border-2'></input>
            <label class='font-poppins font-bold text-[19px] text-[#1A1363] -ml-[155px] mt-[10px]'>Password*</label>
            <input class='w-[200px] rounded-md mt-[2px] h-[30px] border border-[#1A1363] border-2'></input>
            <div class='flex mt-[25px]'>
              <input type='checkbox'></input>
              <p class='font-poppins font-normal text-[11px] text-[#1A1363]'>Remember me</p>
              <p class='font-poppins font-normal text-[13px] text-[#1A1363] ml-[20px]'>Forgot Password?</p>
            </div>
            <button class='bg-[#1A1363] w-[200px] h-[32px] rounded-xl text-[white] font-bold text-[15px] mt-[28px]'>Login</button>
          </div>

        </div>
        <img src={img}></img>
      </div> */}




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
        <div className='grid'>
          <label className='text-[#1A1363] '>Email*</label>
          <input type='email' className='rounded-xl h-8 border-[#1A1363] border-2'/>
        </div>
        <div className='grid'>
          <label className='text-[#1A1363] '>Password*</label>
          <input type='password' className='rounded-xl h-8 border-[#1A1363] border-2'/>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <input type='checkbox'/>
            <p className='text-sm text-[#1A1363]'>Remember me</p>
          </div>
          <p className=' text-sm text-[#1A1363] ml-[20px]'>Forgot Password?</p>
        </div>
        <button class='bg-[#1A1363] rounded-xl text-[white] font-bold py-2'>Login</button>
      </div>

      <div className='order-1'>
      <img src={img}/>
      </div>
      </div>
    </div>
  )
}

export default Login
