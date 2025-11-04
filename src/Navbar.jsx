import React from 'react'
import logo from "./assets/Zaires.png";
import { CiUser } from "react-icons/ci";



function Navbar() {
  return (
    <>
    <div className="bg-[rgb(100,94,71)] h-20 w-full flex align-center justify-between  ">
      <div>
          <img
            className="absolute inset-0 size-35  w-auto -mt-5 "
            src={logo}
            alt="Logo"
          />
        </div>
        <div className='text-white flex justify-around content-center mt-10 text-xl mr-25 gap-15  '>
           <a href="#">Home</a>
            <a href="#">About us</a>
           <a href="#">Testinoamials</a>
           <a href="#">Contact</a>
           <CiUser className='size-6'/>
        </div>
    </div>
    </>
  )
}

export default Navbar