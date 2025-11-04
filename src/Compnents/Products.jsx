import React from 'react'
import data from '../Pages/Data.json'


function Products() {
  return (
    <>
    <div className='bg-[rgb(252,248,237)] grid grid-cols-4'>
       {data.map(items=>{
        return(
          <div className='ml-15'>  
          <div className=' rounded-2xl w-65 h-100 mt-15 '>
             <img className='rounded-t-2xl size-65 object-cover' src={items.image} alt="Product-1" />
                  <h2 className='text-[rgb(62,57,49)] font-medium text-xl mt-2 text-left ml-3'>{items.name} </h2>
                  <div className='flex flex-row gap-12 '>
                      <button className='bg-[rgb(62,57,49)] text-[rgb(252,248,237)] font-light rounded-full ml-2 px-4 py-1 hover:bg-white hover:border-1 hover:border-[rgb(62,57,49)] hover:text-[rgb(62,57,49)]'>{items.status} </button>
                      <p className='font-medium text-[rgb(62,57,49)] text-xl ml-3 '>{items.price} PKR</p>
                  </div>
             {/* <p className=' font-light text-[rgb(62,57,49)] text-xl ml-3'>{items.description}</p> */}
             <button className='w-60 p-1  border-[rgb(62,57,49)] text-[rgb(62,57,49)] border-1 rounded-2xl mt-1 ml-1 hover:bg-[rgb(62,57,49)] hover:text-[rgb(252,248,237)] '>Add to Cart </button>
          </div>
        </div>  
        );
       })} 
      
    </div>  
    </>
  )
}

export default Products
