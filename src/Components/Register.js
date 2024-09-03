import React from 'react';
import img from './img/Main Logo.png';

const Register = () => {
  return (
    <div className="bg-[#ECE9E9] h-[400px] flex w-full min-h-screen p-10 justify-center items-center">
      <div className="w-[400px] bg-[#ECE9E9] p-8 rounded-lg shadow-lg ">
        <p className="font-poppins font-bold text-[29px] text-[#1A1363] text-center mb-6">Sign-up</p>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="font-poppins font-bold text-[17px] text-[#1A1363]">Username*</label>
            <input className="w-full mt-1 rounded-md h-[35px] border border-[#1A1363] p-2" type="text" />
          </div>
          <div>
            <label className="font-poppins font-bold text-[17px] text-[#1A1363]">Email*</label>
            <input className="w-full mt-1 rounded-md h-[35px] border border-[#1A1363] p-2" type="email" />
          </div>
          <div>
            <label className="font-poppins font-bold text-[17px] text-[#1A1363]">Create Password*</label>
            <input className="w-full mt-1 rounded-md h-[35px] border border-[#1A1363] p-2" type="password" />
          </div>
          <div>
            <label className="font-poppins font-bold text-[17px] text-[#1A1363]">Re-type Password*</label>
            <input className="w-full mt-1 rounded-md h-[35px] border border-[#1A1363] p-2" type="password" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-poppins font-normal text-[11px] text-[#84848b]">Accept all the terms & conditions</span>
            </label>
            
          </div>
          <button className="bg-[#1A1363] w-full h-[40px] rounded-xl text-white font-bold text-[15px] mt-4">Register</button>
        </div>
      </div>
      <div className="ml-10">
        <img src={img} alt="Main Logo" className="w-[300px] h-auto" />
      </div>
    </div>
  );
}

export default Register;
