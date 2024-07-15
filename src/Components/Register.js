import React from 'react'
import img from './img/Main Logo.png'
const Register = () => {
  return (
    <div class='bg-[#ECE9E9] h-[400px] flex'>
    <div class='w-[250px]  bg-[#ECE9E9] ml-[110px] mt-[40px]'>
        <p class='font-poppins font-bold text-[29px] text-[#1A1363] -ml-[150px]'>Sign-in</p>
        <div class=' grid grid-cols-1'>
            <label class='font-poppins font-bold text-[17px] text-[#1A1363]  -ml-[160px]'>Username*</label>
            <input class='w-[200px] mt-[2px] rounded-md h-[25px] border border-[#1A1363] border-2'></input>
            <label class='font-poppins font-bold text-[17px] text-[#1A1363]  -ml-[200px]'>Email*</label>
            <input class='w-[200px] mt-[2px] rounded-md h-[25px] border border-[#1A1363] border-2'></input>
            <label class='font-poppins font-bold text-[17px] text-[#1A1363]  -ml-[110px]'>Create Password*</label>
            <input class='w-[200px] mt-[2px] rounded-md h-[25px] border border-[#1A1363] border-2'></input>
            <label class='font-poppins font-bold text-[17px] text-[#1A1363] -ml-[100px]'>Re-type Password*</label>
            <input class='w-[200px] rounded-md mt-[2px] h-[25px] border border-[#1A1363] border-2'></input>
            <div class='flex mt-[5px]'>
                <input type='checkbox'></input>
                <p class='font-poppins font-normal text-[11px] text-[#1A1363]'>Remember me</p>
                <p class='font-poppins font-normal text-[13px] text-[#1A1363] ml-[20px]'>Forgot Password?</p>
            </div>
            <button class='bg-[#1A1363] w-[200px] h-[32px] rounded-xl text-[white] font-bold text-[15px] mt-[10px]'>Login</button>
        </div>
       
    </div>
    <img src={img}></img>
</div>
  )
}

export default Register
