import React from 'react'
// import './SideBar.css'
import 'tailwindcss/tailwind.css'
import { Link } from 'react-router-dom';
import img from './img/PersonCircle.png';  
import dash from './img/dashbord.png';
import admin from './img/admin.png';
import register from './img/registration.png';
import plan from './img/plan.png';
import invent from './img/inventory.png';
import member from './img/members.png';
import coach from './img/coach.png';
import report from './img/report.png';
import log from './img/logout.png';
import pay from './img/CreditCard2Back.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItem=[
    {
      path:"",
      name:'Dashboard',
      img:dash
    },
    {
      path:"/admin",
      name:'Admin Profile',
      img:admin
    },
    {
      path:"/register",
      name:'Registration',
      img:register
    },
    {
      path:"/plan",
      name:'Plan',
      img:plan
    },
    {
      path:"/payment",
      name:'Payment',
      img: pay
    },
    {
      path:"/equipment",
      name:'Inventory',
      img:invent
    },
    {
      path:"/members",
      name:'View Members',
      img:member
    },
    {
      path:"/coach",
      name:'Coaches',
      img:coach
    },
    {
      path:"/sales",
      name:'Report',
      img:report
    },
  ]
  return (
    <>
      {/* <div className='w-[250px] h-[750px] bg-[#1A1363] w-52 h-screen'> */}
      {/* <i class="fa-solid fa-bars" style={{color:'white', marginLeft:'225px', fontSize:'20px'}}></i> */}
      <div className={`inset-y-0 left-0 w-64 bg-[#1A1363] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:translate-x-0 z-30 pb-[20px]`}>
        <div className=' h-[180px] pt-[40px] w-[250]'>
          <img src={img} className=' ml-[100px]'></img>
          <p className='font-
          Poppins font-bold text-white leading-5 mt-[10px]'>Administrator Name</p>
          <p className='font-
          Poppins font-normal text-white text-[10px]'>juan.delacruz@gmail.com</p>
        </div>
        <div class='pl-[50px]'>
          {
            menuItem.map((item,index)=>(
              <Link to={item.path} key={index} class='flex mb-[10px] h-[40px] hover:bg-[#ECE9E9] rounded-tl-lg rounded-bl-lg hover:text-[#1A1363]'>
              <div><img src={item.img} alt={item.name} class=' w-[20px] mt-[10px]'/></div>
              <div class='font-
              Poppins font-normal text-[14px] text-white hover:text-[#1A1363]  mt-[10px] w-[160px] ml-[25px] text-left'>{item.name}</div>
              </Link>
            ))
          }
        </div>
        <div class='h-[20px] flex mt-[65px] pl-[50px]'>
          <img src={log} class='w-[13px]'></img>
          <div class='font-
            Poppins font-normal text-[14px] text-white text-left ml-[20px]'>Logout</div>
        </div>
        {/* <main>{children}</main> */}
      </div>
      <button onClick={toggleSidebar} className="md:hidden fixed top-4 left-4 z-40 p-2 bg-[#1A1363] text-white">
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  )
}

export default SideBar
