import React from 'react'
import SideBar from './SideBar'
import img2 from './img/img2png.png'
import notifi from './img/notification.png'
import img from './img/PersonCircle (1).png'
import update from './img/PencilSquare.png'
const AdminInfo = () => {
    return (
        <div className='w-full p-2 min-h-screen bg-[#ECE9E9]'>

            {/* <div className='h-[750px] w-[580px] bg-[#ECE9E9] '> */}
            {/* <div class='w-[580px] h-[100px] bg-[#ECE9E9] flex mt-[20px]'>
                <div class='flex w-[152px]  ml-[40px] pr-[10px]'>
                    <img src={img2}></img>
                    <div class=' font-medium text-[20px] text-[#1A1363] font-Poppins leading-6 mt-[22px]'>STAMINA FITNESS</div>
                </div>
                <div class='flex mt-[35px]'>
                    <p class='mr-[25px] text-[14px] font-Poppins'>Feedback</p>
                    <img src={notifi} class='w-[20px] h-[20px]'></img>
                </div>
            </div> */}
            {/* <div class='text-[#1A1363] font-poppins text-[32px] font-bold tracking-normal mt-[10px]'>Admin Information</div> */}

            {/* <div class='w-[220px] h-[270px] bg-white absolute rounded-2xl shadow-lg ml-[25px] '>
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
                    <p class='font-popping font-normal text-[13px] mt-[2px]'>juan.delacruz@gmail.com</p>
            </div> */}
            {/* <div class='w-[270px] h-[250px] bg-white rounded-2xl shadow-lg absolute left-[500px] pt-[13px]'>
                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[150px]'>Username</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[140px]'>Contact No.</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left ml-[25px] mr-[139px]'>Email Address</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <button class='w-[70px] h-[25px] bg-[#1A1363] text-white rounded-lg font-normal ml-[70px] '>Save</button>
                <button class='w-[70px] h-[25px] text-[#1A1363] rounded-lg border-2 border-[#1A1363] font-normal ml-[10px] mt-[30px]'>Cancel</button>
            </div>
            <div class='w-[270px] h-[250px] bg-white rounded-2xl shadow-lg'>
                <div class='font-poppins text-[15px] font-bold text-[#1A1363] mt-[10px]'>Register</div>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left mr-[80px]'>Current Password</label>
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px] ml-[19px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left'>New Password</label>
                
                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]'></input>

                <label class='font-poppins text-[15px] font-bold text-[#2B2B2B] text-left ml-[25px]'>Re-type Password</label>

                <input class='bg-[#E9E9E9] rounded-lg w-[220px] h-[30px]  ml-[19px]'></input>

                <button class='w-[70px] h-[25px] bg-[#1A1363] text-white rounded-lg font-normal ml-[70px]  mt-[15px]'>Change</button>
                <button class='w-[70px] h-[25px] text-[#1A1363] rounded-lg border-2 border-[#1A1363] font-nprmal ml-[10px] '>Clear</button>
            </div> */}
            {/* <div class='bg-[#1A1363] w-[230px] h-[20px] absolute top-[450px] text-white text-[14px] font-bold ml-[15px] rounded-lg'>Register New Admin Account</div> */}
            {/* </div> */}


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

            <div class='text-[#1A1363] text-[3vmax] font-bold text-center mt-[10px]'>
                Admin Information
            </div>

            <div className='w-full flex flex-col gap-10 md:gap-0 md:flex-row '>

                <div className='w-full flex flex-col gap-4 lg:w-[45%] px-10'>
                    <div class=' p-8 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center gap-2'>
                        <img src={img} class='w-[60px] h-[60px]'></img>
                        <div class='flex justify-center items-center'>
                            <i class="fa-regular fa-pen-to-square"></i>
                            <p class='text-xs '>Update Profile</p>
                        </div>
                        <div className='grid grid-cols-2 gap-y-2 text-xs justify-center items-center content-center '>
                            <p className='place-self-center'>Username</p>
                            <p className='place-self-center'>JuanDelaCruz</p>
                            <p className='place-self-center'>Contact no.</p>
                            <p className='place-self-center'>09123456789</p>
                            <p className='place-self-center'>Email Address:</p>
                            <p className='place-self-center'>juan.delacruz@gmail.com</p>
                        </div>
                    </div>
                    <div className=' bg-[#1a1363] text-white flex justify-around p-1 text-sm font-bold rounded-2xl'>
                        <span>Register</span>
                        <span> New Admin </span>
                        <span>Account</span>

                    </div>
                </div>

                <div className='lg:w-[55%] w-full flex flex-col gap-4 px-10'>
                    <div class=' bg-white rounded-2xl shadow-lg font-bold p-4 flex flex-col gap-3'>
                        <div>
                            <label>Username</label>
                            <input class='bg-[#E9E9E9] rounded-xl w-full h-8'></input>
                        </div>

                        <div>
                            <label>Contact No.</label>
                            <input class='bg-[#E9E9E9] rounded-xl w-full h-8'></input>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input class='bg-[#E9E9E9] rounded-xl w-full h-8'></input>
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button class=' bg-[#1A1363] text-white rounded-lg px-4 py-1'>Save</button>
                            <button class='text-[#1A1363] rounded-lg border-2 border-[#1A1363] px-4 py-1'>Cancel</button>
                        </div>
                    </div>
                    <div class=' bg-white rounded-2xl shadow-lg font-bold p-4 flex flex-col gap-3'>
                        
                        <h2 className='text-xl text-center text-[#1a1363] font-bold'>Password</h2>
                        <div>
                            <label>Current Password</label>
                            <input class='bg-[#E9E9E9] rounded-xl w-full h-8'></input>
                        </div>
                        <div>
                            <label>New Password</label>
                            <input class='bg-[#E9E9E9] rounded-xl w-full h-8'></input>
                        </div>
                        <div>
                            <label>Re-type Password</label>
                            <input class='bg-[#E9E9E9] rounded-xl w-full h-8'></input>
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button class=' bg-[#1A1363] text-white rounded-lg px-4 py-1'>Change</button>
                            <button class='text-[#1A1363] rounded-lg border-2 border-[#1A1363] px-4 py-1'>Clear</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default AdminInfo
