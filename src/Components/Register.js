import React, { useState } from 'react'
import img from './img/Main Logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SideBar from './SideBar';

const Register = () => {
  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    cnfPasword: " "
  })
  const { username, email, password, cnfPassword } = userData;

  const sendData = async (event) => {
    event.preventDefault()
    if (username.length < 3) {
      toast.error("Name length is too short")
      return true
    }
    if (password.length < 6) {
      toast.error("password length should be 6 atleast")
      return true
    }
    if (password != cnfPassword) {
      toast.error("Confirm that you have Entered the same password in both fields")
      return true
    }
    try {
      const res = await axios.post("http://localhost:5000/signup", userData)
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
    <div class='bg-[#ECE9E9] h-[400px] flex'>
      <div class='w-[250px]  bg-[#ECE9E9] ml-[110px] mt-[40px]'>
        <p class='font-poppins font-bold text-[29px] text-[#1A1363]'>Sign-up</p>
        <form onSubmit={sendData} class=' grid grid-cols-1'>
          <label class='font-poppins font-bold text-[17px] text-[#1A1363] '>Username*</label>
          <input
            onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }}
            name='username'
            class='w-[200px] mt-[2px] rounded-md h-[25px] border-[#1A1363] border-2' 
            type='text' required
            />
          <label class='font-poppins font-bold text-[17px] text-[#1A1363]'>Email*</label>
          <input
            name='email'
            onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
            class='w-[200px] mt-[2px] rounded-md h-[25px]  border-[#1A1363] border-2'
            type='email' required
            />
          <label class='font-poppins font-bold text-[17px] text-[#1A1363]'>Create Password*</label>
          <input
            name="password"
            onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
            class='w-[200px] mt-[2px] rounded-md h-[25px]  border-[rgb(26,19,99)] border-2'
            type='password' required/>
          <label class='font-poppins font-bold text-[17px] text-[#1A1363] '>Re-type Password*</label>
          <input
            name='cnfpassword'
            onChange={(e) => { setUserData({ ...userData, cnfPassword: e.target.value })}}
            class='w-[200px] rounded-md mt-[2px] h-[25px]  border-[#1A1363] border-2'
            type='password' required
            />
          <div class='flex mt-[5px]'>
            <input type='checkbox'></input>
            <p class='font-poppins font-normal text-[11px] text-[#1A1363]'>Remember me</p>
            <p class='font-poppins font-normal text-[13px] text-[#1A1363] ml-[20px]'>Forgot Password?</p>
          </div>
          <button type='submit' class='bg-[#1A1363] w-[200px] h-[32px] rounded-xl text-[white] font-bold text-[15px] mt-[10px]'>Register</button>
        </form>

      </div>
      <img src={img}></img>
      <ToastContainer />
    </div>
    </>
  )
}

export default Register
