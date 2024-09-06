import React, { useState } from "react";
import img2 from "./img/img2png.png";
import axios from "axios";
import { toast } from "react-toastify";
import SideBar from "./SideBar";
const Registration = () => {
  const [memberData, setMemberData] = useState({
    name: "",
    date: "",
    email: "",
    phoneno: "",
    plan: "",
    price: "",
  });

  const submitData = async (event) => { 
    event.preventDefault();
    console.log(memberData);
    
    const {name,date,email,phoneno,plan,price}=memberData
    if (phoneno.length<10){
      toast.error("Invalid contact Number");
      return true
    }
try {
  const res = await axios.post("http://localhost:5000/addmember", memberData)
  console.log(res);
  
  toast(res.data);
} catch (error) {
  console.log(error);
  
  toast.error("Something went Wrong");
} 
  };
  return (
    <>
    <SideBar/>
    <div className="w-full p-2 px-10 min-h-screen bg-[#ECE9E9] grid content-start gap-6">
      <div className=" w-full h-[76px] flex justify-center lg:justify-between text-[#1a1363]">
        <div className="flex items-center">
          <img src={img2} className="h-[100%]" />
          <h1 className="hidden  lg:block text-lg leading-none font-semibold">
            STAMINA
            <br />
            FITNESS
          </h1>
        </div>
        <div className="hidden lg:flex gap-2 items-center pr-2 ">
          <span>Feedback</span>
          <span>
            <i class="fa-solid fa-bell"></i>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pl-2">
        <div class="text-[#DEBA3B] text-3xl font-bold">Become a Member</div>
        <div class="text-[#1A1363] text-4xl font-bold ">Register</div>
        <form
          onSubmit={submitData}
          className="p-6 bg-white rounded-2xl flex flex-col gap-4"
        >
          <div className=" grid md:grid-cols-2 gap-4 text-md font-bold">
            <div className="flex flex-col">
              <label>Name of Participant</label>
              <input
                onChange={(e)=>{setMemberData({...memberData,name:e.target.value})}}
                required
                type="text"
                className="bg-[#E9E9E9] rounded-xl h-8" />
            </div>
            <div className="flex flex-col">
              <label>Date of Join</label>
              <input
                onChange={(e)=>{setMemberData({...memberData,date:e.target.value})}}
                required
                type="date"
                className="bg-[#E9E9E9] w-full rounded-xl h-8"
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                onChange={(e)=>{setMemberData({...memberData,email:e.target.value})}}
                required
                type="email"
                className="bg-[#E9E9E9] rounded-xl h-8" />
            </div>
            <div className="flex flex-col">
              <label>Contact No.</label>
              <input
                onChange={(e)=>{setMemberData({...memberData,phoneno:e.target.value})}}
                required
                type="number"
                className="bg-[#E9E9E9] rounded-xl w-full border-none h-8"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label>plan</label>
                <input
                  onChange={(e)=>{setMemberData({...memberData,plan:e.target.value})}}
                  required
                  type="text"
                  className="bg-[#E9E9E9] rounded-xl w-full border-none h-8"
                />
              </div>
              <div className="flex flex-col">
                <label>price</label>
                <input
                  onChange={(e)=>{setMemberData({...memberData,price:e.target.value})}}
                  required
                  type="number"
                  className="bg-[#E9E9E9] rounded-xl w-full border-none h-8"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-8">
            <button
              type="submit"
              class=" bg-[#1A1363] text-white rounded-xl px-6 py-1"
            >
              Avail Membership
            </button>
            <button class="text-[#1A1363] rounded-xl border-2 border-[#1A1363] px-6 py-1">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Registration;
