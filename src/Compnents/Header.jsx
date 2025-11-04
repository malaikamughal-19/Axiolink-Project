import React from 'react'
import headerimg from '../assets/finlheader.png'

function Header() {
  return (
    <>
      <div>
        <img className='object-cover width-100' src={headerimg} alt="Header-img" />
        <h1 className='absolute inset-0 text-white text-5xl font-bold r-2 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] mt-80 ml-30 '>Where Elegance Meets Essence.</h1>
        <p className='absolute inset-0 text-white text-3xl r-2 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] mt-100 ml-30'>  Discover timeless fragrances crafted to leave a lasting impression — a
          symphony of sophistication in every note.</p>
        <button className='bg-white rounded-4xl w-45 h-15 absolute inset-0 mt-125 ml-30 text-[rgb(100,94,71)] hover:bg-[rgb(62,57,49)] hover:border-white hover:border-2 hover:text-white'> 
            About Us
        </button>  
      </div>
    </>
  )
}

export default Header
