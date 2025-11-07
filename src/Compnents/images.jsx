import React from 'react'
import comp from '../assets/compimg1.webp'
import comp2 from '../assets/compimg2.webp'
import comp3 from '../assets/compimg3.avif'
import { useEffect } from 'react';


function Images() {
    useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
       else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('img').forEach(img => observer.observe(img));

  return () => observer.disconnect();
}, []);
  return (
    <>
      <div className='bg-amber-50 mt-20 grid grid-cols-2'>
        <img className='ml-190 mb-10 w-110 h-130 opacity-0 translate-x-[-100px] transition-all duration-700 ease-out [&.show]:opacity-100 [&.show]:translate-x-0' src={comp} alt="" />
        <img className='w-50 h-60 rounded-2xl mt-70 opacity-0 translate-x-[100px] transition-all duration-700 ease-out delay-200 [&.show]:opacity-100 [&.show]:translate-x-0 ' src={comp2}  alt="" />
        <img className='ml-270 absolute opacity-0 translate-y-[50px] transition-all duration-700 ease-out delay-400 [&.show]:opacity-100 [&.show]:translate-y-0' src={comp3} alt="" />
      </div>
    </>
  )
}

export default Images
