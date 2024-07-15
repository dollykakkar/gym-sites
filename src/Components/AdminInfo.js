import React from 'react'
import SideBar from './SideBar'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import img from './img/PersonCircle (1).png'
import update from './img/PencilSquare.png'
const AdminInfo = () => {
  return (
    <div>
       <div className='h-[750px] w-[580px] bg-[#ECE9E9] ml-[250px] -mt-[750px]'>
            <div class='w-[580px] h-[100px] bg-[#ECE9E9] flex mt-[20px]'>
                <div class='flex w-[152px]  ml-[40px] pr-[10px]'>
                    <img src={img2}></img>
                    <div class=' font-medium text-[20px] text-[#1A1363] font-Poppins leading-6 mt-[22px]'>STAMINA FITNESS</div>
                </div>
                <div class='flex ml-[272px] mt-[35px]'>
                    <p class='mr-[25px] text-[14px] font-Poppins'>Feedback</p>
                    <img src={notifi} class='w-[20px] h-[20px]'></img>
                </div>
            </div>
            <div class='text-[#1A1363] font-poppins text-[32px] font-bold tracking-normal -ml-[230px] mt-[10px]'>Admin Information</div>

            <div class='w-[220px] h-[270px] bg-white absolute rounded-2xl shadow-lg ml-[25px] '>
                <img src={img} class='w-[60px] h-[60px] ml-[75px] mt-[20px]'></img>
                <div class='flex pl-[55px]'>
                    <img src={update} class='mt-[7px]'></img>
                    <p class='font-normal text-[13px] ml-[10px] mt-[7px]'>Update Profile</p>
                </div>
                <div class='grid grid-cols-2'>
                    <p class='font-popping font-normal text-[13px] mt-[20px]'>Username</p>
                    <p class='font-popping font-normal text-[13px] mt-[20px]'>JuanDelaCruz</p>
                    <p class='font-popping font-normal text-[13px] mt-[13px]'>Contact no.</p>
                    <p class='font-popping font-normal text-[13px] mt-[13px]'>09123456789</p>
                </div>
                    <p class='font-popping font-normal text-[13px] mt-[16px] -ml-[90px]'>Email Address:</p>
                    <p class='font-popping font-normal text-[13px] -ml-[30px] mt-[2px]'>juan.delacruz@gmail.com</p>
            </div>
            <div class='w-[270px] h-[250px] bg-white rounded-2xl shadow-lg absolute left-[500px] pt-[13px]'>
                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[150px]'>Username</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[140px]'>Contact No.</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left ml-[25px] mr-[139px]'>Email Address</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <button class='w-[70px] h-[25px] bg-[#1A1363] text-white rounded-lg font-normal ml-[70px] '>Save</button>
                <button class='w-[70px] h-[25px] text-[#1A1363] rounded-lg border-2 border-[#1A1363] font-normal ml-[10px] mt-[30px]'>Cancel</button>
            </div>
            <div class='w-[270px] h-[250px] bg-white rounded-2xl shadow-lg absolute top-[420px] left-[500px]'>
                <div class='font-poppins text-[15px] font-bold text-[#1A1363] mt-[10px]'>Register</div>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[80px]'>Current Password</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px] ml-[19px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[90px]'>New Password</label>
                
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]  ml-[19px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left ml-[25px] mr-[90px]'>Re-type Password</label>

                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]  ml-[19px]'></input>

                <button class='w-[70px] h-[25px] bg-[#1A1363] text-white rounded-lg font-normal ml-[70px]  mt-[15px]'>Change</button>
                <button class='w-[70px] h-[25px] text-[#1A1363] rounded-lg border-2 border-[#1A1363] font-nprmal ml-[10px] '>Clear</button>
            </div>
            <div class='bg-[#1A1363] w-[230px] h-[20px] absolute top-[450px] text-white text-[14px] font-bold ml-[15px] rounded-lg'>Register New Admin Account</div>
       </div>
    </div>
  );
};
export default AdminInfo
