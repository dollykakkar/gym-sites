import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logoWhite.png";
import gymImg from "../Img/gym-img.png";
import secondSecImg from "../Img/second_sec.png";
import thirdsecBgimg from "../Img/third_sec_bg.png";
import thirdsecPerson from "../Img/third_sec_person.png";
import fourthSecVecter from "../Img/Vector_2.png";
import fourthSecVecter2 from "../Img/Vector_3.png";
import logobgyellow from "../Img/logoYellow.png";
import coach from "../Img/Ellipse 16.png";
import coach2 from "../Img/Ellipse 18.png";
import lastSecBgImg from '../Img/lastsecBgIMG.png'
import map from '../Img/map.png'
import progress1 from '../Img/progress1.png'
import progress2 from '../Img/progress2.png'
import progress3 from '../Img/progress3.png'
import { navbar } from "./naviteam";



export const Homepage = () => {
    const navItem = [
        "About",
        "Why join us?",
        "Plan",
        "Coaches",
        "Visit our Gym",
        "Register",
    ];

    const [nav, setNav] = useState(false)
    const navOpen = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full h-screen z-10">
            {/* NAVBAR */}
            <div className="w-full  flex justify-between px-8 items-center relative bg-[#ffffff] text-[#1A1363]">
                <div className="h-[76px] flex">
                    <img src={logo} className="h-[100%]" />
                    <h1 className="text-2xl font-semibold hidden lg:inline-block">
                        STAMINA
                        <br />
                        FITNESS
                    </h1>
                </div>

                <div className="md:hidden relative" onClick={navOpen}>
                    {!nav?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-xmark"></i>}
                </div>
                <div className={` ${!nav ? " hidden md:flex gap-2" : "flex flex-col w-2/3 gap-6 absolute top-full right-2 p-4 rounded-b-xl bg-white"}`}>

                    {navbar.map((item, index) => {
                        return (
                            <Link
                                className="py-3 px-6 text-[1.2vmax] font-bold rounded-[30px] hover:bg-[#FDEE21] focus:bg-[#FDEE21]"
                                to={`${item.path}`} onClick={()=>setNav(false)}
                                key={index}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                </div>
            </div>
            {/* First Section */}
            <div
                className="w-full flex flex-col md:flex-row justify-center items-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${gymImg})` }}
            >
                <div className="order-2 w-80 pb-10 flex flex-col items-start">
                    <div className=" mb-7 text-left">
                        <h3 className="text-5xl text-white font-semibold">
                            Start a better shape of you!
                            <span className="text-[#FFFF7D]"> Come Join Us! </span>
                        </h3>
                    </div>
                    <Link className="px-6 py-3 text-lg font-bold bg-[#FFFADF] hover:bg-[#f3e595] rounded-[30px]">
                        Learn More
                    </Link>
                </div>
                <div className="order-1 md:order-2 w-96">
                    <img src={secondSecImg} className="" />
                </div>
            </div>

            {/* Third section 
                What We Offer */}

            <div className="w-full relative md:h-[710px] bg-no-repeat bg-right-bottom bg-gradient-to-r mix-blend-color from-[#1A1363] via-[#1A1363] to-[#1a13637a] shadow-2xl">
                <div className="flex flex-col items-center text-white">
                    <span className="text-lg">About</span>
                    <span className="text-[4vmax] md:text-[3vmax] text-center tracking-widest font-bold">
                        STAMINA GYM FOR MAN & WOMAN
                    </span>
                </div>
                <div className="w-full flex">
                    <div className="hidden md:inline-block w-80 place-self-end">
                        <img src={thirdsecPerson} />
                    </div>
                    <div className="flex flex-col mt-6 justify-center md:justify-start items-center md:items-start">
                        <h3 className="text-sm xs:text-lg xs:text-wrap md:w-96 text-[#FFFF7D] text-center  md:text-left px-6 md:px-0 font-semibold">
                            Stamina Gym Fitness Center provides proper training and
                            conditioning for members who want to improve and transform their
                            body with Program depend on the body composition.
                        </h3>
                        <h3 className="text-[2.7vmax] font-semibold text-white my-6">
                            What we offer:
                        </h3>
                        <div className="text-[#1A1363] flex gap-[1vmax] md:gap-[3vmax] pb-6">
                            <div className="w-[12vmax] h-[12vmax]  xs:w-[14vmax] xs:h-[14vmax] rounded-3xl outline outline-[#1A1363] outline-4 md:outline-8 -outline-offset-[10px] md:-outline-offset-[15px] border-2 border-[#1A1363]  bg-white flex justify-center items-center">
                                <h1 className="text-[3vmax] xs:text-[4vmax] font-bold">
                                    &nbsp;24
                                    <br />
                                    /7 <span className="text-[2vmax] font-semibold">chat</span>
                                </h1>
                            </div>
                            <div className="w-[12vmax] h-[12vmax]  xs:w-[14vmax] xs:h-[14vmax] rounded-3xl outline outline-[#1A1363] outline-4 md:outline-8 -outline-offset-[10px] md:-outline-offset-[15px] border-2 border-[#1A1363]  bg-white flex justify-center items-center">
                                <h1 className=" text-center text-[2vmax] xs:text-[2.7vmax] font-bold">
                                    1 on 1<br /> coching
                                </h1>
                            </div>
                            <div className="w-[12vmax] h-[12vmax]  xs:w-[14vmax] xs:h-[14vmax] rounded-3xl outline outline-[#1A1363] outline-4 md:outline-8 -outline-offset-[10px] md:-outline-offset-[15px] border-2 border-[#1A1363]  bg-white flex flex-col justify-center px-7">
                                <span className="border-[1vmax] rounded-full w-[5vmax] h-[5vmax] flex justify-center items-center border-[#1A1363] place-self-end">
                                    <i class="fa-solid fa-heart text-[1.5vmax]"></i>
                                </span>
                                <h3 className="text-wrap text-[1vmax] xs:text-[1.4vmax] font-semibold">
                                    Nutrition <br />
                                    Plan <br /> Guide
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:inline-block absolute place-self-end w-96 right-0 bottom-0 -z-10 ">
                        <img src={thirdsecBgimg} className=" opacity-30" />
                    </div>
                </div>
            </div>

            {/* 
                fourth section 
                join our membership

            */}

            <div className="w-full grid p-[6vmax] items-center gap-10 bg-[#ECE9E9] relative">
                <img src={fourthSecVecter} className="absolute z-0" />
                <img src={fourthSecVecter2} className=" hidden lg:inline-block absolute top-56 left-40 z-0" />
                <h2 className="text-[4vmax]  place-self-center text-center font-bold lg:place-self-end">JOIN OUR MEMBERSHIP</h2>
                <h2 className="text-[4vmax] hidden lg:block z-10">
                    Our <span className="lg:text-white">Plan</span>
                </h2>
                <div className="grid grid-cols-2 gap-3  lg:grid-cols-5 text-lg xs:text-xl text-white ">
                    <div className="w-32 h-36 xs:w-48 xs:h-56 rounded-3xl border-4 xs:border-8 place-self-center border-[#1A1363] bg-white text-[#1a1363] flex flex-col justify-center items-center text-center relative z-10 gap-2">
                        <i class="fa-solid fa-chess-pawn text-5xl xs:text-[80px]"></i>
                        <h3 className="font-semibold">
                            Annual
                            <br />
                            Membership
                        </h3>
                    </div>
                    <div className="w-32 h-36 xs:w-48 xs:h-56 rounded-3xl border-4 xs:border-8 place-self-center border-white  bg-[#3E3E3E] relative flex flex-col justify-center items-center gap-4 lg:top-8">
                        <i class="fa-solid fa-chess-knight text-3xl xs:text-5xl absolute top-[9%] right-[9%]"></i>
                        <h3 className="text-4xl xs:text-5xl font-semibold xs:leading-tight">
                            7<br />
                            Days
                        </h3>
                        <span className="font-semibold -m-3">Weekly Rate</span>
                    </div>
                    <div className="w-32 h-36 xs:w-48 xs:h-56 rounded-3xl border-4 xs:border-8 place-self-center border-white bg-[#77749B] flex flex-col justify-center items-center gap-4 relative">
                        <i class="fa-solid fa-chess-bishop text-5xl absolute top-[9%] right-[9%]"></i>
                        <h3 className="font-semibold text-4xl xs:text-5xl xs:leading-tight ">
                            1<br />
                            Month
                        </h3>
                        <span className="font-semibold -m-3">Monthly Rate</span>
                    </div>
                    <div className="w-32 h-36 xs:w-48 xs:h-56 rounded-3xl border-4 xs:border-8 place-self-center border-white bg-[#332F64] flex flex-col justify-center items-center gap-4 relative lg:top-8">
                        <i class="fa-solid fa-chess-king text-5xl absolute top-[9%] right-[9%]"></i>
                        <h3 className="font-semibold text-4xl xs:text-5xl leading-tight">
                            6<br />
                            Month
                        </h3>
                        <span className="font-semibold -m-3 ">Biannual Rate</span>
                    </div>
                    <div className="w-32 h-36 xs:w-48 xs:h-56 rounded-3xl col-span-2 place-self-center lg:col-span-1 border-4 xs:border-8 border-white bg-[#1A1363] flex flex-col justify-center items-center relative gap-4">
                        <i class="fa-solid fa-chess-queen text-5xl absolute  top-[9%] right-[9%]"></i>
                        <h3 className="font-semibold text-4xl xs:text-5xl leading-tight">
                            1<br />
                            Year
                        </h3>
                        <span className="font-semibold -m-3">Annual Rate</span>
                    </div>
                </div>
            </div>

            {/* 
                fifth section Coaches
            */}

            <div
                className="w-full relative z-10 text-center py-10 bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 19, 99, 0.6), rgba(221, 219, 239, 0.5)), url(${logobgyellow})`,
                }}
            >
                <div className=" text-[4vmax] font-semibold text-white">COACHES</div>
                <div className=" w-full flex flex-col md:flex-row items-center gap-[14vmax] justify-around pt-24 p-8">
                    <div className="h-[30vmax] w-[30vmax] md:h-[26vmax] md:w-[24vmax] relative rounded-2xl bg-[#B8B3EC] pt-20">
                        <div className="w-[12vmax] h-[12vmax] md:w-[10vmax] md:h-[10vmax]  rounded-full absolute -top-[6vmax] left-[9vmax] md:-top-[5vmax] md:left-[7vmax] bg-white ">
                            <img src={coach} className="h-full" />
                        </div>
                        <div className="text-[1.6vmax] font-semibold text-[#1A1363]">
                            Coach John
                        </div>
                    </div>
                    <div className="h-[30vmax] w-[30vmax] md:h-[26vmax] md:w-[24vmax] relative rounded-2xl bg-[#B8B3EC] pt-20">
                        <div className="w-[12vmax] h-[12vmax] md:w-[10vmax] md:h-[10vmax]    rounded-full absolute -top-[6vmax] left-[9vmax] md:-top-[5vmax] md:left-[7vmax] bg-white ">
                            <img src={coach2} className="h-full" />
                        </div>
                        <div className="text-[1.6vmax] font-semibold text-[#1A1363]">
                            Coach Martell
                        </div>
                    </div>
                    <div className="h-[30vmax] w-[30vmax] md:h-[26vmax] md:w-[24vmax] relative rounded-2xl bg-[#B8B3EC] pt-20">
                        <div className="w-[12vmax] h-[12vmax] md:w-[10vmax] md:h-[10vmax]   rounded-full absolute -top-[6vmax] left-[9vmax] md:-top-[5vmax] md:left-[7vmax] bg-white ">
                            <img src={coach} className="h-full" />
                        </div>
                        <div className="text-[1.6vmax] font-semibold text-[#1A1363]">
                            Coach Ansel
                        </div>
                    </div>
                </div>
            </div>

            {/* 
                Last Section 
            */}

            <div className="w-full p-6" style={{ backgroundImage: `url(${lastSecBgImg})` }}>
                <div className="flex items-center justify-center">
                    <div className="hidden md:inline-block">
                        <img src={map} />
                    </div>
                    <div>
                        <div className="text-[#1a1363] text-4xl text-wrap font-semibold text-center ">
                            VISIT OUR GYM
                        </div>
                        <div className="p-6 bg-[#3E3E3E] flex flex-col items-center  text-xl font-semibold leading-loose text-white rounded-xl md:rounded-none md:rounded-tr-3xl">
                            <div>
                                <span className="text-[#FFFF7D]">Address: </span><span>12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY</span>
                            </div>
                            <div>
                                <span className="text-[#FFFF7D]">Email: </span><span>Martell008@yahoo.com</span>
                            </div>
                            <div>
                                <span className="text-[#FFFF7D]">Contact Number: </span><span>09260417050</span>
                            </div>
                            <div className="text-[#D3CFFF] text-3xl mt-6">
                                OUR SOCIALS:
                            </div>
                            <div className="flex gap-2 text-3xl mt-4">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-facebook-messenger"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <Link className="px-6 py-2 bg-white md:hidden text-[#1a1363] rounded-3xl mt-6">See Our Location</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full p-10 mt-10 bg-[#3E3E3EB2] flex justify-center items-center">
                    <div>
                        <div className="text-4xl  font-semibold text-white text-center pb-6">REGISTER</div>
                        <div className="w-full bg-white p-8 rounded-2xl leading-relaxed text-lg font-bold flex flex-col gap-3">
                            <label htmlFor="name">First Name</label>
                            <div><input type="text" name="name" className="bg-[#BCBCBC] rounded-xl" /></div>


                            <label htmlFor="lname">Last Name</label>
                            <div>
                                <input type="text" name="lname" className="bg-[#BCBCBC]  rounded-xl" />
                            </div>
                            <label htmlFor="email">Email</label>
                            <div>
                                <input type="email" name="email" className="bg-[#BCBCBC] rounded-xl" />
                            </div>
                            <label htmlFor="phone">Phone No.</label>
                            <div>
                                <input type="tel" name="phone" className="bg-[#BCBCBC] rounded-xl" />
                            </div>
                        </div>
                        <div className="flex justify-around mt-6">
                            <Link className="bg-[#DEBA3B] hover:bg-[#f3e595]  py-2 px-6 rounded-3xl">Submit</Link>
                            <Link className="bg-[#FFFADF] hover:bg-[#f3e595]  py-2 px-6 rounded-3xl">Clear Enteries</Link>
                        </div>
                    </div>

                    <div className="hidden lg:inline-block">
                        <div className="text-[#DEBA3B] text-3xl font-semibold mt-6 pl-6">Customer’s Progress </div>
                        <div className="flex h-64">
                            <img src={progress2} />
                            <img src={progress3} />
                            <img src={progress1} />
                        </div>
                    </div>
                </div>
            </div>

            {/* 
                Footer section
            */}

            <div className="w-full p-10 bg-white flex  text-lg  gap-[14vmax]">
                <div className="flex flex-col gap-1 ">
                    <h2 className="text-2xl font-semibold ">GYM</h2>
                    <Link>Why Join Us</Link>
                    <Link>About</Link>
                    <Link>Plan</Link>
                    <Link>Coaches</Link>
                    <Link>Inquiry</Link>
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">MEMBERS</h2>
                    <Link>FAQs</Link>
                    <Link>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};
