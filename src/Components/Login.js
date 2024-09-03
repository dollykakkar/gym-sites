import React from 'react'
import img from './img/Main Logo.png'
import img2 from './img/img2png.png'
const Login = () => {
  return (
    // <div className='w-full flex flex-col gap-2 p-10 min-h-screen bg-[#ECE9E9] '>


    //   {/* <div class='bg-[#ECE9E9] h-[400px] flex'>
    //     <div class='w-[250px] h-[300px] bg-[#ECE9E9] ml-[110px] mt-[40px]'>
    //       <p class='font-poppins font-bold text-[29px] text-[#1A1363] -ml-[150px]'>Sign-in</p>
    //       <div class=' grid grid-cols-1'>
    //         <label class='font-poppins font-bold text-[19px] text-[#1A1363] mt-[20px] -ml-[190px]'>Email*</label>
    //         <input class='w-[200px] mt-[2px] rounded-md h-[30px] border border-[#1A1363] border-2'></input>
    //         <label class='font-poppins font-bold text-[19px] text-[#1A1363] -ml-[155px] mt-[10px]'>Password*</label>
    //         <input class='w-[200px] rounded-md mt-[2px] h-[30px] border border-[#1A1363] border-2'></input>
    //         <div class='flex mt-[25px]'>
    //           <input type='checkbox'></input>
    //           <p class='font-poppins font-normal text-[11px] text-[#1A1363]'>Remember me</p>
    //           <p class='font-poppins font-normal text-[13px] text-[#1A1363] ml-[20px]'>Forgot Password?</p>
    //         </div>
    //         <button class='bg-[#1A1363] w-[200px] h-[32px] rounded-xl text-[white] font-bold text-[15px] mt-[28px]'>Login</button>
    //       </div>

    //     </div>
    //     <img src={img}></img>
    //   </div> */}


    //   <div className='flex flex-col sm:flex-row justify-center items-center'>
    //   <div className='font-bold text-lg flex flex-col gap-4 order-2 sm:order-1 sm:w-1/2'>
    //   <h2 className=' font-bold text-3xl text-[#1A1363] '>Sign-in</h2>
    //     <div className='grid'>
    //       <label className='text-[#1A1363] '>Email*</label>
    //       <input type='email' className='rounded-xl h-8 border-[#1A1363] border-2'/>
    //     </div>
    //     <div className='grid'>
    //       <label className='text-[#1A1363]'>Password*</label>
    //       <input type='password' className='rounded-xl h-8 border-[#1A1363] border-2'/>
    //     </div>
    //     <div className='flex justify-between'>
    //       <div className='flex items-center gap-2'>
    //         <input type='checkbox'/>
    //         <p className='text-sm text-[#1A1363]'>Remember me</p>
    //       </div>
    //       <p className=' text-sm text-[#1A1363] ml-[20px]'>Forgot Password?</p>
    //     </div>
    //     <button class='bg-[#1A1363] rounded-xl text-[white] font-bold py-2'>Login</button>
    //   </div>

    //   <div className='order-1'>
    //   <img src={img}/>
    //   </div>
    //   </div>
    // </div>
    <div className="bg-[#ECE9E9] h-[400px] flex w-full min-h-screen p-10 justify-center items-center">
      <div className="w-[400px] bg-[#ECE9E9] p-8 rounded-lg shadow-lg ">
        <p className="font-poppins font-bold text-[29px] text-[#1A1363] text-center mb-6">Sign-in</p>
        <div className="grid grid-cols-1 gap-4">
          
          <div>
            <label className="font-poppins font-bold text-[17px] text-[#1A1363]">Email*</label>
            <input className="w-full mt-1 rounded-md h-[35px] border border-[#1A1363] p-2" type="email" />
          </div>
          
          <div>
            <label className="font-poppins font-bold text-[17px] text-[#1A1363]">Password*</label>
            <input className="w-full mt-1 rounded-md h-[35px] border border-[#1A1363] p-2" type="password" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-poppins font-normal text-[11px] text-[#92919e]">Remember me</span>
            </label>
            <a href="#" className="font-poppins font-normal text-[13px] text-[#1A1363]">Forgot Password?</a>
          </div>
          <button className="bg-[#1A1363] w-full h-[40px] rounded-xl text-white font-bold text-[15px] mt-4">Login</button>
        </div>
      </div>
      <div className="ml-10">
        <img src={img} alt="Main Logo" className="w-[300px] h-auto" />
      </div>
    </div>
  )
}

export default Login
