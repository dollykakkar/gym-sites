import React from "react";
// import './SideBar.css'
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import img from "./img/PersonCircle.png";
import dash from "./img/dashbord.png";
import admin from "./img/admin.png";
import register from "./img/registration.png";
import plan from "./img/plan.png";
import invent from "./img/inventory.png";
import member from "./img/members.png";
import coach from "./img/coach.png";
import report from "./img/report.png";
import log from "./img/logout.png";
import pay from "./img/CreditCard2Back.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      img: <i class="fa-solid fa-table-columns"></i>,
    },
    {
      path: "/admin",
      name: "Admin Profile",
      img: <i class="fa-solid fa-house-chimney"></i>,
    },
    {
      path: "/register",
      name: "Registration",
      img: <i class="fa-solid fa-book-open"></i>,
    },
    {
      path: "/plan",
      name: "Plan",
      img: <i class="fa-solid fa-book"></i>,
    },
    {
      path: "/payment",
      name: "Payment",
      img: <i class="fa-regular fa-credit-card"></i>,
    },
    {
      path: "/equipment",
      name: "Inventory",
      img: <i class="fa-solid fa-box-archive"></i>,
    },
    {
      path: "/members",
      name: "View Members",
      img: <i class="fa-solid fa-user-group"></i>,
    },
    {
      path: "/coach",
      name: "Coaches",
      img: <i class="fa-solid fa-dumbbell"></i>,
    },
    {
      path: "/sales",
      name: "Report",
      img: <i class="fa-solid fa-book-open"></i>,
    },
  ];
  return (
    <>
      {/* <div
        className={`w-80 h-full bg-[#1A1363]  transform ${isOpen ? "hidden" : "block"
          } md:block transition-transform duration-200 ease-in-out md:translate-x-0 z-30 pb-[20px]`}
      >
        <div className="pt-[40px] flex flex-col items-center justify-center">
          <img src={img}></img>
          <p
            className="font-
          Poppins font-bold text-white leading-5 mt-[10px]"
          >
            Administrator Name
          </p>
          <p
            className="font-
          Poppins font-normal text-white text-[10px]"
          >
            juan.delacruz@gmail.com
          </p>
        </div>

        <div class="w-full flex flex-col justify-center items-center">
          {menuItem.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              class="w-full ml-10 hover:bg-[#ECE9E9]  hover:text-[#1A1363]"
            >
              <span>{item.img}</span>
              <span>{item.name}</span>

            </Link>
          ))}
        </div>
        <div class="h-[20px] flex mt-[65px] pl-[50px]">
         
          <div
            class="font-
            Poppins font-normal text-[14px] text-white text-left ml-[20px]"
          >
            <span class="fa-solid fa-right-from-bracket"></span> <span>Logout</span>

          </div>
        </div> 
      
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-40 p-2 bg-[#1A1363] text-white"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div> */}




      <span className={`absolute -left-1 opacity-25 top-6 bg-[#1a1363] w-6 h-8 text-white p-1 z-10 ${!isOpen ? 'hidden' : 'block'}`} onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></span>
      <div className={`opacity-90 lg:w-80 lg:opacity-100 min-h-screen lg:flex flex-col bg-[#1a1363] lg:relative z-10 ${!isOpen ? ' w-full absolute' : ' hidden'}`}>
        <span className={`lg:hidden absolute text-white right-2 text-xl top-2 `} onClick={toggleSidebar}>
          <i class="fa-solid fa-xmark"></i>
        </span>
        <div className="pt-[40px] hidden lg:flex flex-col gap-2 items-center justify-center">
          <img src={img} alt="admin" />
          <p
            className="font-
          Poppins font-bold text-white leading-5 mt-[10px]"
          >
            Administrator Name
          </p>
          <p
            className="font-
          Poppins font-normal text-white text-[10px]"
          >
            juan.delacruz@gmail.com
          </p>
        </div>

        <div class="w-full flex flex-col gap-2 justify-center items-center pt-10 lg:pl-6">
          {menuItem.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              class="w-full hover:bg-[#ECE9E9] text-xl  hover:text-[#1A1363] text-white flex p-2 lg:pl-6 rounded-l-3xl gap-3"
              onClick={toggleSidebar}
            >

              <span>{item.img}</span>
              <span>{item.name}</span>

            </Link>
          ))}
        </div>

        <Link to='/' className="w-full hover:bg-[#ECE9E9] text-xl hover:text-[#1A1363] text-white flex p-2 lg:pl-12 mt-10 rounded-l-3xl items-center  gap-3 " onClick={toggleSidebar}>
          <span class="fa-solid fa-right-from-bracket"></span><span>Logout</span>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
