import React from 'react'
import gitg from '../assets/gitmoving.gif'

export default function FallbackMessage({message}) {
  return (
  <div className='flex justify-center mt-20'>
        <div className='flex items-center bg-white p-2 justify-center w-[48%] max-lg:w-[75%] max-md:w-[95%] rounded-full border-4 border-dashed  max-md:gap-2'>
        <div style={{backgroundImage:`url(${gitg})`}} className="bg-cover bg-center rounded-full  w-[7rem] h-[9rem] max-md:w-[6rem] max-md:h-[6rem] max-md:ml-[1rem]">
            </div><h2 className='font-bold text-lg font-mono max-lg:text-[0.8rem]'>{message}</h2>
        </div>
  </div>

  )
}
