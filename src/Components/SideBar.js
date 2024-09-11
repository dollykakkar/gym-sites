import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./img/PersonCircle.png";
import { useState } from "react";


const SideBar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    toggleSidebar();
    localStorage.removeItem('token');
    navigate("/login")
  }
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
              class="w-full hover:bg-[#ECE9E9] text-xl  hover:text-[#1A1363] focus:text-[#1a1363]  focus:bg-[#ECE9E9] a text-white flex p-2 lg:pl-6 rounded-l-3xl gap-3"
              onClick={toggleSidebar}
            >

              <span>{item.img}</span>
              <span>{item.name}</span>

            </Link>
          ))}
        </div>

        <Link to='/' className="w-full hover:bg-[#ECE9E9] mt-20 text-xl hover:text-[#1A1363] text-white flex  p-2 lg:pl-6 ml-6  rounded-l-3xl items-center  gap-3 " onClick={logOut}>
          <span class="fa-solid fa-right-from-bracket"></span><span>Logout</span>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
