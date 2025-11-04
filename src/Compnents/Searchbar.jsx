import React from 'react'

function Searchbar() {
  return (
    <>
      <div>
        <input className='w-170 border-black border-1 rounded-xl ml-35 h-12 mt-6 text-2xl p-5' type="text" placeholder='Search your Products' />
        <button className='w-80 border-1  bg-[rgb(62,57,49)] text-[rgb(252,248,237)] rounded-xl text-2xl ml-8 h-12 hover:scale-102 hover:cursor-pointer '>Products</button>
      </div>
    </>
  )
}

export default Searchbar
