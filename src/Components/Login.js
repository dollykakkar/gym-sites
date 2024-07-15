import React from 'react'
import img from './img/Main Logo.png'
const Login = () => {
  return (
    <div class='bg-[#ECE9E9] h-[400px] flex'>
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
    </div>
  )
}

export default Login
